import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { GamePhone } from "@/components/game-phone";
import { createHouseLoadingManager } from "@/lib/preload-game-world";
import houseModelUrl from "../../house/source/на скетч в2.fbx?url";
import moonTextureUrl from "../../Auto Sky/(Footage)/Sky Elements/Images/Moon.webp?url";
import starsTextureUrl from "../../Auto Sky/(Footage)/Sky Elements/Images/Stars 4.webp?url";

type GameWorldProps = {
  character: "male" | "female";
  playerName: string;
};

type GameStatus = "loading" | "ready" | "error";

function getDaylightAmount(date: Date) {
  const hour = date.getHours() + date.getMinutes() / 60;
  const smoothstep = (start: number, end: number, value: number) => {
    const amount = THREE.MathUtils.clamp((value - start) / (end - start), 0, 1);
    return amount * amount * (3 - 2 * amount);
  };
  return smoothstep(5.5, 7.5, hour) * (1 - smoothstep(18, 20.5, hour));
}

const modelPaths = {
  male: "/model.glb",
  female: "/model1.glb",
} as const;

const movementKeys = new Set([
  "w",
  "a",
  "s",
  "d",
  "arrowup",
  "arrowleft",
  "arrowdown",
  "arrowright",
]);

function releaseSceneObject(object: THREE.Object3D) {
  object.traverse((child) => {
    if (
      child instanceof THREE.Mesh ||
      child instanceof THREE.Line ||
      child instanceof THREE.Points
    ) {
      child.geometry.dispose();
    }
    if (
      !(child instanceof THREE.Mesh) &&
      !(child instanceof THREE.Sprite) &&
      !(child instanceof THREE.Line) &&
      !(child instanceof THREE.Points)
    ) {
      return;
    }
    const materials = Array.isArray(child.material) ? child.material : [child.material];
    materials.forEach((material) => {
      Object.values(material).forEach((value) => {
        if (value instanceof THREE.Texture) value.dispose();
      });
      material.dispose();
    });
  });
}

function createTileTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas rendering is required for the house tile texture.");

  context.fillStyle = "#9b8d7b";
  context.fillRect(0, 0, canvas.width, canvas.height);
  let seed = 74113;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  const shades = ["#d7cdbb", "#d1c7b4", "#ddd3c1", "#cfc5b2"];
  const tileSize = 128;
  for (let row = 0; row < 4; row += 1) {
    for (let column = 0; column < 4; column += 1) {
      const x = column * tileSize;
      const y = row * tileSize;
      const inset = 4;
      const tileColor = shades[Math.floor(random() * shades.length)] ?? "#d7cdbb";
      const glaze = context.createLinearGradient(x, y, x + tileSize, y + tileSize);
      glaze.addColorStop(0, tileColor);
      glaze.addColorStop(0.55, "#e4dac8");
      glaze.addColorStop(1, "#c9beab");
      context.fillStyle = glaze;
      context.fillRect(x + inset, y + inset, tileSize - inset * 2, tileSize - inset * 2);
      context.strokeStyle = "rgba(255, 250, 238, 0.38)";
      context.lineWidth = 2;
      context.strokeRect(
        x + inset + 1,
        y + inset + 1,
        tileSize - inset * 2 - 2,
        tileSize - inset * 2 - 2,
      );
      context.strokeStyle = "rgba(87, 72, 54, 0.12)";
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(x + tileSize - inset - 1, y + inset);
      context.lineTo(x + tileSize - inset - 1, y + tileSize - inset);
      context.moveTo(x + inset, y + tileSize - inset - 1);
      context.lineTo(x + tileSize - inset, y + tileSize - inset - 1);
      context.stroke();
    }
  }
  for (let index = 0; index < 7000; index += 1) {
    context.globalAlpha = 0.025 + random() * 0.055;
    context.fillStyle = random() > 0.5 ? "#fff9ed" : "#756754";
    context.fillRect(random() * 512, random() * 512, 1 + random() * 2, 1 + random() * 2);
  }
  context.globalAlpha = 1;

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);
  texture.anisotropy = 8;
  return texture;
}

function createGrassField(count: number) {
  const vertices: number[] = [];
  const colors: number[] = [];
  const colorsByHeight = [
    new THREE.Color(0x253d1e),
    new THREE.Color(0x587b32),
    new THREE.Color(0x91a94d),
  ];
  const bladeCount = 7;
  const bladeHeight = 0.23;
  for (let blade = 0; blade < bladeCount; blade += 1) {
    const angle = (Math.PI * 2 * blade) / bladeCount;
    const sideX = Math.cos(angle) * 0.018;
    const sideZ = Math.sin(angle) * 0.018;
    const bendX = Math.cos(angle + 1.1) * 0.035;
    const bendZ = Math.sin(angle + 1.1) * 0.035;
    const levels = [
      { y: 0, center: 0, halfWidth: 1 },
      { y: bladeHeight * 0.52, center: 0.55, halfWidth: 0.66 },
      { y: bladeHeight, center: 1, halfWidth: 0.03 },
    ];
    levels.forEach((level, levelIndex) => {
      const centerX = bendX * level.center;
      const centerZ = bendZ * level.center;
      const width = level.halfWidth;
      vertices.push(
        centerX - sideX * width,
        level.y,
        centerZ - sideZ * width,
        centerX + sideX * width,
        level.y,
        centerZ + sideZ * width,
      );
      const color = colorsByHeight[levelIndex] ?? colorsByHeight[2]!;
      for (let vertex = 0; vertex < 2; vertex += 1) {
        colors.push(color.r, color.g, color.b);
      }
    });
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  const indices: number[] = [];
  for (let blade = 0; blade < bladeCount; blade += 1) {
    const baseIndex = blade * 6;
    for (let segment = 0; segment < 2; segment += 1) {
      const lower = baseIndex + segment * 2;
      const upper = lower + 2;
      indices.push(lower, lower + 1, upper + 1, lower, upper + 1, upper);
    }
  }
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    vertexColors: true,
    roughness: 0.92,
    side: THREE.DoubleSide,
  });
  const grassTime = { value: 0 };
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uGrassTime = grassTime;
    shader.vertexShader = shader.vertexShader.replace(
      "#include <common>",
      "#include <common>\nuniform float uGrassTime;",
    );
    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      `#include <begin_vertex>
        #ifdef USE_INSTANCING
          float windWave = sin(uGrassTime * 1.5 + instanceMatrix[3].x * 0.34 + instanceMatrix[3].z * 0.27);
          transformed.x += windWave * 0.045 * transformed.y;
          transformed.z += cos(uGrassTime * 1.15 + instanceMatrix[3].z * 0.3) * 0.035 * transformed.y;
        #endif`,
    );
  };
  material.customProgramCacheKey = () => "lagos-grass-wind-v2";
  const grass = new THREE.InstancedMesh(geometry, material, count);
  grass.userData.grassTime = grassTime;
  const transform = new THREE.Object3D();
  let seed = 92831;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  const variation = new THREE.Color();
  for (let index = 0; index < count; index += 1) {
    let x: number;
    let z: number;
    if (random() < 0.82) {
      const angle = random() * Math.PI * 2;
      const radius = Math.sqrt(random()) * 44;
      x = Math.cos(angle) * radius;
      z = Math.sin(angle) * radius;
    } else {
      x = (random() - 0.5) * 230;
      z = (random() - 0.5) * 230;
    }
    transform.position.set(x, 0, z);
    transform.rotation.y = random() * Math.PI * 2;
    const scale = 0.72 + random() * 0.55;
    transform.scale.set(scale, 0.75 + random() * 0.4, scale);
    transform.updateMatrix();
    grass.setMatrixAt(index, transform.matrix);
    variation.setHSL(0.25 + random() * 0.06, 0.42 + random() * 0.24, 0.22 + random() * 0.16);
    grass.setColorAt(index, variation);
  }
  grass.instanceMatrix.needsUpdate = true;
  if (grass.instanceColor) grass.instanceColor.needsUpdate = true;
  grass.computeBoundingSphere();
  return grass;
}

function createGrassSoilTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas rendering is required for the grass ground texture.");
  context.fillStyle = "#354b27";
  context.fillRect(0, 0, canvas.width, canvas.height);
  let seed = 24817;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  const shades = ["#293e22", "#3c552b", "#526b33", "#647541", "#283a20"];
  for (let index = 0; index < 16000; index += 1) {
    const shade = shades[Math.floor(random() * shades.length)] ?? "#354b27";
    context.globalAlpha = 0.12 + random() * 0.25;
    context.strokeStyle = shade;
    context.lineWidth = 0.5 + random() * 2;
    const x = random() * canvas.width;
    const y = random() * canvas.height;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + (random() - 0.5) * 5, y + 1 + random() * 5);
    context.stroke();
  }
  context.globalAlpha = 1;
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(36, 36);
  texture.anisotropy = 8;
  return texture;
}

export function GameWorld({ character, playerName }: GameWorldProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pressedKeys = useRef(new Set<string>());
  const phoneOpenRef = useRef(false);
  const [status, setStatus] = useState<GameStatus>("loading");
  const [phoneOpen, setPhoneOpen] = useState(false);
  phoneOpenRef.current = phoneOpen;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let active = true;
    let frame = 0;
    let house: THREE.Group | null = null;
    let avatar: THREE.Group | null = null;
    let renderer: THREE.WebGLRenderer;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x9aaeb5);
    const camera = new THREE.PerspectiveCamera(54, 1, 0.1, 250);
    const player = new THREE.Group();
    scene.add(player);
    const timer = new THREE.Timer();
    const raycaster = new THREE.Raycaster();
    const direction = new THREE.Vector3();
    const cameraStart = new THREE.Vector3();
    const cameraTarget = new THREE.Vector3();
    const lookStart = new THREE.Vector3();
    const lookTarget = new THREE.Vector3();
    const playerStart = new THREE.Vector3();
    const playerBounds = new THREE.Box3();
    const playerStep = new THREE.Vector3();
    const playerRayOrigin = new THREE.Vector3();
    const wallRayDirection = new THREE.Vector3();
    const fadedMaterials = new Map<
      THREE.Material,
      { opacity: number; transparent: boolean; depthWrite: boolean }
    >();
    let cameraFlightStarted: number | null = null;
    const playerHeight = 1.7;
    let houseReady = false;
    let characterReady = false;
    const bones: Record<string, THREE.Bone | undefined> = {};
    const boneRest = new Map<THREE.Bone, THREE.Euler>();
    let cameraYaw = 0;
    let cameraPitch = 0;
    let cameraDragging = false;
    let cameraPointerId: number | null = null;
    let previousPointerX = 0;
    let previousPointerY = 0;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    } catch {
      setStatus("error");
      return;
    }
    const isSmallScreen = window.matchMedia("(max-width: 700px)").matches;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isSmallScreen ? 1.35 : 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    container.appendChild(renderer.domElement);
    renderer.domElement.style.cursor = "grab";
    renderer.domElement.style.touchAction = "none";

    const hemisphereLight = new THREE.HemisphereLight(0xe4f5ff, 0x564438, 2);
    scene.add(hemisphereLight);
    const sunlight = new THREE.DirectionalLight(0xffd39e, 2.8);
    sunlight.position.set(-12, 24, 8);
    sunlight.castShadow = true;
    sunlight.shadow.mapSize.set(isSmallScreen ? 512 : 1024, isSmallScreen ? 512 : 1024);
    scene.add(sunlight);
    const daySkyColor = new THREE.Color(0x9aaeb5);
    const nightSkyColor = new THREE.Color(0x07101f);
    const dayHemisphereColor = new THREE.Color(0xe4f5ff);
    const nightHemisphereColor = new THREE.Color(0x536a91);
    const dayGroundColor = new THREE.Color(0x564438);
    const nightGroundColor = new THREE.Color(0x171d2b);
    const daySunColor = new THREE.Color(0xffd39e);
    const nightSunColor = new THREE.Color(0x6578a0);
    const currentSkyColor = daySkyColor.clone();
    scene.background = currentSkyColor;

    const textureLoader = new THREE.TextureLoader();
    const starsTexture = textureLoader.load(
      starsTextureUrl,
      (loadedTexture) => {
        if (!active) {
          loadedTexture.dispose();
          return;
        }
        const source = loadedTexture.image;
        const canvas = document.createElement("canvas");
        canvas.width = 2048;
        canvas.height = 2048;
        const context = canvas.getContext("2d");
        if (!context) {
          loadedTexture.dispose();
          setStatus("error");
          return;
        }
        context.drawImage(source, 0, 0, canvas.width, canvas.height);
        const resizedTexture = new THREE.CanvasTexture(canvas);
        resizedTexture.colorSpace = THREE.SRGBColorSpace;
        resizedTexture.generateMipmaps = true;
        resizedTexture.minFilter = THREE.LinearMipmapLinearFilter;
        resizedTexture.magFilter = THREE.LinearFilter;
        skyMaterial.map = resizedTexture;
        skyMaterial.needsUpdate = true;
        loadedTexture.dispose();
      },
      undefined,
      (error) => {
        console.error("Failed to load the Auto Sky star texture.", error);
        if (active) setStatus("error");
      },
    );
    starsTexture.colorSpace = THREE.SRGBColorSpace;
    const skyMaterial = new THREE.MeshBasicMaterial({
      map: starsTexture,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      fog: false,
    });
    const starSky = new THREE.Mesh(new THREE.SphereGeometry(220, 32, 20), skyMaterial);
    starSky.frustumCulled = false;
    starSky.renderOrder = -1000;
    scene.add(starSky);

    const moonTexture = textureLoader.load(
      moonTextureUrl,
      (loadedTexture) => {
        if (!active) loadedTexture.dispose();
      },
      undefined,
      (error) => {
        console.error("Failed to load the Auto Sky moon texture.", error);
        if (active) setStatus("error");
      },
    );
    moonTexture.colorSpace = THREE.SRGBColorSpace;
    const moon = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: moonTexture,
        color: 0xe8efff,
        transparent: true,
        opacity: 0,
        depthTest: false,
        depthWrite: false,
        fog: false,
      }),
    );
    moon.scale.set(8, 8, 1);
    moon.renderOrder = 1;
    scene.add(moon);
    const moonOffset = new THREE.Vector3(-0.48, 0.38, -0.79).normalize().multiplyScalar(190);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(240, 240),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: createGrassSoilTexture(),
        roughness: 1,
      }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.02;
    ground.receiveShadow = true;
    scene.add(ground);
    const grass = createGrassField(isSmallScreen ? 18000 : 36000);
    grass.position.y = 0.005;
    scene.add(grass);

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

    const finishLoading = () => {
      if (active && houseReady && characterReady) setStatus("ready");
    };
    new FBXLoader(createHouseLoadingManager()).load(
      houseModelUrl,
      (model) => {
        if (!active) {
          releaseSceneObject(model);
          return;
        }
        house = model;
        const backdropMeshes: THREE.Mesh[] = [];
        const tileFloor = createTileTexture();
        house.traverse((object) => {
          if (!(object instanceof THREE.Mesh)) return;
          const bounds = new THREE.Box3().setFromObject(object);
          const size = bounds.getSize(new THREE.Vector3());
          const isForestBackdrop = object.name === "Sphere";
          const isGroundBackdrop =
            object.name === "Plane" && size.x > 1000 && size.z > 1000 && size.y < 100;
          if (isForestBackdrop || isGroundBackdrop) {
            backdropMeshes.push(object);
            return;
          }
          if (object.name === "Plane002") {
            object.material = new THREE.MeshStandardMaterial({
              map: tileFloor,
              roughness: 0.68,
              metalness: 0,
              side: THREE.DoubleSide,
            });
          }
          object.castShadow = true;
          object.receiveShadow = true;
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => (material.side = THREE.DoubleSide));
          } else {
            object.material.side = THREE.DoubleSide;
          }
        });
        backdropMeshes.forEach((object) => {
          object.parent?.remove(object);
          releaseSceneObject(object);
        });
        const bounds = new THREE.Box3().setFromObject(house);
        const size = bounds.getSize(new THREE.Vector3());
        const center = bounds.getCenter(new THREE.Vector3());
        const longestSide = Math.max(size.x, size.y, size.z);
        const floorMesh = house.getObjectByName("Plane002");
        const floorHeight = floorMesh
          ? new THREE.Box3().setFromObject(floorMesh).getCenter(new THREE.Vector3()).y
          : bounds.min.y;
        if (longestSide > 0) house.scale.setScalar(14 / longestSide);
        house.position.set(
          -center.x * house.scale.x,
          -floorHeight * house.scale.y + 0.005,
          -center.z * house.scale.z,
        );
        scene.add(house);
        const normalizedBounds = new THREE.Box3().setFromObject(house);
        const normalizedSize = normalizedBounds.getSize(new THREE.Vector3());
        const normalizedCenter = normalizedBounds.getCenter(new THREE.Vector3());
        playerStart.set(
          normalizedCenter.x,
          0,
          normalizedBounds.max.z + Math.max(1.5, normalizedSize.z * 0.06),
        );
        player.position.copy(playerStart);
        cameraStart.set(
          normalizedCenter.x,
          normalizedBounds.max.y + Math.max(7, normalizedSize.y * 1.3),
          normalizedCenter.z + normalizedSize.z * 0.8,
        );
        lookStart.set(
          normalizedCenter.x,
          normalizedBounds.min.y + normalizedSize.y * 0.28,
          normalizedCenter.z,
        );
        camera.position.copy(cameraStart);
        camera.lookAt(lookStart);
        const mobileCamera = window.matchMedia("(max-width: 700px)").matches;
        cameraTarget.set(
          playerStart.x,
          playerStart.y + (mobileCamera ? 2.2 : 2.6),
          playerStart.z + (mobileCamera ? 5.2 : 6.5),
        );
        lookTarget.set(playerStart.x, playerStart.y + 0.95, playerStart.z);
        cameraFlightStarted = performance.now();
        houseReady = true;
        finishLoading();
      },
      undefined,
      () => {
        if (active) setStatus("error");
      },
    );

    new GLTFLoader().load(
      modelPaths[character],
      ({ scene: model }) => {
        if (!active) {
          releaseSceneObject(model);
          return;
        }
        avatar = model;
        avatar.traverse((object) => {
          if (object instanceof THREE.Bone) {
            bones[object.name] = object;
            boneRest.set(object, object.rotation.clone());
          }
          if (object instanceof THREE.Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
          }
        });
        playerBounds.setFromObject(avatar);
        const height = playerBounds.max.y - playerBounds.min.y;
        if (height > 0) avatar.scale.setScalar(playerHeight / height);
        avatar.position.y -= playerBounds.min.y;
        player.add(avatar);
        characterReady = true;
        finishLoading();
      },
      undefined,
      () => {
        if (active) setStatus("error");
      },
    );

    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        target.matches("input, textarea, select, [contenteditable='true']")
      ) {
        return;
      }
      if (key === "p" && !event.repeat) {
        event.preventDefault();
        pressedKeys.current.clear();
        setPhoneOpen((open) => {
          phoneOpenRef.current = !open;
          return !open;
        });
        return;
      }
      if (key === "escape" && phoneOpenRef.current) {
        phoneOpenRef.current = false;
        setPhoneOpen(false);
        return;
      }
      if (phoneOpenRef.current) return;
      if (movementKeys.has(key)) {
        pressedKeys.current.add(key);
        event.preventDefault();
      }
    };
    const onKeyUp = (event: KeyboardEvent) => pressedKeys.current.delete(event.key.toLowerCase());
    const onBlur = () => pressedKeys.current.clear();
    const onCameraPointerDown = (event: PointerEvent) => {
      if (
        cameraFlightStarted !== null ||
        phoneOpenRef.current ||
        (event.pointerType === "mouse" && event.button !== 0)
      ) {
        return;
      }
      cameraDragging = true;
      cameraPointerId = event.pointerId;
      previousPointerX = event.clientX;
      previousPointerY = event.clientY;
      renderer.domElement.style.cursor = "grabbing";
      renderer.domElement.setPointerCapture(event.pointerId);
      event.preventDefault();
    };
    const onCameraPointerMove = (event: PointerEvent) => {
      if (!cameraDragging || event.pointerId !== cameraPointerId) return;
      cameraYaw -= (event.clientX - previousPointerX) * 0.005;
      cameraPitch = THREE.MathUtils.clamp(
        cameraPitch + (event.clientY - previousPointerY) * 0.004,
        -0.6,
        0.65,
      );
      previousPointerX = event.clientX;
      previousPointerY = event.clientY;
      event.preventDefault();
    };
    const onCameraPointerUp = (event: PointerEvent) => {
      if (!cameraDragging || event.pointerId !== cameraPointerId) return;
      cameraDragging = false;
      cameraPointerId = null;
      renderer.domElement.style.cursor = "grab";
      if (renderer.domElement.hasPointerCapture(event.pointerId)) {
        renderer.domElement.releasePointerCapture(event.pointerId);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", onBlur);
    renderer.domElement.addEventListener("pointerdown", onCameraPointerDown);
    renderer.domElement.addEventListener("pointermove", onCameraPointerMove);
    renderer.domElement.addEventListener("pointerup", onCameraPointerUp);
    renderer.domElement.addEventListener("pointercancel", onCameraPointerUp);

    const animate = () => {
      frame = window.requestAnimationFrame(animate);
      timer.update();
      const delta = Math.min(timer.getDelta(), 0.05);
      const time = timer.getElapsed();
      const daylight = getDaylightAmount(new Date());
      const nightAmount = 1 - daylight;
      currentSkyColor.copy(nightSkyColor).lerp(daySkyColor, daylight);
      hemisphereLight.intensity = 0.55 + daylight * 1.45;
      hemisphereLight.color.copy(nightHemisphereColor).lerp(dayHemisphereColor, daylight);
      hemisphereLight.groundColor.copy(nightGroundColor).lerp(dayGroundColor, daylight);
      sunlight.intensity = 0.32 + daylight * 2.48;
      sunlight.color.copy(nightSunColor).lerp(daySunColor, daylight);
      skyMaterial.opacity = nightAmount * 0.9;
      const moonMaterial = moon.material as THREE.SpriteMaterial;
      moonMaterial.opacity = nightAmount;
      starSky.position.copy(camera.position);
      moon.position.copy(camera.position).add(moonOffset);
      const grassTime = grass.userData.grassTime as { value: number };
      grassTime.value = time;
      const keys = pressedKeys.current;
      const forward = keys.has("w") || keys.has("arrowup");
      const backward = keys.has("s") || keys.has("arrowdown");
      const left = keys.has("a") || keys.has("arrowleft");
      const right = keys.has("d") || keys.has("arrowright");
      const walking = forward || backward || left || right;

      if (walking) {
        direction
          .set(Number(right) - Number(left), 0, Number(backward) - Number(forward))
          .normalize();
        player.rotation.y = Math.atan2(direction.x, direction.z);
        const speed = keys.has("shift") ? 5.2 : 3.1;
        playerStep.copy(direction).multiplyScalar(speed * delta);
        if (house) {
          playerRayOrigin.copy(player.position).add(new THREE.Vector3(0, 0.75, 0));
          raycaster.set(playerRayOrigin, playerStep.clone().normalize());
          const obstruction = raycaster
            .intersectObject(house, true)
            .find((hit) => hit.distance < 0.38);
          if (!obstruction) player.position.add(playerStep);
        } else {
          player.position.add(playerStep);
        }
        player.position.y = Math.max(0, player.position.y);
      }

      const gait = walking ? Math.sin(time * 9) * 0.48 : 0;
      const setBoneX = (boneName: string, offset: number) => {
        const bone = bones[boneName];
        if (!bone) return;
        const rest = boneRest.get(bone);
        bone.rotation.x = (rest?.x ?? 0) + offset;
      };
      const setBoneZ = (boneName: string, offset: number) => {
        const bone = bones[boneName];
        if (!bone) return;
        const rest = boneRest.get(bone);
        bone.rotation.z = (rest?.z ?? 0) + offset;
      };
      setBoneX("LeftUpLeg", gait);
      setBoneX("RightUpLeg", -gait);
      setBoneX("LeftLeg", Math.max(0, -gait) * 0.8);
      setBoneX("RightLeg", Math.max(0, gait) * 0.8);
      setBoneX("LeftArm", walking ? -gait * 0.65 : 0);
      setBoneX("RightArm", walking ? gait * 0.65 : 0);
      if (cameraFlightStarted !== null) {
        const progress = Math.min(1, (performance.now() - cameraFlightStarted) / 8500);
        const eased = progress * progress * (3 - 2 * progress);
        camera.position.lerpVectors(cameraStart, cameraTarget, eased);
        const focus = lookStart.clone().lerp(lookTarget, eased);
        camera.lookAt(focus);
        if (progress >= 1) cameraFlightStarted = null;
      } else if (houseReady) {
        const mobileCamera = window.matchMedia("(max-width: 700px)").matches;
        const orbitDistance = mobileCamera ? 4.2 : 6;
        const elevation = 0.24 + cameraPitch;
        const horizontalDistance = orbitDistance * Math.cos(elevation);
        const targetCamera = cameraTarget.set(
          player.position.x + Math.sin(cameraYaw) * horizontalDistance,
          player.position.y + 1.05 + Math.sin(elevation) * orbitDistance,
          player.position.z + Math.cos(cameraYaw) * horizontalDistance,
        );
        const targetLook = player.position.clone().add(new THREE.Vector3(0, 1.05, 0));
        camera.position.lerp(targetCamera, 1 - Math.exp(-4 * delta));
        camera.lookAt(targetLook);
        const rayLength = wallRayDirection.subVectors(camera.position, targetLook).length();
        wallRayDirection.normalize();
        raycaster.set(targetLook, wallRayDirection);
        const blockingMaterials = new Set<THREE.Material>();
        if (house) {
          raycaster.intersectObject(house, true).forEach((hit) => {
            if (hit.distance >= rayLength - 0.35 || !(hit.object instanceof THREE.Mesh)) return;
            const materials = Array.isArray(hit.object.material)
              ? hit.object.material
              : [hit.object.material];
            materials.forEach((material) => {
              if (!material.transparent) blockingMaterials.add(material);
            });
          });
        }
        fadedMaterials.forEach((original, material) => {
          if (blockingMaterials.has(material)) return;
          material.opacity = original.opacity;
          material.transparent = original.transparent;
          material.depthWrite = original.depthWrite;
          material.needsUpdate = true;
          fadedMaterials.delete(material);
        });
        blockingMaterials.forEach((material) => {
          if (fadedMaterials.has(material)) return;
          fadedMaterials.set(material, {
            opacity: material.opacity,
            transparent: material.transparent,
            depthWrite: material.depthWrite,
          });
          material.opacity = Math.min(material.opacity, 0.18);
          material.transparent = true;
          material.depthWrite = false;
          material.needsUpdate = true;
        });
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      active = false;
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", onBlur);
      renderer.domElement.removeEventListener("pointerdown", onCameraPointerDown);
      renderer.domElement.removeEventListener("pointermove", onCameraPointerMove);
      renderer.domElement.removeEventListener("pointerup", onCameraPointerUp);
      renderer.domElement.removeEventListener("pointercancel", onCameraPointerUp);
      if (house) {
        fadedMaterials.forEach((original, material) => {
          material.opacity = original.opacity;
          material.transparent = original.transparent;
          material.depthWrite = original.depthWrite;
          material.needsUpdate = true;
        });
        fadedMaterials.clear();
        releaseSceneObject(house);
        scene.remove(house);
      }
      if (avatar) {
        releaseSceneObject(avatar);
        player.remove(avatar);
      }
      releaseSceneObject(ground);
      scene.remove(ground);
      releaseSceneObject(grass);
      scene.remove(grass);
      releaseSceneObject(starSky);
      scene.remove(starSky);
      releaseSceneObject(moon);
      scene.remove(moon);
      scene.remove(player);
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [character]);

  const setDirection = (key: string, pressed: boolean) => {
    if (phoneOpenRef.current) return;
    if (pressed) pressedKeys.current.add(key);
    else pressedKeys.current.delete(key);
  };

  return (
    <section className="game-world" aria-label="Lagos World playable house">
      <div className="game-world-canvas" ref={containerRef} />
      <div className="game-world-shade" aria-hidden="true" />
      <header className="game-world-header">
        <span className="game-world-brand">LAGOS WORLD</span>
        <span className="game-world-greeting">Welcome, {playerName}</span>
      </header>
      {status === "loading" && (
        <div className="game-world-status" role="status" aria-live="polite">
          <span className="game-spinner" />
          <span>The clouds are parting…</span>
        </div>
      )}
      {status === "error" && (
        <div className="game-world-error" role="alert">
          The house scene couldn’t be loaded. Please refresh and try again.
        </div>
      )}
      {status === "ready" && (
        <>
          <div className="game-world-hint">
            <span>WASD / arrows to walk · Shift to run · P for phone</span>
            <span>Hold and drag to look around</span>
          </div>
          <div className="game-world-controls" aria-label="Character movement controls">
            <button
              type="button"
              aria-label="Move forward"
              onPointerDown={() => setDirection("w", true)}
              onPointerUp={() => setDirection("w", false)}
              onPointerLeave={() => setDirection("w", false)}
              onPointerCancel={() => setDirection("w", false)}
            >
              ↑
            </button>
            <button
              type="button"
              aria-label="Move left"
              onPointerDown={() => setDirection("a", true)}
              onPointerUp={() => setDirection("a", false)}
              onPointerLeave={() => setDirection("a", false)}
              onPointerCancel={() => setDirection("a", false)}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Move backward"
              onPointerDown={() => setDirection("s", true)}
              onPointerUp={() => setDirection("s", false)}
              onPointerLeave={() => setDirection("s", false)}
              onPointerCancel={() => setDirection("s", false)}
            >
              ↓
            </button>
            <button
              type="button"
              aria-label="Move right"
              onPointerDown={() => setDirection("d", true)}
              onPointerUp={() => setDirection("d", false)}
              onPointerLeave={() => setDirection("d", false)}
              onPointerCancel={() => setDirection("d", false)}
            >
              →
            </button>
          </div>
          <button
            className="game-phone-launch"
            type="button"
            onClick={() => {
              phoneOpenRef.current = true;
              setPhoneOpen(true);
            }}
            aria-label="Open in-game phone"
            title="Phone (press P)"
          >
            <span aria-hidden="true">▯</span>
            <span>Phone</span>
          </button>
        </>
      )}
      {phoneOpen && (
        <GamePhone
          onClose={() => {
            phoneOpenRef.current = false;
            setPhoneOpen(false);
          }}
        />
      )}
    </section>
  );
}
