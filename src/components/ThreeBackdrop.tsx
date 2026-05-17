import { useEffect, useRef } from "react";
import * as THREE from "three";

type LayerConfig = {
  color: number;
  radius: number;
  count: number;
  speed: number;
  size: number;
  opacity: number;
};

const createPoints = (config: LayerConfig) => {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(config.count * 3);
  for (let i = 0; i < config.count; i += 1) {
    const r = config.radius * Math.sqrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * config.radius * 0.6;
    positions[i * 3] = r * Math.cos(theta);
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = r * Math.sin(theta);
  }
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: config.color,
    size: config.size,
    opacity: config.opacity,
    transparent: true,
    depthWrite: false,
  });

  return new THREE.Points(geometry, material);
};

const ThreeBackdrop = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 8;

    const layers: LayerConfig[] = [
      { color: 0xf5d08b, radius: 6, count: 1800, speed: 0.035, size: 0.02, opacity: 0.55 },
      { color: 0x7bd0c4, radius: 4.5, count: 1200, speed: -0.02, size: 0.015, opacity: 0.35 },
    ];

    const points = layers.map((layer) => {
      const mesh = createPoints(layer);
      scene.add(mesh);
      return { mesh, speed: layer.speed };
    });

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
    const animate = (time: number) => {
      points.forEach(({ mesh, speed }) => {
        mesh.rotation.y = time * 0.0001 * speed * 60;
        mesh.rotation.x = time * 0.00005 * speed * 60;
      });
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frameId);
      points.forEach(({ mesh }) => {
        mesh.geometry.dispose();
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((material) => material.dispose());
        } else {
          mesh.material.dispose();
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div className="vt-three-backdrop" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default ThreeBackdrop;
