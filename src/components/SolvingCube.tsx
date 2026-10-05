"use client";

import { memo, useEffect, useRef, useState, type CSSProperties } from "react";
import { HiPause, HiPlay } from "react-icons/hi2";
import { shouldLimitEffects } from "@/lib/performance";
import {
  axisIndex,
  createCube,
  cubieTransform,
  scrambleMoves,
  solveMoves,
  turnCube,
  type CubeMove,
  type Cubie,
} from "@/lib/rubik-cube";

const faces = ["front", "back", "right", "left", "top", "bottom"];
const scrambled = scrambleMoves.reduce(turnCube, createCube());
const sequence = [...solveMoves, ...scrambleMoves];
const turnDuration = 620;

// A turn changes nine cubies. Keep the other seventeen cubies and their faces
// out of React's update work, including updates to the playback controls.
const Cubelet = memo(function Cubelet({ cubie }: { cubie: Cubie }) {
  return (
    <div className="cubelet" style={{ transform: cubieTransform(cubie) }}>
      {faces.map((face, index) => (
        <span
          key={face}
          className={`cube-face cube-${face} cube-${cubie.colors[index]}`}
        />
      ))}
    </div>
  );
});

export default function SolvingCube() {
  const [cube, setCube] = useState(scrambled);
  const [move, setMove] = useState<CubeMove | null>(null);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [canAnimate, setCanAnimate] = useState(false);
  const [solved, setSolved] = useState(false);
  const [turns, setTurns] = useState(0);
  const scene = useRef<HTMLDivElement>(null);
  const userPaused = useRef(false);
  const refreshPlayback = useRef(() => {});

  useEffect(() => {
    userPaused.current = shouldLimitEffects();
    setPaused(userPaused.current);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 768px)");
    let visible = false;
    let currentCube = scrambled;
    let cursor = 0;
    let turning = false;
    let nextTimer: ReturnType<typeof setTimeout> | undefined;
    let commitTimer: ReturnType<typeof setTimeout> | undefined;

    const enabled = () => desktop.matches && !reducedMotion.matches;
    const shouldPlay = () =>
      enabled() && visible && !document.hidden && !userPaused.current;

    const scheduleTurn = (delay: number) => {
      if (turning || nextTimer !== undefined || !shouldPlay()) return;
      nextTimer = setTimeout(() => {
        nextTimer = undefined;
        if (!shouldPlay()) return;
        const next = sequence[cursor];
        turning = true;
        setSolved(false);
        setMove(next);
        commitTimer = setTimeout(() => {
          currentCube = turnCube(currentCube, next);
          cursor = (cursor + 1) % sequence.length;
          turning = false;
          commitTimer = undefined;
          setCube(currentCube);
          setMove(null);
          setTurns((count) => count + 1);
          setSolved(cursor === solveMoves.length);
          scheduleTurn(
            cursor === solveMoves.length || cursor === 0 ? 550 : 100
          );
        }, turnDuration + 32);
      }, delay);
    };

    const updatePlayback = () => {
      const available = enabled();
      setCanAnimate(available);
      setPlaying(shouldPlay());
      if (!shouldPlay()) {
        clearTimeout(nextTimer);
        nextTimer = undefined;
      }
      if (!available) {
        clearTimeout(commitTimer);
        commitTimer = undefined;
        turning = false;
        currentCube = createCube();
        // Resume with a scramble when motion is enabled again.
        cursor = solveMoves.length;
        setCube(currentCube);
        setMove(null);
        setSolved(true);
      } else {
        // An in-flight turn settles before pausing, preserving a valid cube.
        scheduleTurn(350);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        updatePlayback();
      },
      { threshold: 0.05 }
    );
    if (scene.current) observer.observe(scene.current);
    refreshPlayback.current = updatePlayback;
    reducedMotion.addEventListener("change", updatePlayback);
    desktop.addEventListener("change", updatePlayback);
    document.addEventListener("visibilitychange", updatePlayback);
    updatePlayback();

    return () => {
      clearTimeout(nextTimer);
      clearTimeout(commitTimer);
      observer.disconnect();
      reducedMotion.removeEventListener("change", updatePlayback);
      desktop.removeEventListener("change", updatePlayback);
      document.removeEventListener("visibilitychange", updatePlayback);
      refreshPlayback.current = () => {};
    };
  }, []);

  const togglePlayback = () => {
    userPaused.current = !userPaused.current;
    setPaused(userPaused.current);
    refreshPlayback.current();
  };

  return (
    <div
      ref={scene}
      className="heading-cube"
      data-playing={playing}
      data-solved={solved}
      data-turns={turns}
      style={{ "--cube-turn-duration": `${turnDuration}ms` } as CSSProperties}
    >
      <div className="cube-visual" aria-hidden="true">
        <div className="cube-shadow" />
        <div className="cube-float">
          <div className="cube-object">
            {cube.map((cubie) => {
              const moving =
                move && cubie.position[axisIndex[move.axis]] === move.layer;
              return (
                <div
                  key={cubie.id}
                  className={`cube-turn${moving ? " cube-turn-moving" : ""}`}
                  style={{
                    transform: `rotate${(move?.axis ?? "x").toUpperCase()}(${moving ? move.direction * 90 : 0}deg)`,
                  }}
                >
                  <Cubelet cubie={cubie} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {canAnimate && (
        <button
          type="button"
          className="cube-motion-control"
          aria-label={paused ? "Resume cube animation" : "Pause cube animation"}
          title={paused ? "Resume animation" : "Pause animation"}
          onClick={togglePlayback}
        >
          {paused ? (
            <HiPlay aria-hidden="true" />
          ) : (
            <HiPause aria-hidden="true" />
          )}
        </button>
      )}
    </div>
  );
}
