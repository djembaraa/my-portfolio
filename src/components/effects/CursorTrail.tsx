"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface ClickEffect {
  id: number;
  x: number;
  y: number;
}

export default function CursorTrail() {
  const { theme } = useTheme();
  const coords = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mainCursorRef = useRef<HTMLDivElement>(null);

  const [clickEffects, setClickEffects] = useState<ClickEffect[]>([]);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const handleMouseMove = (e: MouseEvent) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsMouseDown(true);
      const id = Date.now();
      setClickEffects((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setClickEffects((prev) => prev.filter((c) => c.id !== id));
      }, 600);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    function animateCursor() {
      const x = coords.current.x;
      const y = coords.current.y;

      if (mainCursorRef.current) {
        mainCursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }

      requestAnimationFrame(animateCursor);
    }

    animateCursor();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.head.removeChild(style);
    };
  }, []);

  const ArrowIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
        fill={theme === "dark" ? "white" : "black"}
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  );

  return (
    <>
      {clickEffects.map((c) => (
        <span
          key={c.id}
          style={{
            position: "fixed",
            left: c.x - 25,
            top: c.y - 25,
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor:
              theme === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)",
            pointerEvents: "none",
            zIndex: 99999999,
            animation: "ripple 0.6s ease-out forwards",
          }}
        />
      ))}

      <div
        ref={mainCursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 999999999,
          willChange: "transform",
          marginTop: "-3px",
          marginLeft: "-3px",
        }}
      >
        {isMouseDown ? (
          <div style={{ transform: "rotate(-30deg)" }}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill={theme === "dark" ? "white" : "black"}
              stroke="white"
              strokeWidth="1"
            >
              <path d="M10 2a2 2 0 0 1 2 2v9.5a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 .5-.5V8a1.5 1.5 0 0 1 3 0v5.5a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 .5-.5V9.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-6a2 2 0 0 1 2-2h.5a.5.5 0 0 0 .5-.5V4a2 2 0 0 1 2-2z" />
            </svg>
          </div>
        ) : (
          ArrowIcon
        )}
      </div>

      <style>{`
        @keyframes ripple {
          0% { transform: scale(0); opacity: 0.8; }
          100% { transform: scale(3); opacity: 0; }
        }
      `}</style>
    </>
  );
}
