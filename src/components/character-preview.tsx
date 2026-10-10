import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

type CharacterPreviewProps = {
  className?: string;
  modelPath?: string;
};

export function CharacterPreview({ className, modelPath = "/model.glb" }: CharacterPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    setStatus("loading");
    const container = containerRef.current;
    if (!container) return;

    let active = true;
    let frame = 0;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      setStatus("error");
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x283747, 2.2));
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(3, 5, 4);
    scene.add(keyLight);
    const fillLight = new THREE.DirectionalLight(0x76c9ff, 1.2);
    fillLight.position.set(-4, 2, -3);
    scene.add(fillLight);

    let model: THREE.Group | null = null;
    const resize = () => {
      if (!active) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      ({ scene: gltfScene }) => {
        if (!active) return;
        model = gltfScene;
        const bounds = new THREE.Box3().setFromObject(model);
        const center = bounds.getCenter(new THREE.Vector3());
        const size = bounds.getSize(new THREE.Vector3());
        const largestSide = Math.max(size.x, size.y, size.z);
        if (largestSide > 0) {
          const scale = 2 / largestSide;
          model.scale.setScalar(scale);
          model.position.sub(center.multiplyScalar(scale));
        }
        scene.add(model);
        camera.position.set(0, 0.15, 3.6);
        camera.lookAt(0, 0, 0);
        setStatus("ready");
      },
      undefined,
      () => {
        if (active) setStatus("error");
      },
    );

    const animate = () => {
      frame = window.requestAnimationFrame(animate);
      if (model) model.rotation.y += 0.003;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      active = false;
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      if (model) {
        model.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            const materials = Array.isArray(object.material) ? object.material : [object.material];
            materials.forEach((material) => {
              Object.values(material).forEach((value) => {
                if (value instanceof THREE.Texture) value.dispose();
              });
              material.dispose();
            });
          }
        });
        scene.remove(model);
      }
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [modelPath]);

  return (
    <div
      className={`${className ?? ""}${status === "ready" ? "" : " character-scene-preview-status"}`}
      ref={containerRef}
      role="img"
      aria-label={`3D preview of the ${modelPath.includes("model1") ? "female" : "male"} Lagos World character`}
    >
      {status === "loading" && (
        <span className="character-model-status" role="status" aria-live="polite">
          <span className="character-model-spinner" aria-hidden="true" />
          <span>Loading character…</span>
        </span>
      )}
      {status === "error" && (
        <span className="character-model-status" role="status">
          Character preview could not be loaded.
        </span>
      )}
    </div>
  );
}
