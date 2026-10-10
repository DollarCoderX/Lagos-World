import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { C as PerspectiveCamera, I as Vector3, N as Texture, O as SRGBColorSpace, a as Box3, f as HemisphereLight, k as Scene, l as DirectionalLight, n as GLTFLoader, r as WebGLRenderer, y as Mesh } from "../_libs/three.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/character-preview-BZ-JQHOU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CharacterPreview({ className, modelPath = "/model.glb" }) {
	const containerRef = (0, import_react.useRef)(null);
	const [status, setStatus] = (0, import_react.useState)("loading");
	(0, import_react.useEffect)(() => {
		setStatus("loading");
		const container = containerRef.current;
		if (!container) return;
		let active = true;
		let frame = 0;
		const scene = new Scene();
		const camera = new PerspectiveCamera(32, 1, .1, 100);
		let renderer;
		try {
			renderer = new WebGLRenderer({
				alpha: true,
				antialias: true
			});
		} catch {
			setStatus("error");
			return;
		}
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.outputColorSpace = SRGBColorSpace;
		renderer.toneMapping = 4;
		renderer.toneMappingExposure = 1.15;
		container.appendChild(renderer.domElement);
		scene.add(new HemisphereLight(16777215, 2635591, 2.2));
		const keyLight = new DirectionalLight(16777215, 2.5);
		keyLight.position.set(3, 5, 4);
		scene.add(keyLight);
		const fillLight = new DirectionalLight(7784959, 1.2);
		fillLight.position.set(-4, 2, -3);
		scene.add(fillLight);
		let model = null;
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
		new GLTFLoader().load(modelPath, ({ scene: gltfScene }) => {
			if (!active) return;
			model = gltfScene;
			const bounds = new Box3().setFromObject(model);
			const center = bounds.getCenter(new Vector3());
			const size = bounds.getSize(new Vector3());
			const largestSide = Math.max(size.x, size.y, size.z);
			if (largestSide > 0) {
				const scale = 2 / largestSide;
				model.scale.setScalar(scale);
				model.position.sub(center.multiplyScalar(scale));
			}
			scene.add(model);
			camera.position.set(0, .15, 3.6);
			camera.lookAt(0, 0, 0);
			setStatus("ready");
		}, void 0, () => {
			if (active) setStatus("error");
		});
		const animate = () => {
			frame = window.requestAnimationFrame(animate);
			if (model) model.rotation.y += .003;
			renderer.render(scene, camera);
		};
		animate();
		return () => {
			active = false;
			window.cancelAnimationFrame(frame);
			resizeObserver.disconnect();
			if (model) {
				model.traverse((object) => {
					if (object instanceof Mesh) {
						object.geometry.dispose();
						(Array.isArray(object.material) ? object.material : [object.material]).forEach((material) => {
							Object.values(material).forEach((value) => {
								if (value instanceof Texture) value.dispose();
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${className ?? ""}${status === "ready" ? "" : " character-scene-preview-status"}`,
		ref: containerRef,
		role: "img",
		"aria-label": `3D preview of the ${modelPath.includes("model1") ? "female" : "male"} Lagos World character`,
		children: [status === "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "character-model-status",
			role: "status",
			"aria-live": "polite",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "character-model-spinner",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Loading character…" })]
		}), status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "character-model-status",
			role: "status",
			children: "Character preview could not be loaded."
		})]
	});
}
//#endregion
export { CharacterPreview };
