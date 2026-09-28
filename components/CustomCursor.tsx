"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!cursor || !finePointer.matches || reducedMotion.matches) return;

    const root = document.documentElement;
    let pointerX = 0;
    let pointerY = 0;
    let previousPointerX = 0;
    let previousPointerY = 0;
    let angle = 0;
    let previousAngle = 0;
    let angleDisplacement = 0;
    root.classList.add("has-custom-cursor");

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      previousPointerX = pointerX;
      previousPointerY = pointerY;
      pointerX = event.clientX;
      pointerY = event.clientY;
      const distanceX = previousPointerX - pointerX;
      const distanceY = previousPointerY - pointerY;

      if (Math.hypot(distanceX, distanceY) > 1) {
        const unsortedAngle = Math.atan(Math.abs(distanceY) / Math.abs(distanceX)) * 57.296;
        previousAngle = angle;

        if (distanceX <= 0 && distanceY >= 0) angle = 90 - unsortedAngle;
        else if (distanceX < 0 && distanceY < 0) angle = unsortedAngle + 90;
        else if (distanceX >= 0 && distanceY <= 0) angle = 270 - unsortedAngle;
        else if (distanceX > 0 && distanceY > 0) angle = unsortedAngle + 270;

        if (!Number.isNaN(angle)) {
          if (angle - previousAngle <= -270) angleDisplacement += 360 + angle - previousAngle;
          else if (angle - previousAngle >= 270) angleDisplacement += angle - previousAngle - 360;
          else angleDisplacement += angle - previousAngle;
        } else {
          angle = previousAngle;
        }
      }

      cursor.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) rotate(${angleDisplacement}deg)`;
      cursor.dataset.visible = "true";
    };
    const handlePointerLeave = () => {
      cursor.dataset.visible = "false";
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      root.classList.remove("has-custom-cursor");
      document.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div className="custom-cursor" ref={cursorRef} aria-hidden="true" data-visible="false">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          className="custom-cursor__outer"
          d="M16 1a4.58 4.58 0 0 0-4.24 2.8L2.84 24.33A4.58 4.58 0 0 0 7 30.75a6.08 6.08 0 0 0 1.21-.17 1.87 1.87 0 0 0 .4-.13L16 27.18l7.29 3.44a1.64 1.64 0 0 0 .39.14A6.37 6.37 0 0 0 25 31a4.59 4.59 0 0 0 4.21-6.41l-9-20.75A4.62 4.62 0 0 0 16 1Z"
        />
        <path
          className="custom-cursor__inner"
          d="M25 30a5.82 5.82 0 0 1-1.09-.17l-.2-.07-7.36-3.48a.72.72 0 0 0-.35-.08.78.78 0 0 0-.33.07L8.24 29.54a.66.66 0 0 1-.2.06 5.17 5.17 0 0 1-1 .15 3.6 3.6 0 0 1-3.29-5L12.68 4.2a3.59 3.59 0 0 1 6.58 0l9 20.74A3.6 3.6 0 0 1 25 30Z"
        />
      </svg>
    </div>
  );
}
