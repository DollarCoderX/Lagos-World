import { N as Texture, T as Points, _ as LoadingManager, j as Sprite, m as Line, n as GLTFLoader, t as FBXLoader, y as Mesh } from "../_libs/three.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/preload-game-world-Cp2VT3rQ.js
var _2af8ef947dd1c94de6c0c3073b5d2193_default = "/assets/2af8ef947dd1c94de6c0c3073b5d2193-D9G2iyZ-.jpeg";
var NormalMap__1__default = "/assets/NormalMap%20(1)-j32F7iLO.png";
var NormalMap_default = "/assets/NormalMap-BXF4KyMT.png";
var NormalMapковр_default = "/assets/NormalMap%D0%BA%D0%BE%D0%B2%D1%80-LQW4SNp8.png";
var Topanga_Forest_B_8k__1__default = "/assets/Topanga_Forest_B_8k%20(1)-Cm6Qm6V3.jpeg";
var fac2fe6442d093100f79fe0b979d1df7_default = "/assets/fac2fe6442d093100f79fe0b979d1df7-MST8NVKI.jpeg";
var texture_pbr_20250901_default = "/assets/texture_pbr_20250901-C5Z0tnYI.png";
var texture_pbr_202509011_default = "/assets/texture_pbr_202509011-Dqn3uxMT.png";
var texture_pbr_202509012_default = "/assets/texture_pbr_202509012-BENOjhcb.png";
var texture_pbr_202509013_default = "/assets/texture_pbr_202509013-DNC68fCK.png";
var texture_pbr_202509014_default = "/assets/texture_pbr_202509014-CA0FdrMC.png";
var texture_pbr_202509015_default = "/assets/texture_pbr_202509015-XwTuLavj.png";
var texture_pbr_20250901_no3rmal_default = "/assets/texture_pbr_20250901_no3rmal-BzpPPQfV.png";
var texture_pbr_20250901_nor5mal_default = "/assets/texture_pbr_20250901_nor5mal-DyuFEYXN.png";
var texture_pbr_20250901_norma2l_default = "/assets/texture_pbr_20250901_norma2l-d6755ji6.png";
var texture_pbr_20250901_normal_default = "/assets/texture_pbr_20250901_normal-Dozs8zCV.png";
var texture_pbr_20250901_normal1_default = "/assets/texture_pbr_20250901_normal1-DHxPU7mb.png";
var texture_pbr_202530901_normal_default = "/assets/texture_pbr_202530901_normal-CjvKYm3W.png";
var Без_названия20_20260606211155_default = "/assets/%D0%91%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F20_20260606211155-UWXQO6S9.png";
var ковер_default = "/assets/%D0%BA%D0%BE%D0%B2%D0%B5%D1%80-BHwlYsO3.jpeg";
var пол_default = "/assets/%D0%BF%D0%BE%D0%BB-T4Cc27mO.jpeg";
var стен_default = "/assets/%D1%81%D1%82%D0%B5%D0%BD-b-16SkJA.jpeg";
var на_скетч_в2_default = "/assets/%D0%BD%D0%B0%20%D1%81%D0%BA%D0%B5%D1%82%D1%87%20%D0%B22-CMA58OVu.fbx";
var houseTextureUrls = /* #__PURE__ */ Object.assign({
	"../../house/textures/2af8ef947dd1c94de6c0c3073b5d2193.jpeg": _2af8ef947dd1c94de6c0c3073b5d2193_default,
	"../../house/textures/NormalMap (1).png": NormalMap__1__default,
	"../../house/textures/NormalMap.png": NormalMap_default,
	"../../house/textures/NormalMapковр.png": NormalMapковр_default,
	"../../house/textures/Topanga_Forest_B_8k (1).jpeg": Topanga_Forest_B_8k__1__default,
	"../../house/textures/fac2fe6442d093100f79fe0b979d1df7.jpeg": fac2fe6442d093100f79fe0b979d1df7_default,
	"../../house/textures/texture_pbr_20250901.png": texture_pbr_20250901_default,
	"../../house/textures/texture_pbr_202509011.png": texture_pbr_202509011_default,
	"../../house/textures/texture_pbr_202509012.png": texture_pbr_202509012_default,
	"../../house/textures/texture_pbr_202509013.png": texture_pbr_202509013_default,
	"../../house/textures/texture_pbr_202509014.png": texture_pbr_202509014_default,
	"../../house/textures/texture_pbr_202509015.png": texture_pbr_202509015_default,
	"../../house/textures/texture_pbr_20250901_no3rmal.png": texture_pbr_20250901_no3rmal_default,
	"../../house/textures/texture_pbr_20250901_nor5mal.png": texture_pbr_20250901_nor5mal_default,
	"../../house/textures/texture_pbr_20250901_norma2l.png": texture_pbr_20250901_norma2l_default,
	"../../house/textures/texture_pbr_20250901_normal.png": texture_pbr_20250901_normal_default,
	"../../house/textures/texture_pbr_20250901_normal1.png": texture_pbr_20250901_normal1_default,
	"../../house/textures/texture_pbr_202530901_normal.png": texture_pbr_202530901_normal_default,
	"../../house/textures/Без названия20_20260606211155.png": Без_названия20_20260606211155_default,
	"../../house/textures/ковер.jpeg": ковер_default,
	"../../house/textures/пол.jpeg": пол_default,
	"../../house/textures/стен.jpeg": стен_default
});
function releaseObject(object) {
	object.traverse((child) => {
		if (child instanceof Mesh || child instanceof Line || child instanceof Points) child.geometry.dispose();
		if (!(child instanceof Mesh) && !(child instanceof Sprite) && !(child instanceof Line) && !(child instanceof Points)) return;
		(Array.isArray(child.material) ? child.material : [child.material]).forEach((material) => {
			Object.values(material).forEach((value) => {
				if (value instanceof Texture) value.dispose();
			});
			material.dispose();
		});
	});
}
function createHouseLoadingManager() {
	const manager = new LoadingManager();
	const textureByStem = /* @__PURE__ */ new Map();
	Object.entries(houseTextureUrls).forEach(([path, url]) => {
		const name = path.split(/[\\/]/).pop();
		if (!name) return;
		const stem = name.replace(/\.[^.]+$/, "").toLocaleLowerCase();
		if (!textureByStem.has(stem)) textureByStem.set(stem, url);
	});
	manager.setURLModifier((requestedUrl) => {
		const name = requestedUrl.split(/[\\/]/).pop()?.split(/[?#]/)[0];
		if (!name) return requestedUrl;
		const stem = decodeURIComponent(name).replace(/\.[^.]+$/, "").toLocaleLowerCase();
		return textureByStem.get(stem) ?? requestedUrl;
	});
	return manager;
}
function preloadHouse() {
	return new Promise((resolve, reject) => {
		new FBXLoader(createHouseLoadingManager()).load(на_скетч_в2_default, (model) => {
			releaseObject(model);
			resolve();
		}, void 0, reject);
	});
}
function preloadCharacter(path) {
	return new Promise((resolve, reject) => {
		new GLTFLoader().load(path, ({ scene }) => {
			releaseObject(scene);
			resolve();
		}, void 0, reject);
	});
}
var preloadPromise;
function preloadGameWorldAssets() {
	if (preloadPromise) return preloadPromise;
	preloadPromise = Promise.all([
		preloadHouse(),
		preloadCharacter("/model.glb"),
		preloadCharacter("/model1.glb")
	]).then(() => void 0).catch((error) => {
		preloadPromise = void 0;
		throw error;
	});
	return preloadPromise;
}
//#endregion
export { createHouseLoadingManager, preloadGameWorldAssets, на_скетч_в2_default as t };
