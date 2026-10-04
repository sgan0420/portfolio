"use client";

import { useEffect, useRef, useState } from "react";
import { HiPause, HiPlay } from "react-icons/hi2";

// The sky is SVG in the initial HTML. Canvas only adds a temporary pointer wake.
export default function SkyField() {
  const field = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const element = field.current;
    const surface = canvas.current;
    const section = element?.parentElement;
    const context = surface?.getContext("2d");
    if (!element || !surface || !section || !context) return;
    const query = matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
    );
    let frame = 0;
    let visible = true;
    let width = 0;
    let height = 0;
    let previousTime = 0;
    let points: { x: number; y: number; born: number }[] = [];
    const clear = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      points = [];
      context.clearRect(0, 0, width, height);
    };
    const resize = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width;
      height = entry.contentRect.height;
      const ratio = Math.min(devicePixelRatio, 1.5);
      surface.width = width * ratio;
      surface.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    });
    resize.observe(element);
    const draw = (now: number) => {
      frame = 0;
      if (now - previousTime < 30) {
        frame = requestAnimationFrame(draw);
        return;
      }
      previousTime = now;
      context.clearRect(0, 0, width, height);
      points = points.filter((point) => now - point.born < 1400);
      const dark = document.documentElement.classList.contains("dark");
      points.forEach((point, i) => {
        const age = (now - point.born) / 1400;
        const alpha = (1 - age) * 0.8;
        const y = point.y - age * 24;
        if (i > 0) {
          const previous = points[i - 1];
          context.beginPath();
          context.moveTo(
            previous.x,
            previous.y - ((now - previous.born) / 1400) * 24
          );
          context.lineTo(point.x, y);
          context.strokeStyle = `rgba(${dark ? "174,199,255" : "255,255,255"},${alpha})`;
          context.lineWidth = 2 + age * 10;
          context.lineCap = "round";
          context.stroke();
        }
        if (i % 3 === 0) {
          context.fillStyle = `rgba(${dark ? "214,225,255" : "46,75,147"},${alpha * 0.7})`;
          const size = 2.5 * (1 - age);
          context.fillRect(
            point.x + Math.sin(i * 4) * age * 35,
            y - 12,
            size,
            size
          );
        }
      });
      if (points.length) frame = requestAnimationFrame(draw);
    };
    const move = (event: PointerEvent) => {
      if (paused || !query.matches || !visible || event.pointerType !== "mouse")
        return;
      const rect = element.getBoundingClientRect();
      const point = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        born: performance.now(),
      };
      const last = points.at(-1);
      if (last && Math.hypot(last.x - point.x, last.y - point.y) < 6) return;
      points.push(point);
      if (points.length > 90) points.shift();
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const sync = () => {
      element.dataset.still = String(paused || !visible || document.hidden);
      if (paused || !query.matches || !visible || document.hidden) clear();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(element);
    sync();
    query.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    section.addEventListener("pointermove", move, { passive: true });
    return () => {
      clear();
      resize.disconnect();
      observer.disconnect();
      query.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
      section.removeEventListener("pointermove", move);
    };
  }, [paused]);

  return (
    <>
      <div
        ref={field}
        className="sky-field"
        aria-hidden="true"
        data-still={paused}
      >
        <svg
          className="cloudscape"
          viewBox="0 0 1600 1000"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <defs>
            <linearGradient id="cloud-light" x1="0" y1="0" x2="0.3" y2="1">
              <stop className="cloud-highlight" />
              <stop offset="0.52" className="cloud-mid" />
              <stop offset="1" className="cloud-shadow" />
            </linearGradient>
            <filter
              id="cloud-soft"
              x="-25%"
              y="-35%"
              width="150%"
              height="170%"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.008"
                numOctaves="3"
                seed="12"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="45"
                xChannelSelector="R"
                yChannelSelector="G"
              />
              <feGaussianBlur stdDeviation="7" />
            </filter>
            <radialGradient id="cloud-volume" cx="40%" cy="20%" r="80%">
              <stop className="cloud-highlight" />
              <stop offset="0.6" className="cloud-mid" />
              <stop offset="1" className="cloud-shadow" />
            </radialGradient>
          </defs>
          <g
            className="cloud-bank cloud-bank-far"
            filter="url(#cloud-soft)"
            fill="url(#cloud-light)"
          >
            <path d="M-300 690C-220 460-40 590 50 530C130 465 165 600 255 570C310 480 380 525 410 595C490 530 585 590 610 680C720 610 795 665 840 735L900 1100H-300Z" />
            <path d="M1000 820C1060 690 1160 700 1200 620C1240 550 1325 590 1370 535C1420 400 1550 485 1600 565C1720 480 1790 570 1900 540L1900 1100H950Z" />
          </g>
          <g
            className="cloud-bank cloud-bank-near"
            filter="url(#cloud-soft)"
            fill="url(#cloud-volume)"
          >
            <ellipse cx="40" cy="870" rx="320" ry="220" />
            <ellipse cx="210" cy="810" rx="185" ry="135" />
            <ellipse cx="360" cy="900" rx="260" ry="165" />
            <ellipse cx="690" cy="1045" rx="420" ry="180" />
            <ellipse cx="1260" cy="1020" rx="350" ry="215" />
            <ellipse cx="1500" cy="850" rx="270" ry="220" />
            <ellipse cx="1720" cy="780" rx="260" ry="170" />
          </g>
        </svg>
        <div className="sky-horizon" />
        <canvas ref={canvas} className="sky-trail" />
      </div>
      <button
        className="sky-motion-control"
        onClick={() => setPaused(!paused)}
        aria-pressed={paused}
        aria-label={paused ? "Play sky animation" : "Pause sky animation"}
      >
        {paused ? (
          <HiPlay aria-hidden="true" />
        ) : (
          <HiPause aria-hidden="true" />
        )}
        <span>{paused ? "Play sky" : "Pause sky"}</span>
      </button>
    </>
  );
}
