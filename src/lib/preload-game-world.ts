import * as THREE from "three";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import houseModelUrl from "../../house/source/на скетч в2.fbx?url";

const houseTextureUrls = import.meta.glob("../../house/textures/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function releaseObject(object: THREE.Object3D) {
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

export function createHouseLoadingManager() {
  const manager = new THREE.LoadingManager();
  const textureByStem = new Map<string, string>();
  Object.entries(houseTextureUrls).forEach(([path, url]) => {
    const name = path.split(/[\\/]/).pop();
    if (!name) return;
    const stem = name.replace(/\.[^.]+$/, "").toLocaleLowerCase();
    if (!textureByStem.has(stem)) textureByStem.set(stem, url);
  });
  manager.setURLModifier((requestedUrl) => {
    const name = requestedUrl.split(/[\\/]/).pop()?.split(/[?#]/)[0];
    if (!name) return requestedUrl;
    const stem = decodeURIComponent(name)
      .replace(/\.[^.]+$/, "")
      .toLocaleLowerCase();
    return textureByStem.get(stem) ?? requestedUrl;
  });
  return manager;
}

function preloadHouse() {
  return new Promise<void>((resolve, reject) => {
    new FBXLoader(createHouseLoadingManager()).load(
      houseModelUrl,
      (model) => {
        releaseObject(model);
        resolve();
      },
      undefined,
      reject,
    );
  });
}

function preloadCharacter(path: string) {
  return new Promise<void>((resolve, reject) => {
    new GLTFLoader().load(
      path,
      ({ scene }) => {
        releaseObject(scene);
        resolve();
      },
      undefined,
      reject,
    );
  });
}

let preloadPromise: Promise<void> | undefined;

export function preloadGameWorldAssets() {
  if (preloadPromise) return preloadPromise;
  preloadPromise = Promise.all([
    preloadHouse(),
    preloadCharacter("/model.glb"),
    preloadCharacter("/model1.glb"),
  ])
    .then(() => undefined)
    .catch((error: unknown) => {
      preloadPromise = undefined;
      throw error;
    });
  return preloadPromise;
}
