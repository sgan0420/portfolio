"use client";

import { useEffect, useRef, useState } from "react";
import { HiPause, HiPlay } from "react-icons/hi2";
import { shouldLimitEffects } from "@/lib/performance";

// The sky is SVG in the initial HTML. Canvas only adds a temporary pointer wake.
export default function SkyField() {
  const field = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(false);
  const userPaused = useRef<boolean | null>(null);
  const refreshPlayback = useRef(() => {});

  useEffect(() => {
    const element = field.current;
    const surface = canvas.current;
    const section = element?.parentElement;
    if (!element || !surface || !section) return;
    const pointer = matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    userPaused.current ??= shouldLimitEffects();
    setPaused(userPaused.current);
    let frame = 0;
    let visible = false;
    let width = 0;
    let height = 0;
    let left = 0;
    let top = 0;
    let context: CanvasRenderingContext2D | null = null;
    let previousTime = 0;
    let previousCapture = 0;
    let points: { x: number; y: number; born: number }[] = [];
    const shouldPlay = () =>
      !userPaused.current &&
      !reducedMotion.matches &&
      visible &&
      !document.hidden;
    const clear = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      points = [];
      // Release the backing buffer on touch devices, when paused or offscreen.
      surface.width = 0;
      surface.height = 0;
      context = null;
      resize.unobserve(element);
    };
    const sizeCanvas = () => {
      const rect = element.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      left = rect.left + window.scrollX;
      top = rect.top + window.scrollY;
      const ratio = Math.min(devicePixelRatio, 1.5);
      surface.width = width * ratio;
      surface.height = height * ratio;
      context?.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const resize = new ResizeObserver(sizeCanvas);
    const draw = (now: number) => {
      frame = 0;
      if (!context || !shouldPlay()) return;
      const brush = context;
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
          brush.beginPath();
          brush.moveTo(
            previous.x,
            previous.y - ((now - previous.born) / 1400) * 24
          );
          brush.lineTo(point.x, y);
          brush.strokeStyle = `rgba(${dark ? "174,199,255" : "255,255,255"},${alpha})`;
          brush.lineWidth = 2 + age * 10;
          brush.lineCap = "round";
          brush.stroke();
        }
        if (i % 3 === 0) {
          brush.fillStyle = `rgba(${dark ? "214,225,255" : "46,75,147"},${alpha * 0.7})`;
          const size = 2.5 * (1 - age);
          brush.fillRect(
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
      if (!shouldPlay() || !pointer.matches || event.pointerType !== "mouse")
        return;
      const now = performance.now();
      if (now - previousCapture < 30) return;
      previousCapture = now;
      // The canvas is optional: allocate it only when the effect is first used.
      if (!context) {
        context = surface.getContext("2d");
        if (!context) return;
        sizeCanvas();
        resize.observe(element);
      }
      const point = {
        x: event.pageX - left,
        y: event.pageY - top,
        born: now,
      };
      const last = points.at(-1);
      if (last && Math.hypot(last.x - point.x, last.y - point.y) < 6) return;
      points.push(point);
      if (points.length > 90) points.shift();
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const sync = () => {
      const active = shouldPlay();
      setPlaying(active);
      if (!active || !pointer.matches) clear();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(element);
    refreshPlayback.current = sync;
    sync();
    pointer.addEventListener("change", sync);
    reducedMotion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    section.addEventListener("pointermove", move, { passive: true });
    return () => {
      clear();
      resize.disconnect();
      observer.disconnect();
      pointer.removeEventListener("change", sync);
      reducedMotion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
      section.removeEventListener("pointermove", move);
      refreshPlayback.current = () => {};
    };
  }, []);

  const togglePlayback = () => {
    userPaused.current = !userPaused.current;
    setPaused(userPaused.current);
    refreshPlayback.current();
  };

  return (
    <>
      <div
        ref={field}
        className="sky-field"
        aria-hidden="true"
        data-still={!playing}
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
        <canvas ref={canvas} className="sky-trail" width={0} height={0} />
      </div>
      <button
        className="sky-motion-control"
        onClick={togglePlayback}
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
