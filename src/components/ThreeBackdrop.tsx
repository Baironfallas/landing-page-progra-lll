import { useEffect, useRef } from "react";
import * as THREE from "three";

const randomBetween = (min: number, max: number) =>
  min + Math.random() * (max - min);

type DriftLayer = {
  points: THREE.Points;
  positions: Float32Array;
  velocities: Float32Array;
  bounds: { x: [number, number]; y: [number, number]; z: [number, number] };
};

type OrbitLayer = {
  points: THREE.Points;
  positions: Float32Array;
  orbits: Float32Array;
};

const createDriftLayer = (
  count: number,
  size: number,
  color: number,
  bounds: { x: [number, number]; y: [number, number]; z: [number, number] },
): DriftLayer => {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 2);

  for (let i = 0; i < count; i += 1) {
    const i3 = i * 3;
    positions[i3] = randomBetween(bounds.x[0], bounds.x[1]);
    positions[i3 + 1] = randomBetween(bounds.y[0], bounds.y[1]);
    positions[i3 + 2] = randomBetween(bounds.z[0], bounds.z[1]);

    const i2 = i * 2;
    velocities[i2] = randomBetween(-0.0022, 0.0022);
    velocities[i2 + 1] = randomBetween(-0.008, -0.003);
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color,
    size,
    opacity: 0.75,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });

  const points = new THREE.Points(geometry, material);

  return { points, positions, velocities, bounds };
};

const createOrbitLayer = (
  count: number,
  size: number,
  color: number,
): OrbitLayer => {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const orbits = new Float32Array(count * 6);

  for (let i = 0; i < count; i += 1) {
    const radius = randomBetween(1.4, 3.8);
    const angle = randomBetween(0, Math.PI * 2);
    const speed = randomBetween(0.001, 0.003);
    const centerX = randomBetween(-1.8, 1.8);
    const centerY = randomBetween(-1.4, 1.4);
    const zBase = randomBetween(0, 8);

    const o = i * 6;
    orbits[o] = radius;
    orbits[o + 1] = angle;
    orbits[o + 2] = speed;
    orbits[o + 3] = centerX;
    orbits[o + 4] = centerY;
    orbits[o + 5] = zBase;

    const i3 = i * 3;
    positions[i3] = centerX + Math.cos(angle) * radius;
    positions[i3 + 1] = centerY + Math.sin(angle) * radius * 0.6;
    positions[i3 + 2] = zBase + Math.sin(angle * 0.7) * 0.35;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color,
    size,
    opacity: 0.55,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });

  const points = new THREE.Points(geometry, material);

  return { points, positions, orbits };
};

const ThreeBackdrop = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setClearColor(0x050505, 0);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.08);

    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 50);
    const baseCamera = new THREE.Vector3(0, 0, 8);
    camera.position.copy(baseCamera);

    const lowPower =
      typeof navigator !== "undefined" &&
      typeof navigator.hardwareConcurrency === "number" &&
      navigator.hardwareConcurrency < 4;
    const powerScale = lowPower ? 0.5 : 1;

    const warmCount = Math.round(400 * powerScale);
    const coolCount = Math.round(200 * powerScale);

    const warmGroup = new THREE.Group();
    const coolGroup = new THREE.Group();

    const warmBounds = {
      x: [-6, 6] as [number, number],
      y: [-4, 4] as [number, number],
      z: [-8, 0] as [number, number],
    };

    const warmMain = createDriftLayer(
      Math.round(warmCount * 0.6),
      1.1,
      0xf5d08b,
      warmBounds,
    );
    const warmSub = createDriftLayer(
      Math.round(warmCount * 0.4),
      0.7,
      0xf5d08b,
      warmBounds,
    );

    warmGroup.add(warmMain.points);
    warmGroup.add(warmSub.points);

    const coolMain = createOrbitLayer(
      Math.round(coolCount * 0.6),
      0.65,
      0x7bd0c4,
    );
    const coolSub = createOrbitLayer(
      Math.round(coolCount * 0.4),
      0.4,
      0x7bd0c4,
    );

    coolGroup.add(coolMain.points);
    coolGroup.add(coolSub.points);

    scene.add(warmGroup);
    scene.add(coolGroup);

    const reflector = new THREE.Mesh(
      new THREE.PlaneGeometry(30, 30),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.04,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      }),
    );
    reflector.position.y = -4;
    reflector.rotation.x = -Math.PI / 2;
    scene.add(reflector);

    let targetX = 0;
    let targetY = 0;
    let cameraOffsetX = 0;
    let cameraOffsetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 0.4;
      targetY = (event.clientY / window.innerHeight - 0.5) * 0.2;
    };

    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.gamma === null || event.beta === null) return;
      const gamma = Math.max(-30, Math.min(30, event.gamma));
      const beta = Math.max(-30, Math.min(30, event.beta));
      targetX = (gamma / 30) * 0.4;
      targetY = (beta / 30) * 0.2;
    };

    const isCoarsePointer =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(pointer: coarse)").matches;

    if (isCoarsePointer && "DeviceOrientationEvent" in window) {
      window.addEventListener("deviceorientation", handleOrientation, {
        passive: true,
      });
    } else {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    const resize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener("resize", resize);

    let frameId = 0;
    let lastTime = performance.now();
    let elapsed = 0;

    const updateDriftLayer = (layer: DriftLayer, deltaScale: number) => {
      const { positions, velocities, bounds } = layer;
      const count = positions.length / 3;
      for (let i = 0; i < count; i += 1) {
        const i3 = i * 3;
        const i2 = i * 2;

        positions[i3] += velocities[i2] * deltaScale;
        positions[i3 + 1] += velocities[i2 + 1] * deltaScale;

        if (positions[i3 + 1] < bounds.y[0]) {
          positions[i3 + 1] = bounds.y[1];
          positions[i3] = randomBetween(bounds.x[0], bounds.x[1]);
          positions[i3 + 2] = randomBetween(bounds.z[0], bounds.z[1]);
        }

        if (positions[i3] < bounds.x[0]) positions[i3] = bounds.x[1];
        if (positions[i3] > bounds.x[1]) positions[i3] = bounds.x[0];
      }
      layer.points.geometry.attributes.position.needsUpdate = true;
    };

    const updateOrbitLayer = (layer: OrbitLayer, deltaScale: number) => {
      const { positions, orbits } = layer;
      const count = positions.length / 3;

      for (let i = 0; i < count; i += 1) {
        const i3 = i * 3;
        const o = i * 6;
        const radius = orbits[o];
        const speed = orbits[o + 2];
        const centerX = orbits[o + 3];
        const centerY = orbits[o + 4];
        const zBase = orbits[o + 5];

        const angle = orbits[o + 1] + speed * deltaScale;
        orbits[o + 1] = angle;

        positions[i3] = centerX + Math.cos(angle) * radius;
        positions[i3 + 1] = centerY + Math.sin(angle) * radius * 0.6;
        positions[i3 + 2] = zBase + Math.sin(angle * 0.7) * 0.35;
      }

      layer.points.geometry.attributes.position.needsUpdate = true;
    };

    const animate = (time: number) => {
      const delta = Math.min(0.05, (time - lastTime) / 1000);
      lastTime = time;
      elapsed += delta;
      const deltaScale = delta * 60;

      updateDriftLayer(warmMain, deltaScale);
      updateDriftLayer(warmSub, deltaScale);
      updateOrbitLayer(coolMain, deltaScale);
      updateOrbitLayer(coolSub, deltaScale);

      cameraOffsetX += (targetX - cameraOffsetX) * 0.03;
      cameraOffsetY += (targetY - cameraOffsetY) * 0.03;
      camera.position.x = baseCamera.x + cameraOffsetX;
      camera.position.y = baseCamera.y + cameraOffsetY;
      camera.position.z = baseCamera.z;

      camera.lookAt(0, 0, 0);
      camera.rotation.x += -0.04 + elapsed * 0.012;

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleOrientation);
      window.cancelAnimationFrame(frameId);

      warmMain.points.geometry.dispose();
      warmSub.points.geometry.dispose();
      coolMain.points.geometry.dispose();
      coolSub.points.geometry.dispose();

      if (!Array.isArray(warmMain.points.material)) warmMain.points.material.dispose();
      if (!Array.isArray(warmSub.points.material)) warmSub.points.material.dispose();
      if (!Array.isArray(coolMain.points.material)) coolMain.points.material.dispose();
      if (!Array.isArray(coolSub.points.material)) coolSub.points.material.dispose();

      reflector.geometry.dispose();
      if (!Array.isArray(reflector.material)) reflector.material.dispose();

      renderer.dispose();
    };
  }, []);

  return (
    <div
      className="vt-three-backdrop"
      aria-hidden="true"
      style={{ zIndex: -1, width: "100vw", height: "100vh" }}
    >
      <canvas ref={canvasRef} />
      <div className="vt-backdrop-grain" />
      <div className="vt-backdrop-vignette" />
      <style>
        {`
          .vt-backdrop-grain {
            position: absolute;
            inset: 0;
            pointer-events: none;
            opacity: 0.035;
            mix-blend-mode: overlay;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E");
            animation: vt-grain-shift 0.8s steps(1) infinite;
          }

          .vt-backdrop-vignette {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background: radial-gradient(ellipse at center, transparent 40%, rgba(5, 5, 5, 0.85) 100%);
          }

          @keyframes vt-grain-shift {
            0% { background-position: 0% 0%; }
            10% { background-position: 12% 18%; }
            20% { background-position: 35% 7%; }
            30% { background-position: 50% 28%; }
            40% { background-position: 18% 62%; }
            50% { background-position: 67% 40%; }
            60% { background-position: 85% 20%; }
            70% { background-position: 30% 85%; }
            80% { background-position: 75% 70%; }
            90% { background-position: 20% 40%; }
            100% { background-position: 0% 0%; }
          }
        `}
      </style>
    </div>
  );
};

export default ThreeBackdrop;
