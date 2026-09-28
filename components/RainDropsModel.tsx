"use client";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import {
  AmbientLight,
  BoxGeometry,
  DirectionalLight,
  DynamicDrawUsage,
  InstancedMesh,
  Matrix4,
  Mesh,
  MeshLambertMaterial,
  Object3D,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  ShadowMaterial,
  WebGLRenderer,
} from "three";
import { useEffect, useRef, useState } from "react";

type Ripple = {
  x: number;
  z: number;
  angle: number;
  radius: number;
  motion: number;
};

type WaterDrop = {
  mesh: Mesh<BoxGeometry, MeshLambertMaterial>;
  x: number;
  z: number;
  impacted: boolean;
};

const GRID_SIZE = 30;
const DROP_INTERVAL = 100;
const DROP_FALL_SPEED = 110;
const WAVE_LENGTH = 200;

function mapRange(value: number, inputStart: number, inputEnd: number, outputStart: number, outputEnd: number) {
  return outputStart + (outputEnd - outputStart) * ((value - inputStart) / (inputEnd - inputStart));
}

export default function RainDropsModel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({ antialias: true, alpha: true });
    } catch (cause) {
      const message = cause instanceof Error ? cause.message : "WebGL is unavailable.";
      console.error("Unable to initialize the interactive rain model.", cause);
      setError(message);
      return;
    }

    const scene = new Scene();
    const camera = new PerspectiveCamera(10, 1, 1, 1000);
    camera.position.set(-180, 180, 180);
    scene.add(camera);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.domElement.className = "rain-model__canvas";
    renderer.domElement.setAttribute("aria-label", "Interactive 3D rain ripple model. Drag to rotate and scroll to zoom.");
    container.appendChild(renderer.domElement);

    const ambientLight = new AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 0);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.far = 1000;
    directionalLight.shadow.camera.near = -100;
    directionalLight.shadow.camera.left = -40;
    directionalLight.shadow.camera.right = 40;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -20;
    directionalLight.shadow.camera.zoom = 1;
    directionalLight.shadow.camera.updateProjectionMatrix();
    const lightTarget = new Object3D();
    lightTarget.position.set(-50, -82, 40);
    directionalLight.target = lightTarget;
    scene.add(directionalLight);
    scene.add(lightTarget);

    const themeStyles = window.getComputedStyle(document.documentElement);
    const waterColor = themeStyles.getPropertyValue("--rain-water").trim() || "#4c71ec";
    const dropColor = themeStyles.getPropertyValue("--rain-drop").trim() || "#96cff8";
    const material = new MeshLambertMaterial({ color: waterColor });
    const geometry = new BoxGeometry(1, 1, 1);
    const mesh = new InstancedMesh(geometry, material, GRID_SIZE * GRID_SIZE);
    mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);

    const centerX = GRID_SIZE * 0.4;
    const centerZ = GRID_SIZE * 0.6;
    const pivots: Object3D[] = [];
    const positions = new Float32Array(GRID_SIZE * GRID_SIZE * 2);
    const matrix = new Matrix4();
    let instanceIndex = 0;

    for (let row = 0; row < GRID_SIZE; row += 1) {
      for (let column = 0; column < GRID_SIZE; column += 1) {
        const pivot = new Object3D();
        pivot.position.set(column - centerX, 0, row - centerZ);
        pivots.push(pivot);
        positions[instanceIndex * 2] = column - centerX;
        positions[instanceIndex * 2 + 1] = row - centerZ;
        pivot.updateMatrix();
        mesh.setMatrixAt(instanceIndex, pivot.matrix);
        instanceIndex += 1;
      }
    }
    mesh.instanceMatrix.needsUpdate = true;

    const floor = new Mesh(new PlaneGeometry(100, 100), new ShadowMaterial({ opacity: 0.3 }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1;
    floor.receiveShadow = true;
    scene.add(floor);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.04;

    const dropGeometry = new BoxGeometry(0.5, 2, 0.5);
    const dropMaterial = new MeshLambertMaterial({ color: dropColor });
    const ripples: Ripple[] = [];
    const drops: WaterDrop[] = [];
    let previousFrameTime = 0;
    let spawnElapsed = 0;
    let animationFrame = 0;
    let disposed = false;

    const updateModelColors = () => {
      const styles = window.getComputedStyle(document.documentElement);
      material.color.set(styles.getPropertyValue("--rain-water").trim() || "#4c71ec");
      dropMaterial.color.set(styles.getPropertyValue("--rain-drop").trim() || "#96cff8");
    };
    const themeObserver = new MutationObserver(updateModelColors);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const resizeObserver = new ResizeObserver(() => {
      const { width, height } = container.getBoundingClientRect();
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    });
    resizeObserver.observe(container);

    const animate = (time: number) => {
      if (disposed) return;
      const delta = previousFrameTime ? Math.min((time - previousFrameTime) / 1000, 0.05) : 0;
      previousFrameTime = time;
      spawnElapsed += delta;

      while (spawnElapsed >= DROP_INTERVAL / 1000) {
        spawnElapsed -= DROP_INTERVAL / 1000;
        const positionIndex = Math.floor(Math.random() * (GRID_SIZE * GRID_SIZE));
        const x = positions[positionIndex * 2];
        const z = positions[positionIndex * 2 + 1];
        const waterDrop = new Mesh(dropGeometry, dropMaterial);
        waterDrop.position.set(x, 50, z);
        scene.add(waterDrop);
        drops.push({ mesh: waterDrop, x, z, impacted: false });
      }

      drops.forEach((drop) => {
        drop.mesh.position.y -= DROP_FALL_SPEED * delta;
        if (drop.mesh.position.y <= 1 && !drop.impacted) {
          drop.impacted = true;
          ripples.push({ x: drop.x, z: drop.z, angle: 0, radius: 1, motion: -0.7 });
        }
      });

      for (let index = drops.length - 1; index >= 0; index -= 1) {
        if (drops[index].mesh.position.y <= -2) {
          scene.remove(drops[index].mesh);
          drops.splice(index, 1);
        }
      }

      pivots.forEach((pivot, index) => {
        const column = index % GRID_SIZE;
        const row = Math.floor(index / GRID_SIZE);
        let height = 0;

        ripples.forEach((ripple) => {
          const distance = Math.hypot(column - (ripple.x + centerX), row - (ripple.z + centerZ));
          if (distance < ripple.radius) {
            const offset = mapRange(distance, 0, -WAVE_LENGTH, -100, 100);
            const wave = Math.sin(ripple.angle + offset);
            height = mapRange(wave, -1, 0, ripple.motion > 0 ? 0 : ripple.motion, 0);
          }
        });

        pivot.position.y = height;
        pivot.updateMatrix();
        mesh.setMatrixAt(index, pivot.matrix);
      });

      for (let index = ripples.length - 1; index >= 0; index -= 1) {
        ripples[index].angle += 0.2;
        ripples[index].radius += 0.3;
        ripples[index].motion += 0.02;
        if (ripples[index].radius > 50) ripples.splice(index, 1);
      }

      mesh.instanceMatrix.needsUpdate = true;
      controls.update();
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    animationFrame = window.requestAnimationFrame(animate);
    setError(null);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      controls.dispose();
      drops.forEach(({ mesh: drop }) => scene.remove(drop));
      scene.remove(mesh, floor, ambientLight, directionalLight, lightTarget);
      geometry.dispose();
      material.dispose();
      dropGeometry.dispose();
      dropMaterial.dispose();
      floor.geometry.dispose();
      floor.material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="rain-model" ref={containerRef}>
      {error && (
        <p className="rain-model__error" role="status">
          3D model could not be displayed: {error}
        </p>
      )}
      <p className="rain-model__hint" aria-hidden="true">Drag to explore · Scroll to zoom</p>
    </div>
  );
}