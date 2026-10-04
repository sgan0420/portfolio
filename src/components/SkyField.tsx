"use client";

import { useEffect, useRef } from "react";

/** A static, server-rendered light field; pointer movement only enhances it. */
export default function SkyField() {
  const field = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = field.current;
    const section = element?.parentElement;
    if (!element || !section) return;
    const query = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
    );
    let frame = 0;
    let x = 0;
    let y = 0;
    const render = () => {
      element.style.setProperty("--drift-x", `${x}px`);
      element.style.setProperty("--drift-y", `${y}px`);
      frame = 0;
    };
    const move = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      x = ((event.clientX - rect.left) / rect.width - 0.5) * 70;
      y = ((event.clientY - rect.top) / rect.height - 0.5) * 50;
      if (!frame) frame = requestAnimationFrame(render);
    };
    const reset = () => {
      x = 0;
      y = 0;
      if (!frame) frame = requestAnimationFrame(render);
    };
    const sync = () => {
      section.removeEventListener("pointermove", move);
      if (query.matches)
        section.addEventListener("pointermove", move, { passive: true });
      else reset();
    };
    sync();
    query.addEventListener("change", sync);
    section.addEventListener("pointerleave", reset);
    return () => {
      cancelAnimationFrame(frame);
      query.removeEventListener("change", sync);
      section.removeEventListener("pointermove", move);
      section.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <div ref={field} className="sky-field" aria-hidden="true">
      <div className="sky-glow" />
      <div className="orbital-art">
        <div className="orb-halo" />
        <div className="orb-core" />
        <svg className="orb-grid" viewBox="0 0 500 500" fill="none">
          <circle cx="250" cy="250" r="174" />
          {[42, 85, 130].map((radius) => (
            <ellipse key={radius} cx="250" cy="250" rx={radius} ry="174" />
          ))}
          {[140, 195, 250, 305, 360].map((cy) => (
            <ellipse
              key={cy}
              cx="250"
              cy={cy}
              rx={Math.sqrt(174 ** 2 - (cy - 250) ** 2)}
              ry="20"
            />
          ))}
        </svg>
        <div className="orb-track orb-track-one">
          <span />
        </div>
        <div className="orb-track orb-track-two">
          <span />
        </div>
        <span className="orb-point orb-point-one" />
        <span className="orb-point orb-point-two" />
      </div>
    </div>
  );
}
