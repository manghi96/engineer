"use client";

import { useEffect, useRef, useState } from "react";

const MINIMUM_LOADING_DURATION = 2000;
const PIPE_COUNT = 22;
const PIPE_SPEED_MULTIPLIER = 12;

type Pipe = {
  x: number;
  y: number;
  previousX: number;
  previousY: number;
  horizontal: boolean;
  direction: number;
  speed: number;
  turnIn: number;
  lineWidth: number;
};

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export default function PageLoader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let pageLoaded = document.readyState === "complete";
    let minimumDurationPassed = false;

    const hideWhenReady = () => {
      if (pageLoaded && minimumDurationPassed) setVisible(false);
    };
    const handleLoad = () => {
      pageLoaded = true;
      hideWhenReady();
    };
    const minimumDurationTimer = window.setTimeout(() => {
      minimumDurationPassed = true;
      hideWhenReady();
    }, MINIMUM_LOADING_DURATION);

    if (!pageLoaded) window.addEventListener("load", handleLoad, { once: true });

    return () => {
      window.clearTimeout(minimumDurationTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let width = 0;
    let height = 0;
    let previousFrame = 0;
    let elapsed = 0;
    let animationFrame = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pipes: Pipe[] = [];
    let gradientColors = ["#416CD7", "#2563EB", "#93C5FD"];

    const updateGradientColors = () => {
      const styles = window.getComputedStyle(document.documentElement);
      gradientColors = [
        styles.getPropertyValue("--loader-start").trim(),
        styles.getPropertyValue("--loader-mid").trim(),
        styles.getPropertyValue("--loader-end").trim(),
      ];
    };

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      if (pipes.length === 0) {
        const count = width < 640 ? Math.floor(PIPE_COUNT / 2) : PIPE_COUNT;
        for (let index = 0; index < count; index += 1) {
          const x = randomBetween(0, width);
          const y = randomBetween(0, height);
          pipes.push({
            x,
            y,
            previousX: x,
            previousY: y,
            horizontal: Math.random() > 0.5,
            direction: Math.random() > 0.5 ? 1 : -1,
            speed: randomBetween(45, 105) * PIPE_SPEED_MULTIPLIER,
            turnIn: randomBetween(0.5, 1.8),
            lineWidth: randomBetween(1.5, 3),
          });
        }
      }
    };

    const drawFrame = (time: number) => {
      const delta = previousFrame
        ? Math.min((time - previousFrame) / 1000, 0.05)
        : reducedMotion
          ? 0.08
          : 0;
      previousFrame = time;
      elapsed += delta;

      if (elapsed >= 10) {
        context.clearRect(0, 0, width, height);
        elapsed = 0;
      }

      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, gradientColors[0]);
      gradient.addColorStop(0.5, gradientColors[1]);
      gradient.addColorStop(1, gradientColors[2]);
      context.strokeStyle = gradient;
      context.lineCap = "round";

      pipes.forEach((pipe) => {
        pipe.previousX = pipe.x;
        pipe.previousY = pipe.y;

        if (pipe.horizontal) pipe.x += pipe.direction * pipe.speed * delta;
        else pipe.y += pipe.direction * pipe.speed * delta;

        pipe.turnIn -= delta;
        if (pipe.turnIn <= 0) {
          pipe.horizontal = !pipe.horizontal;
          pipe.direction = Math.random() > 0.5 ? 1 : -1;
          pipe.turnIn = randomBetween(0.5, 1.8);
        }

        if (pipe.x < 0 || pipe.x > width || pipe.y < 0 || pipe.y > height) {
          pipe.x = randomBetween(0, width);
          pipe.y = randomBetween(0, height);
          pipe.previousX = pipe.x;
          pipe.previousY = pipe.y;
        }

        context.beginPath();
        context.lineWidth = pipe.lineWidth;
        context.moveTo(pipe.previousX, pipe.previousY);
        context.lineTo(pipe.x, pipe.y);
        context.stroke();
      });

      if (!reducedMotion) animationFrame = window.requestAnimationFrame(drawFrame);
    };

    resizeCanvas();
    updateGradientColors();
    const themeObserver = new MutationObserver(updateGradientColors);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    window.addEventListener("resize", resizeCanvas);
    animationFrame = window.requestAnimationFrame(drawFrame);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      themeObserver.disconnect();
    };
  }, [visible]);

  return (
    <div
      className={`page-loader${visible ? "" : " page-loader--hidden"}`}
      role="status"
      aria-label="Loading page"
      aria-hidden={!visible}
    >
      <canvas ref={canvasRef} className="page-loader__pipes" aria-hidden="true" />
      <span className="sr-only">Loading</span>
    </div>
  );
}