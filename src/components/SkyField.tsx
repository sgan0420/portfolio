"use client";

import { useEffect, useRef, useState } from "react";
import { HiPause, HiPlay } from "react-icons/hi2";

// The initial SVG positions small baked cloud textures; canvas adds a pointer wake.
export default function SkyField() {
  const field = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(true);
  const userPaused = useRef(false);
  const refreshPlayback = useRef(() => {});

  useEffect(() => {
    const element = field.current;
    const surface = canvas.current;
    const section = element?.parentElement;
    if (!element || !surface || !section) return;
    const pointer = matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = true;
    let width = 0;
    let height = 0;
    let left = 0;
    let top = 0;
    let context: CanvasRenderingContext2D | null = null;
    let previousTime = 0;
    type Point = { x: number; y: number; born: number };
    let points: Point[] = [];
    let pendingPoint: Point | null = null;
    let painted: {
      left: number;
      top: number;
      width: number;
      height: number;
    } | null = null;
    const shouldPlay = () =>
      !userPaused.current &&
      !reducedMotion.matches &&
      visible &&
      !document.hidden;
    const clear = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      points = [];
      pendingPoint = null;
      painted = null;
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
      painted = null;
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
      // Coalesce high-frequency pointer input into the next drawing frame.
      if (pendingPoint) {
        const last = points.at(-1);
        if (
          !last ||
          Math.hypot(last.x - pendingPoint.x, last.y - pendingPoint.y) >= 6
        )
          points.push(pendingPoint);
        if (points.length > 90) points.shift();
        pendingPoint = null;
      }
      // Only the trail changes. Keep clearing away from the rest of the hero.
      if (painted)
        brush.clearRect(
          painted.left,
          painted.top,
          painted.width,
          painted.height
        );
      painted = null;
      points = points.filter((point) => now - point.born < 1400);
      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;
      points.forEach((point, i) => {
        const age = (now - point.born) / 1400;
        const alpha = (1 - age) * 0.8;
        const y = point.y - age * 24;
        minX = Math.min(minX, point.x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, point.x);
        maxY = Math.max(maxY, y);
        if (i > 0) {
          const previous = points[i - 1];
          brush.beginPath();
          brush.moveTo(
            previous.x,
            previous.y - ((now - previous.born) / 1400) * 24
          );
          brush.lineTo(point.x, y);
          brush.strokeStyle = `rgba(255,255,255,${alpha})`;
          brush.lineWidth = 2 + age * 10;
          brush.lineCap = "round";
          brush.stroke();
        }
      });
      if (points.length > 1)
        painted = {
          left: minX - 8,
          top: minY - 8,
          width: maxX - minX + 16,
          height: maxY - minY + 16,
        };
      if (points.length) frame = requestAnimationFrame(draw);
    };
    const move = (event: PointerEvent) => {
      if (!shouldPlay() || !pointer.matches || event.pointerType !== "mouse")
        return;
      // The canvas is optional: allocate it only when the effect is first used.
      if (!context) {
        context = surface.getContext("2d");
        if (!context) return;
        sizeCanvas();
        resize.observe(element);
      }
      pendingPoint = {
        x: event.pageX - left,
        y: event.pageY - top,
        born: performance.now(),
      };
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
          <g className="cloud-bank cloud-bank-far">
            <image
              className="cloud-palette"
              href="/sky/cloud-far.webp"
              width="1600"
              height="2000"
            />
          </g>
          <g className="cloud-bank cloud-bank-near">
            <image
              className="cloud-palette"
              href="/sky/cloud-near.webp"
              width="1600"
              height="2000"
            />
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
