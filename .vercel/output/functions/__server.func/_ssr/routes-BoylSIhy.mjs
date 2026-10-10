import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { I as ArrowRight } from "../_libs/lucide-react.mjs";
import { r as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BoylSIhy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			cinema: "cinema-button",
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function createIntroMusic() {
	const context = new AudioContext();
	const master = context.createGain();
	const compressor = context.createDynamicsCompressor();
	master.gain.value = .48;
	compressor.threshold.value = -18;
	compressor.ratio.value = 4;
	master.connect(compressor);
	compressor.connect(context.destination);
	let step = 0;
	const tone = (frequency, duration, volume, type = "sine") => {
		const oscillator = context.createOscillator();
		const gain = context.createGain();
		oscillator.type = type;
		oscillator.frequency.value = frequency;
		gain.gain.setValueAtTime(volume, context.currentTime);
		gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + duration);
		oscillator.connect(gain);
		gain.connect(master);
		oscillator.start();
		oscillator.stop(context.currentTime + duration);
	};
	const timer = window.setInterval(() => {
		if (context.state !== "running") return;
		const bass = [
			55,
			55,
			65.41,
			73.42
		][Math.floor(step / 16) % 4] ?? 55;
		if (step % 4 === 0 || step % 16 === 11) tone(bass, .38, .65);
		if (step % 8 === 0) [
			220,
			261.63,
			329.63
		].forEach((frequency) => tone(frequency * (bass / 55), 1.5, .07, "triangle"));
		if (step % 4 === 2) tone(180, .08, .18, "triangle");
		if (step % 2 === 0 || step % 8 === 7) tone(4200, .025, .025, "square");
		if ([
			3,
			6,
			10,
			14
		].includes(step % 16)) tone([
			440,
			523.25,
			659.25,
			587.33
		][Math.floor(step / 4) % 4] ?? 440, .16, .07, "triangle");
		step++;
	}, 150);
	return {
		play: () => context.resume(),
		pause: () => context.suspend(),
		onStateChange: (listener) => {
			const update = () => listener(context.state === "running");
			context.addEventListener("statechange", update);
			update();
			return () => context.removeEventListener("statechange", update);
		},
		dispose: () => {
			window.clearInterval(timer);
			context.close();
		}
	};
}
var b_default = "/assets/b-DxDqpslp.png";
var _1_default = "/assets/1-Cfen7-Jh.png";
var _2_default = "/assets/2-jp_ciPpp.png";
var _3_default = "/assets/3-8-eAXgmA.png";
var _4_default = "/assets/4-BT002DrC.png";
var _5_default = "/assets/5-XgUtYHFN.png";
var scenes = [
	{
		image: _1_default,
		portrait: "/assets/lagos-couple-phone-DXYLfNud.jpg",
		alt: "A couple beside a sports car on the Lagos waterfront at sunset",
		movement: "couple"
	},
	{
		image: _2_default,
		portrait: "/assets/lagos-bridge-phone-DsMOKGkz.jpg",
		alt: "A sunset aerial view of the bridge across Lagos Lagoon",
		movement: "flight"
	},
	{
		image: _3_default,
		portrait: "/assets/lagos-flight-phone-Dghf84Lw.jpg",
		alt: "Lagos skyline and lagoon seen from a helicopter cabin",
		movement: "flight"
	},
	{
		image: _4_default,
		portrait: "/assets/lagos-party-phone--2mE2Sx_.jpg",
		alt: "A waterfront party in Lagos at night",
		movement: "party"
	},
	{
		image: _5_default,
		portrait: "/assets/lagos-beach-phone-BCqJH4TS.jpg",
		alt: "A Lagos beachside restaurant and crowd at sunset",
		movement: "couple"
	},
	{
		image: _5_default,
		portrait: "/assets/lagos-gamer-phone-DS6RFnUd.jpg",
		alt: "A gamer relaxing in a blue-lit room playing Lagos World",
		movement: "party"
	}
];
var splashDuration = 3600;
var sceneDuration = 8e3;
var totalDuration = splashDuration + scenes.length * sceneDuration;
var gameLoadingDuration = 6e3;
var creditsDuration = 16e3;
var skipDelay = 4e3;
var MotionButton = motion.create(Button);
var CharacterPreview = (0, import_react.lazy)(() => import("./character-preview-BZ-JQHOU.mjs").then(({ CharacterPreview }) => ({ default: CharacterPreview })));
var GameWorld = (0, import_react.lazy)(() => import("./game-world-PYYxYMsu.mjs").then(({ GameWorld }) => ({ default: GameWorld })));
function ScenicBackdrop({ image, portrait, alt }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", {
		className: "cinema-background",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
			media: "(max-aspect-ratio: 3/4)",
			srcSet: portrait
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt
		})]
	});
}
function LagosIntro() {
	const [elapsed, setElapsed] = (0, import_react.useState)(0);
	const [gameStage, setGameStage] = (0, import_react.useState)("intro");
	const [canSkipCredits, setCanSkipCredits] = (0, import_react.useState)(false);
	const [age, setAge] = (0, import_react.useState)("");
	const [profile, setProfile] = (0, import_react.useState)({
		name: "",
		username: "",
		password: "",
		state: ""
	});
	const [selectedCharacter, setSelectedCharacter] = (0, import_react.useState)(null);
	const wantsSound = (0, import_react.useRef)(true);
	const preloadStarted = (0, import_react.useRef)(false);
	const reduceMotion = useReducedMotion();
	const splash = elapsed < splashDuration;
	const complete = elapsed >= totalDuration;
	const entering = gameStage !== "intro";
	const sceneIndex = Math.min(scenes.length - 1, Math.max(0, Math.floor((elapsed - splashDuration) / sceneDuration)));
	const scene = scenes[sceneIndex];
	(0, import_react.useEffect)(() => {
		if (complete) return;
		let last = performance.now();
		const timer = window.setInterval(() => {
			const now = performance.now();
			const delta = document.hidden ? 0 : now - last;
			last = now;
			setElapsed((value) => Math.min(totalDuration, value + delta));
		}, 80);
		return () => window.clearInterval(timer);
	}, [complete]);
	(0, import_react.useEffect)(() => {
		const portrait = window.matchMedia("(max-aspect-ratio: 3/4)").matches;
		[b_default, ...scenes.map((scene) => portrait ? scene.portrait : scene.image)].forEach((src) => {
			const image = new Image();
			image.src = src;
		});
		const instrumental = createIntroMusic();
		const start = () => {
			if (wantsSound.current) instrumental.play().catch(() => {});
		};
		start();
		document.addEventListener("pointerdown", start);
		document.addEventListener("keydown", start);
		return () => {
			instrumental.dispose();
			document.removeEventListener("pointerdown", start);
			document.removeEventListener("keydown", start);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (splash || preloadStarted.current) return;
		preloadStarted.current = true;
		import("./preload-game-world-Cp2VT3rQ.mjs").then(({ preloadGameWorldAssets }) => preloadGameWorldAssets()).catch((error) => {
			console.error("Unable to preload the game world assets during the intro.", error);
		});
	}, [splash]);
	(0, import_react.useEffect)(() => {
		if (gameStage === "loading") {
			const timer = window.setTimeout(() => setGameStage("credits"), gameLoadingDuration);
			return () => window.clearTimeout(timer);
		}
		if (gameStage === "credits") {
			setCanSkipCredits(false);
			const skipTimer = window.setTimeout(() => setCanSkipCredits(true), skipDelay);
			const creditsTimer = window.setTimeout(() => setGameStage("age"), creditsDuration);
			return () => {
				window.clearTimeout(skipTimer);
				window.clearTimeout(creditsTimer);
			};
		}
	}, [gameStage]);
	const createProfile = (event) => {
		event.preventDefault();
		setProfile((current) => ({
			...current,
			password: ""
		}));
		setGameStage("world");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "intro-shell",
		"aria-label": "Lagos World cinematic introduction",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "sync",
				children: !splash && scene && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "scene-layer",
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					transition: {
						duration: reduceMotion ? 0 : 1.8,
						ease: "easeInOut"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", {
						className: "scene-picture",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							media: "(max-aspect-ratio: 3/4)",
							srcSet: scene.portrait
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: `scene-image scene-${scene.movement}`,
							src: scene.image,
							alt: scene.alt
						})]
					}), !reduceMotion && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `scene-atmosphere atmosphere-${scene.movement}`,
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
						]
					})]
				}, sceneIndex)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scene-shade" }),
			!splash && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "film-texture",
				"aria-hidden": "true"
			}),
			!splash && !complete && !reduceMotion && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "scene-shutter",
				"aria-hidden": "true",
				initial: { opacity: .24 },
				animate: { opacity: 0 },
				transition: { duration: 1.2 }
			}, `shutter-${sceneIndex}`),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: splash && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "splash",
				exit: { opacity: 0 },
				transition: { duration: 1.1 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					className: "main-logo",
					src: "/assets/b-DxDqpslp.png",
					alt: "Lagos World",
					initial: {
						opacity: 0,
						scale: reduceMotion ? 1 : 1.14,
						filter: "blur(10px)"
					},
					animate: {
						opacity: [
							0,
							1,
							1
						],
						scale: 1,
						filter: "blur(0px)"
					},
					transition: {
						duration: 2.4,
						times: [
							0,
							.5,
							1
						],
						ease: [
							.16,
							1,
							.3,
							1
						]
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					className: "splash-motto",
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: {
						delay: 1.8,
						duration: 1
					},
					children: "SAME CITY. DIFFERENT DREAMS."
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: complete && !entering && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "end-title",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: {
					opacity: 0,
					scale: reduceMotion ? 1 : 1.04
				},
				transition: { duration: 1.2 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						className: "main-logo",
						src: "/assets/b-DxDqpslp.png",
						alt: "Lagos World",
						initial: { scale: 1.06 },
						animate: { scale: 1 },
						transition: { duration: 3 }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "splash-motto",
						children: "SAME CITY. DIFFERENT DREAMS."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MotionButton, {
						variant: "cinema",
						className: "continue-button",
						initial: {
							opacity: 0,
							y: reduceMotion ? 0 : 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .6,
							duration: .7
						},
						whileHover: { scale: reduceMotion ? 1 : 1.025 },
						whileTap: { scale: reduceMotion ? 1 : .96 },
						onClick: () => setGameStage("loading"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Continue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "continue-arrow",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
						})]
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: gameStage === "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "world-transition",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				transition: { duration: 1.1 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScenicBackdrop, {
						image: "/assets/2-jp_ciPpp.png",
						portrait: "/assets/lagos-bridge-phone-DsMOKGkz.jpg",
						alt: "The Lagos lagoon bridge at sunset"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "world-watermark",
						src: "/assets/b-DxDqpslp.png",
						alt: "",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						className: "world-logo",
						src: "/assets/b-DxDqpslp.png",
						alt: "Lagos World",
						initial: {
							opacity: 0,
							scale: reduceMotion ? 1 : 1.04
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							delay: .4,
							duration: 1.5
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "loading-center world-loading",
						role: "status",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "game-spinner" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "world-loading-text",
							children: "Going to world"
						})]
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: gameStage === "credits" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
				className: "cinema-credits",
				"aria-label": "Lagos World terms and credits",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				transition: { duration: 1 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScenicBackdrop, {
						image: "/assets/2-jp_ciPpp.png",
						portrait: "/assets/lagos-bridge-phone-DsMOKGkz.jpg",
						alt: "The Lagos lagoon bridge at sunset"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: `credits-roll${reduceMotion ? " credits-roll-static" : ""}`,
						initial: { y: reduceMotion ? 0 : "100vh" },
						animate: { y: reduceMotion ? 0 : "-110vh" },
						transition: {
							duration: reduceMotion ? 0 : creditsDuration / 1e3,
							ease: "linear"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "credits-logo",
								src: "/assets/b-DxDqpslp.png",
								alt: "Lagos World"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "credits-kicker",
								children: "A WORLD OF MANY STORIES"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "TERMS OF SERVICE" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Lagos World is a fictional experience inspired by the energy and spirit of Lagos." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Play with respect. Help keep the city welcoming for everyone." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "credits-kicker",
								children: "SAME CITY. DIFFERENT DREAMS."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "credits-thanks",
								children: "THANK YOU FOR BEING HERE"
							})
						]
					}),
					canSkipCredits && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MotionButton, {
						variant: "cinema",
						className: "credits-skip",
						initial: {
							opacity: 0,
							y: 8
						},
						animate: {
							opacity: 1,
							y: 0
						},
						onClick: () => setGameStage("age"),
						children: ["Skip ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: gameStage === "age" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
				className: "age-gate",
				"aria-labelledby": "age-gate-title",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: { duration: 1 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScenicBackdrop, {
						image: "/assets/2-jp_ciPpp.png",
						portrait: "/assets/lagos-bridge-phone-DsMOKGkz.jpg",
						alt: "The Lagos lagoon bridge at sunset"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "age-gate-logo",
						src: "/assets/b-DxDqpslp.png",
						alt: "Lagos World"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "credits-kicker",
						children: "BEFORE YOU ENTER"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "age-gate-title",
						children: "How old are you?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "age-gate-copy",
						children: "Enter your age to continue."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "age-form",
						onSubmit: (event) => {
							event.preventDefault();
							setGameStage("character");
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "sr-only",
								htmlFor: "player-age",
								children: "Your age"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "player-age",
								type: "number",
								min: "1",
								max: "120",
								inputMode: "numeric",
								placeholder: "Your age",
								value: age,
								onChange: (event) => setAge(event.target.value),
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "age-confirm",
								type: "submit",
								disabled: !age || Number(age) < 1 || Number(age) > 120,
								children: "Confirm age"
							})
						]
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: (gameStage === "character" || gameStage === "profile") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.section, {
					className: `age-gate profile-gate${gameStage === "character" ? " character-gate" : ""}`,
					"aria-labelledby": gameStage === "character" ? "character-title" : "profile-title",
					initial: {
						opacity: 0,
						y: reduceMotion ? 0 : 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: reduceMotion ? 0 : -8
					},
					transition: { duration: reduceMotion ? 0 : .35 },
					children: gameStage === "character" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScenicBackdrop, {
							image: "/assets/2-jp_ciPpp.png",
							portrait: "/assets/lagos-bridge-phone-DsMOKGkz.jpg",
							alt: "The Lagos lagoon bridge at sunset"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
							fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "character-scene-preview character-scene-preview-status",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "character-model-status",
									role: "status",
									"aria-live": "polite",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "character-model-spinner",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Loading character…" })]
								})
							}),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharacterPreview, {
								className: "character-scene-preview",
								modelPath: selectedCharacter === "female" ? "/model1.glb" : "/model.glb"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "character-scene-shade",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "character-select-ui",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "character-select-heading",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "credits-kicker",
											children: "MAKE IT YOURS"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											id: "character-title",
											children: "Choose your character"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "age-gate-copy",
											children: "Pick who you want to be in Lagos World."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "character-options",
									role: "group",
									"aria-label": "Choose your character",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: `character-option${selectedCharacter === "male" ? " character-option-selected" : ""}`,
										type: "button",
										"aria-pressed": selectedCharacter === "male",
										onClick: () => setSelectedCharacter("male"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "character-option-name",
											children: "Male"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: `character-option${selectedCharacter === "female" ? " character-option-selected" : ""}`,
										type: "button",
										"aria-pressed": selectedCharacter === "female",
										onClick: () => setSelectedCharacter("female"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "character-option-name",
											children: "Female"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									className: "age-confirm character-continue",
									type: "button",
									disabled: !selectedCharacter,
									onClick: () => setGameStage("profile"),
									children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
								})
							]
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScenicBackdrop, {
						image: "/assets/1-Cfen7-Jh.png",
						portrait: "/assets/lagos-couple-phone-DXYLfNud.jpg",
						alt: "The Lagos lagoon bridge at sunset"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "profile-panel",
						children: gameStage === "profile" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "credits-kicker",
								children: "YOUR STORY STARTS HERE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "profile-title",
								children: "Create your profile"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "age-gate-copy",
								children: "Add your details and get ready to enter Lagos World."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "profile-form",
								onSubmit: createProfile,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "profile-selected-character",
										children: [
											"Character:",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: selectedCharacter === "female" ? "Female" : "Male" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "sr-only",
										htmlFor: "profile-name",
										children: "Name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "profile-name",
										name: "name",
										autoComplete: "name",
										placeholder: "Name",
										value: profile.name,
										onChange: (event) => setProfile({
											...profile,
											name: event.target.value
										}),
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "sr-only",
										htmlFor: "profile-username",
										children: "Username"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "profile-username",
										name: "username",
										autoComplete: "username",
										placeholder: "Username",
										value: profile.username,
										onChange: (event) => setProfile({
											...profile,
											username: event.target.value
										}),
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "sr-only",
										htmlFor: "profile-password",
										children: "Password"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "profile-password",
										name: "password",
										type: "password",
										autoComplete: "new-password",
										placeholder: "Password",
										value: profile.password,
										onChange: (event) => setProfile({
											...profile,
											password: event.target.value
										}),
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "sr-only",
										htmlFor: "profile-state",
										children: "State"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "profile-state",
										name: "state",
										autoComplete: "address-level1",
										placeholder: "State",
										value: profile.state,
										onChange: (event) => setProfile({
											...profile,
											state: event.target.value
										}),
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "profile-privacy-note",
										children: "Preview only: details aren’t sent or saved, and your password is discarded."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										className: "age-confirm",
										type: "submit",
										children: ["Discover my life ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
									})
								]
							})
						] })
					})] })
				}, gameStage)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: gameStage === "world" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "game-world-transition",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				transition: { duration: 1.1 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "game-world-loading-fallback",
						role: "status",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "game-spinner" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "The clouds are parting…" })]
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameWorld, {
						character: selectedCharacter ?? "male",
						playerName: profile.name
					})
				})
			}) }),
			!splash && !complete && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "loading-center",
				role: "status",
				"aria-label": "Loading Lagos World",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "game-spinner" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "loading-text",
					children: "LOADING"
				})]
			})
		]
	});
}
var SplitComponent = LagosIntro;
//#endregion
export { SplitComponent as component };
