import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as SphereGeometry, C as PerspectiveCamera, D as RepeatWrapping, E as Raycaster, F as Timer, I as Vector3, M as SpriteMaterial, N as Texture, O as SRGBColorSpace, P as TextureLoader, S as Object3D, T as Points, a as Box3, b as MeshBasicMaterial, c as Color, d as Group, f as HemisphereLight, g as LinearMipmapLinearFilter, h as LinearFilter, i as Bone, j as Sprite, k as Scene, l as DirectionalLight, m as Line, n as GLTFLoader, o as BufferGeometry, p as InstancedMesh, r as WebGLRenderer, s as CanvasTexture, t as FBXLoader, u as Float32BufferAttribute, v as MathUtils, w as PlaneGeometry, x as MeshStandardMaterial, y as Mesh } from "../_libs/three.mjs";
import { createHouseLoadingManager, t as на_скетч_в2_default } from "./preload-game-world-Cp2VT3rQ.mjs";
import { A as CarFront, C as Gamepad2, D as CircleQuestionMark, E as Clock3, F as BriefcaseBusiness, M as CalendarDays, N as Calculator, O as Chromium, P as BusFront, S as GraduationCap, T as CloudSun, _ as Mail, a as ShoppingBag, b as House, c as Phone, d as NotebookPen, f as Newspaper, g as MapPin, h as MessageCircle, i as TrainFront, j as Camera, k as ChartNoAxesCombined, l as PartyPopper, m as Mic, n as Wallet, o as Settings, p as Music2, r as Utensils, s as Radio, t as Youtube, u as PackageCheck, v as Landmark, w as ContactRound, x as HeartPulse, y as Images } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/game-world-PYYxYMsu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var appGlyphs = {
	youtube: Youtube,
	tiktok: Music2,
	instagram: Images,
	facebook: ContactRound,
	chrome: Chromium,
	phone: Phone,
	contacts: ContactRound,
	messages: MessageCircle,
	homes: House,
	cab: CarFront,
	train: TrainFront,
	maps: MapPin,
	music: Music2,
	photos: Images,
	camera: Camera,
	calendar: CalendarDays,
	notes: NotebookPen,
	weather: CloudSun,
	wallet: Wallet,
	bank: Landmark,
	email: Mail,
	shop: ShoppingBag,
	radio: Radio,
	clock: Clock3,
	calculator: Calculator,
	recorder: Mic,
	settings: Settings,
	games: Gamepad2,
	food: Utensils,
	jobs: BriefcaseBusiness,
	school: GraduationCap,
	news: Newspaper,
	transit: BusFront,
	events: PartyPopper,
	health: HeartPulse,
	portfolio: ChartNoAxesCombined,
	delivery: PackageCheck,
	help: CircleQuestionMark
};
function PhoneAppGlyph({ id }) {
	const Icon = appGlyphs[id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		className: "game-phone-app-glyph",
		"aria-hidden": "true"
	});
}
var contacts = [
	{
		name: "Mum",
		detail: "Family · Favourites"
	},
	{
		name: "Aunty Ngozi",
		detail: "Family · Lagos"
	},
	{
		name: "Kola — Cab",
		detail: "Driver · Ikeja"
	}
];
var appList = [
	{
		id: "youtube",
		name: "YouTube",
		icon: "▶",
		tint: "red",
		summary: "Watch local stories, music and the latest Lagos clips.",
		action: "Play featured clip",
		details: [
			"Lagos after the rain",
			"Street food in Yaba",
			"A quiet evening by the lagoon"
		]
	},
	{
		id: "tiktok",
		name: "TikTok",
		icon: "♪",
		tint: "dark",
		summary: "A little For You feed from around the city.",
		action: "Like this video",
		details: [
			"Danfo dance challenge",
			"Sunday jollof rating",
			"POV: the bus finally arrives"
		]
	},
	{
		id: "instagram",
		name: "Instagram",
		icon: "◎",
		tint: "pink",
		summary: "Open Instagram in the phone.",
		action: "Open Instagram",
		details: []
	},
	{
		id: "facebook",
		name: "Facebook",
		icon: "f",
		tint: "blue",
		summary: "Open Facebook in the phone.",
		action: "Open Facebook",
		details: []
	},
	{
		id: "chrome",
		name: "Chrome",
		icon: "◉",
		tint: "yellow",
		summary: "Search the web or visit a link.",
		action: "Search",
		details: []
	},
	{
		id: "phone",
		name: "Phone",
		icon: "☎",
		tint: "green",
		summary: "Call one of your saved people.",
		action: "Open contacts",
		details: []
	},
	{
		id: "contacts",
		name: "Contacts",
		icon: "●",
		tint: "blue",
		summary: "Your saved people are only a tap away.",
		action: "Call contact",
		details: []
	},
	{
		id: "messages",
		name: "Messages",
		icon: "▰",
		tint: "green",
		summary: "Send a message that stays inside this game.",
		action: "Send message",
		details: []
	},
	{
		id: "homes",
		name: "Home finder",
		icon: "⌂",
		tint: "orange",
		summary: "Browse homes around Lagos and arrange a viewing.",
		action: "Book a viewing",
		details: [
			"Lekki · 2-bedroom apartment · ₦2.4m / year",
			"Yaba · Bright studio · ₦1.1m / year",
			"Ikeja GRA · Family home · ₦3.2m / year"
		]
	},
	{
		id: "cab",
		name: "Lagos Cab",
		icon: "↗",
		tint: "green",
		summary: "Choose a ride for a trip across the city.",
		action: "Request a ride",
		details: [
			"Mini · 4 min away · ₦3,200",
			"Comfort · 7 min away · ₦5,100",
			"XL · 9 min away · ₦7,800"
		]
	},
	{
		id: "train",
		name: "Train",
		icon: "▤",
		tint: "blue",
		summary: "Plan a local train journey and save a demo ticket.",
		action: "Book demo ticket",
		details: [
			"Mobolaji Johnson Line",
			"Ikeja → Marina · 10:15 AM",
			"Ikeja → Marina · 11:30 AM",
			"Ikeja → Marina · 12:45 PM"
		]
	},
	{
		id: "maps",
		name: "Maps",
		icon: "⌖",
		tint: "blue",
		summary: "Find your way around the neighbourhood.",
		action: "Set home as destination",
		details: [
			"You are near your Lagos home.",
			"Lekki Phase 1 · 8.4 km",
			"Ikeja City Mall · 13.2 km"
		]
	},
	{
		id: "music",
		name: "Music",
		icon: "♫",
		tint: "purple",
		summary: "A small soundtrack for your day.",
		action: "Play Lagos mix",
		details: [
			"Lagos sunset mix",
			"Afrobeats for the ride",
			"Easy Sunday morning"
		]
	},
	{
		id: "photos",
		name: "Photos",
		icon: "✿",
		tint: "pink",
		summary: "Your in-game memories and camera roll.",
		action: "Open album",
		details: [
			"Lagos World album",
			"House tour",
			"Saved moments"
		]
	},
	{
		id: "camera",
		name: "Camera",
		icon: "◎",
		tint: "dark",
		summary: "Frame a moment from the world.",
		action: "Take a photo",
		details: ["Camera preview is ready.", "Photos are saved locally in this demo."]
	},
	{
		id: "calendar",
		name: "Calendar",
		icon: "▦",
		tint: "red",
		summary: "Keep plans and appointments together.",
		action: "Add a reminder",
		details: [
			"10:00 · Walk around the house",
			"14:30 · Call Mum",
			"Tomorrow · Check the new listings"
		]
	},
	{
		id: "notes",
		name: "Notes",
		icon: "▧",
		tint: "yellow",
		summary: "Write down an idea before you forget it.",
		action: "Save note",
		details: [
			"House ideas",
			"Shopping list",
			"Places to visit"
		]
	},
	{
		id: "weather",
		name: "Weather",
		icon: "☀",
		tint: "blue",
		summary: "A bright Lagos afternoon with a light breeze.",
		action: "Refresh forecast",
		details: [
			"Today · 30° · Partly cloudy",
			"Tonight · 26° · Clear skies",
			"Tomorrow · 31° · Sunny"
		]
	},
	{
		id: "wallet",
		name: "Wallet",
		icon: "▱",
		tint: "purple",
		summary: "Your pretend in-game travel wallet.",
		action: "Add demo credit",
		details: ["Demo balance · ₦25,000", "No real payments are taken."]
	},
	{
		id: "bank",
		name: "Bank",
		icon: "▥",
		tint: "blue",
		summary: "A fictional account for game purchases only.",
		action: "View demo account",
		details: [
			"Lagos World account",
			"Available demo balance · ₦120,000",
			"Real banking is not connected."
		]
	},
	{
		id: "email",
		name: "Email",
		icon: "✉",
		tint: "red",
		summary: "Your in-game mailbox.",
		action: "Compose demo email",
		details: [
			"Welcome to Lagos World",
			"Your house viewing details",
			"A note from Aunty Ngozi"
		]
	},
	{
		id: "shop",
		name: "Shop",
		icon: "▣",
		tint: "orange",
		summary: "Pick up a few things for your home.",
		action: "Add item to basket",
		details: [
			"Throw pillow · ₦8,500",
			"House plant · ₦12,000",
			"Table lamp · ₦18,000"
		]
	},
	{
		id: "radio",
		name: "Radio",
		icon: "◖",
		tint: "purple",
		summary: "Local stations for the ride.",
		action: "Tune in",
		details: [
			"Lagos FM · City updates",
			"Naija Vibes · Music",
			"Island Radio · Easy listening"
		]
	},
	{
		id: "clock",
		name: "Clock",
		icon: "◷",
		tint: "dark",
		summary: "Your time, alarms and timers.",
		action: "Set 10 minute timer",
		details: [
			"Lagos · WAT (UTC+1)",
			"Alarm · 7:00 AM",
			"Timer · Ready"
		]
	},
	{
		id: "calculator",
		name: "Calculator",
		icon: "＋",
		tint: "dark",
		summary: "Quick calculations for your plans.",
		action: "Calculate sample fare",
		details: ["Cab estimate · ₦3,200", "Weekly transport · ₦16,000"]
	},
	{
		id: "recorder",
		name: "Recorder",
		icon: "◉",
		tint: "red",
		summary: "Keep a voice memo for yourself.",
		action: "Start demo recording",
		details: ["Recordings stay on this demo screen."]
	},
	{
		id: "settings",
		name: "Settings",
		icon: "⚙",
		tint: "dark",
		summary: "Manage this in-game phone.",
		action: "Check for updates",
		details: [
			"Sound · On",
			"Network · Lagos World",
			"Privacy · Demo data stays in this browser"
		]
	},
	{
		id: "games",
		name: "Games",
		icon: "▣",
		tint: "purple",
		summary: "Quick little games for a break.",
		action: "Start a quick game",
		details: [
			"Lagos Word Dash",
			"Street Sign Spotter",
			"Guess the neighbourhood"
		]
	},
	{
		id: "food",
		name: "Food",
		icon: "♨",
		tint: "orange",
		summary: "Find a local bite for the afternoon.",
		action: "Add meal to order",
		details: [
			"Jollof rice · ₦4,500",
			"Suya wrap · ₦3,800",
			"Puff-puff · ₦1,500"
		]
	},
	{
		id: "jobs",
		name: "Jobs",
		icon: "▤",
		tint: "blue",
		summary: "Browse fictional opportunities around Lagos.",
		action: "Save job",
		details: [
			"Junior designer · Yaba",
			"Community host · Lekki",
			"Customer care · Ikeja"
		]
	},
	{
		id: "school",
		name: "Learning",
		icon: "▱",
		tint: "green",
		summary: "Short lessons and local discoveries.",
		action: "Start a lesson",
		details: [
			"Lagos history · 5 min",
			"Learn Yoruba greetings",
			"Everyday budgeting"
		]
	},
	{
		id: "news",
		name: "City news",
		icon: "▣",
		tint: "red",
		summary: "A fictional neighbourhood news digest.",
		action: "Read top story",
		details: [
			"New art market opens this weekend",
			"A greener walk along the waterfront",
			"Community football returns Sunday"
		]
	},
	{
		id: "transit",
		name: "Transit",
		icon: "⇄",
		tint: "green",
		summary: "Compare demo bus and train routes.",
		action: "Plan my trip",
		details: [
			"Bus · 32 min · ₦900",
			"Train · 21 min · ₦1,500",
			"Cab · 18 min · ₦3,200"
		]
	},
	{
		id: "events",
		name: "Events",
		icon: "✦",
		tint: "purple",
		summary: "Find something happening in the city.",
		action: "Save event",
		details: [
			"Art night · Victoria Island",
			"Beach clean-up · Tarkwa Bay",
			"Live music · Freedom Park"
		]
	},
	{
		id: "health",
		name: "Wellness",
		icon: "♡",
		tint: "pink",
		summary: "A gentle reminder to pause and take care.",
		action: "Start breathing break",
		details: [
			"Breathe in for 4",
			"Hold for 4",
			"Breathe out for 6"
		]
	},
	{
		id: "portfolio",
		name: "My profile",
		icon: "◉",
		tint: "blue",
		summary: "Your Lagos World profile and saved places.",
		action: "Save this place",
		details: [
			"Home · Lagos",
			"Saved places · 3",
			"Community · Lagos World"
		]
	},
	{
		id: "delivery",
		name: "Delivery",
		icon: "▰",
		tint: "orange",
		summary: "Track pretend deliveries to your home.",
		action: "Track demo parcel",
		details: [
			"Home essentials · On the way",
			"Expected · Today, 4:30 PM",
			"Courier · Tunde"
		]
	},
	{
		id: "help",
		name: "Help",
		icon: "?",
		tint: "blue",
		summary: "How to use your Lagos World phone.",
		action: "Show phone tips",
		details: [
			"Press P to put away your phone.",
			"Calls and bookings are simulations.",
			"Use WASD or arrows to walk."
		]
	}
];
var conversations = {
	Mum: [
		{
			caller: "Hello my dear, have you settled into the new house?",
			reply: "I have, Mum. It is beginning to feel like home."
		},
		{
			caller: "Did you remember to eat before going out?",
			reply: "Yes, I had something this morning. Thank you for checking."
		},
		{
			caller: "I saw the rain clouds near our street. Is it raining where you are?",
			reply: "Just a little breeze here. I will take an umbrella with me."
		},
		{
			caller: "Your cousin says hello and wants to visit this weekend.",
			reply: "Please tell them they are welcome. I will be around."
		},
		{
			caller: "Have you spoken to the caretaker about the front door?",
			reply: "I will call them this afternoon and make sure everything is fine."
		},
		{
			caller: "I am making stew tomorrow. Should I keep some for you?",
			reply: "Please save a little for me. I will come by when I can."
		},
		{
			caller: "How is the neighbourhood? Are the people kind?",
			reply: "They seem lovely so far. I am still learning my way around."
		},
		{
			caller: "Please call your auntie back when you have a quiet moment.",
			reply: "I will call her after this. Thank you for reminding me."
		},
		{
			caller: "I found your old blue shirt in my wardrobe. Do you want it?",
			reply: "Yes please, Mum. I wondered where it went."
		},
		{
			caller: "Have you had enough rest this week?",
			reply: "I am taking it slowly today. I promise to get some rest."
		},
		{
			caller: "The family is planning lunch on Sunday. Can you join us?",
			reply: "That sounds nice. I will check my plans and let you know."
		},
		{
			caller: "Did the parcel arrive safely at your place?",
			reply: "It did, everything is here. I will open it properly later."
		},
		{
			caller: "I want to hear all about your new place.",
			reply: "I will send you a few pictures when I have a moment."
		},
		{
			caller: "Please remember to lock up if you leave in the evening.",
			reply: "I will, Mum. I always check the door before I go."
		},
		{
			caller: "Are you keeping some money aside for transport?",
			reply: "Yes, I have planned for it. Thanks for looking out for me."
		},
		{
			caller: "Your little plant needs water when you get back.",
			reply: "I will give it some water as soon as I get home."
		},
		{
			caller: "I made your favourite jollof rice. I wish you were here.",
			reply: "You know I would never say no to your jollof."
		},
		{
			caller: "Okay my dear, call me later so we can talk properly.",
			reply: "I will. Love you, Mum. Speak soon."
		}
	],
	"Aunty Ngozi": [
		{
			caller: "My dear, how are you finding life in your new Lagos home?",
			reply: "I am settling in nicely, Aunty. It is a lovely place."
		},
		{
			caller: "I know a good market not far from you. Have you found it?",
			reply: "Not yet, but I would love the directions when you have time."
		},
		{
			caller: "There is a family celebration next month. We want you there.",
			reply: "I would be happy to come. Please send me the date."
		},
		{
			caller: "Have you tried the small bakery beside the bus stop?",
			reply: "I have not. I will look for it the next time I go out."
		},
		{
			caller: "I am visiting the island on Saturday. Shall we meet for lunch?",
			reply: "That sounds wonderful. Let us choose a place near you."
		},
		{
			caller: "Your uncle says the traffic is lighter before eight in the morning.",
			reply: "That is a helpful tip. I will try to leave earlier."
		},
		{
			caller: "I heard there is a new art show in town this week.",
			reply: "I love seeing local art. Please tell me where it is."
		},
		{
			caller: "How is your work going? Are you enjoying the new routine?",
			reply: "It is going well, Aunty. I am finding my rhythm."
		},
		{
			caller: "I have a spare plant pot if you need one for your room.",
			reply: "That would be lovely. I am trying to make the place feel cosy."
		},
		{
			caller: "The sea breeze was so nice yesterday evening.",
			reply: "I should go for a walk by the water one of these evenings."
		},
		{
			caller: "Can you help me choose a gift for your cousin?",
			reply: "Of course. Tell me a little about what they like."
		},
		{
			caller: "I saved a recipe for that coconut cake you enjoy.",
			reply: "Please send it to me. I will try to make it this weekend."
		},
		{
			caller: "Do you know which train stop is closest to the market?",
			reply: "I am still learning the routes. I will check the map."
		},
		{
			caller: "I saw a nice two-bedroom listing near Yaba this morning.",
			reply: "That sounds interesting. Send me the link and I will have a look."
		},
		{
			caller: "The neighbours are having a small get-together tomorrow.",
			reply: "How kind of them. I will see if I can stop by."
		},
		{
			caller: "I am proud of how you are making this new place yours.",
			reply: "Thank you, Aunty. It means a lot to hear that."
		},
		{
			caller: "Would you like me to bring anything when I come over?",
			reply: "Just bring yourself. We can have tea and catch up."
		},
		{
			caller: "I will call again soon. Give my love to everyone.",
			reply: "I will, Aunty. Have a lovely day."
		}
	],
	"Kola — Cab": [
		{
			caller: "Hello, I am by the front gate. I am in a silver car.",
			reply: "Thanks, Kola. I am coming out now."
		},
		{
			caller: "Traffic is moving slowly near the junction. I may be five minutes late.",
			reply: "No worries. I will wait inside until you get here."
		},
		{
			caller: "Would you prefer the Lekki-Epe road or the route by the bridge?",
			reply: "Let us take whichever route is moving better right now."
		},
		{
			caller: "I have started the trip. Please let me know if the air is too cold.",
			reply: "It feels comfortable, thank you."
		},
		{
			caller: "The main road is busy, but the side street looks clear.",
			reply: "That sounds good. I am not in a hurry."
		},
		{
			caller: "I can drop you by the entrance or at the corner shop.",
			reply: "The entrance will be perfect, please."
		},
		{
			caller: "There is a little rain ahead, so I am driving carefully.",
			reply: "Thank you for taking your time. Safety first."
		},
		{
			caller: "I have arrived at the pickup point. Can you see the car?",
			reply: "Yes, I can see you. I am walking over now."
		},
		{
			caller: "Would you like me to wait while you pick up your parcel?",
			reply: "That would be helpful. I will be just a few minutes."
		},
		{
			caller: "The bridge is clear now. We should get there on time.",
			reply: "Great, thank you for keeping me updated."
		},
		{
			caller: "I found a safe place to pull over near the entrance.",
			reply: "That is fine. I will meet you right there."
		},
		{
			caller: "The map sent me around the back of the building. Is that right?",
			reply: "Please come to the main entrance instead."
		},
		{
			caller: "I have put your destination into the map. Please confirm it.",
			reply: "That is the correct address. Thank you."
		},
		{
			caller: "I am outside the market. Should I stay on this side of the road?",
			reply: "Yes, that is easiest. I will come to you."
		},
		{
			caller: "The ride is complete. Thank you for choosing my cab today.",
			reply: "Thank you for the safe ride, Kola. Have a good one."
		},
		{
			caller: "I am a few streets away and should reach you shortly.",
			reply: "I will be ready by the gate. See you soon."
		},
		{
			caller: "There is road work ahead. I can take a short detour.",
			reply: "Please take the safer road, even if it is a little longer."
		},
		{
			caller: "I have dropped you at the house. Have a good evening.",
			reply: "Thanks again, Kola. Drive safely."
		}
	]
};
var quickDock = [
	"phone",
	"messages",
	"chrome",
	"camera"
];
var homeApps = [
	"photos",
	"youtube",
	"chrome",
	"homes",
	"contacts",
	"tiktok",
	"maps",
	"train"
];
var externalAppUrls = {
	youtube: "https://m.youtube.com/",
	tiktok: "https://www.tiktok.com/",
	instagram: "https://www.instagram.com/",
	facebook: "https://m.facebook.com/"
};
function findVoice(gender) {
	const voices = window.speechSynthesis.getVoices();
	const patterns = gender === "female" ? /female|woman|zira|samantha|ava|serena|victoria|karen|tessa|fiona|aria|jenny|sonia/i : /male|man|david|mark|james|guy|daniel|george|ryan|thomas|alex/i;
	return voices.find((voice) => patterns.test(voice.name) && /en(-|_)?(ng|gb|us)?/i.test(voice.lang)) ?? voices.find((voice) => patterns.test(voice.name)) ?? voices.find((voice) => /^en/i.test(voice.lang));
}
function speakLine(text, gender) {
	if (!("speechSynthesis" in window)) return false;
	window.speechSynthesis.cancel();
	const utterance = new SpeechSynthesisUtterance(text);
	const voice = findVoice(gender);
	if (voice) utterance.voice = voice;
	utterance.lang = voice?.lang ?? "en-NG";
	utterance.rate = .93;
	utterance.pitch = gender === "female" ? 1.08 : .9;
	window.speechSynthesis.speak(utterance);
	return true;
}
function normaliseWebAddress(value) {
	const input = value.trim();
	if (!input) return null;
	const seemsLikeAddress = /\.[a-z]{2,}(\/|$)/i.test(input) || /^https?:\/\//i.test(input);
	try {
		if (seemsLikeAddress) {
			const url = new URL(/^https?:\/\//i.test(input) ? input : `https://${input}`);
			if (url.protocol !== "https:" && url.protocol !== "http:") return null;
			return url.toString();
		}
		return `https://www.google.com/search?q=${encodeURIComponent(input)}`;
	} catch {
		return null;
	}
}
function GamePhone({ onClose }) {
	const [screen, setScreen] = (0, import_react.useState)("home");
	const [activeContact, setActiveContact] = (0, import_react.useState)(null);
	const [callStatus, setCallStatus] = (0, import_react.useState)("incoming");
	const [voiceGender, setVoiceGender] = (0, import_react.useState)("female");
	const [conversationIndex, setConversationIndex] = (0, import_react.useState)(0);
	const [transcript, setTranscript] = (0, import_react.useState)([]);
	const [notice, setNotice] = (0, import_react.useState)("");
	const [time, setTime] = (0, import_react.useState)(() => new Intl.DateTimeFormat([], {
		hour: "numeric",
		minute: "2-digit"
	}).format(/* @__PURE__ */ new Date()));
	const [searchText, setSearchText] = (0, import_react.useState)("");
	const [webUrl, setWebUrl] = (0, import_react.useState)("");
	const [messageText, setMessageText] = (0, import_react.useState)("");
	const [sentMessages, setSentMessages] = (0, import_react.useState)([]);
	const [filterText, setFilterText] = (0, import_react.useState)("");
	const [callSeconds, setCallSeconds] = (0, import_react.useState)(0);
	const [liked, setLiked] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const interval = window.setInterval(() => {
			setTime(new Intl.DateTimeFormat([], {
				hour: "numeric",
				minute: "2-digit"
			}).format(/* @__PURE__ */ new Date()));
		}, 3e4);
		return () => window.clearInterval(interval);
	}, []);
	(0, import_react.useEffect)(() => {
		if (callStatus !== "connected") return;
		const interval = window.setInterval(() => setCallSeconds((seconds) => seconds + 1), 1e3);
		return () => window.clearInterval(interval);
	}, [callStatus]);
	(0, import_react.useEffect)(() => () => window.speechSynthesis?.cancel(), []);
	const openCall = (contact, incoming = false) => {
		const options = conversations[contact.name] ?? [];
		const index = Math.floor(Math.random() * options.length);
		const line = options[index];
		if (!line) return;
		window.speechSynthesis?.cancel();
		setActiveContact(contact);
		setConversationIndex(index);
		setTranscript([]);
		setCallSeconds(0);
		setNotice("");
		setCallStatus(incoming ? "incoming" : "connected");
		setScreen("call");
		if (!incoming) {
			setTranscript([{
				speaker: "caller",
				text: line.caller
			}]);
			setNotice(speakLine(line.caller, voiceGender) ? "Using a free voice installed in this browser" : "Voice playback is unavailable; read the conversation below");
		}
	};
	const answerCall = () => {
		if (!activeContact) return;
		const line = conversations[activeContact.name]?.[conversationIndex];
		if (!line) return;
		setCallStatus("connected");
		setTranscript([{
			speaker: "caller",
			text: line.caller
		}]);
		setCallSeconds(0);
		setNotice(speakLine(line.caller, voiceGender) ? "Using a free voice installed in this browser" : "Voice playback is unavailable; read the conversation below");
	};
	const continueConversation = () => {
		if (!activeContact) return;
		const lines = conversations[activeContact.name];
		if (!lines?.length) return;
		const current = lines[conversationIndex];
		const nextIndex = (conversationIndex + 1) % lines.length;
		const next = lines[nextIndex];
		if (!current || !next) return;
		setConversationIndex(nextIndex);
		setTranscript((previous) => [
			...previous,
			{
				speaker: "you",
				text: current.reply
			},
			{
				speaker: "caller",
				text: next.caller
			}
		]);
		speakLine(next.caller, voiceGender);
	};
	const endCall = () => {
		window.speechSynthesis?.cancel();
		setCallStatus("ended");
		setNotice("");
	};
	const goHome = () => {
		window.speechSynthesis?.cancel();
		setNotice("");
		setScreen("home");
	};
	const selectedApp = appList.find((app) => app.id === screen);
	const filteredApps = appList.filter((app) => app.name.toLowerCase().includes(filterText.trim().toLowerCase()));
	const handleSearch = (event) => {
		event.preventDefault();
		const url = normaliseWebAddress(searchText);
		if (!url) {
			setNotice("Enter a valid website address or search.");
			return;
		}
		setNotice("");
		setWebUrl(url);
		setScreen("chrome");
		window.open(url, "_blank", "noopener,noreferrer");
	};
	const openApp = (appId) => {
		setNotice("");
		setLiked(false);
		const externalUrl = externalAppUrls[appId];
		if (externalUrl) {
			setWebUrl(externalUrl);
			window.open(externalUrl, "_blank", "noopener,noreferrer");
		} else if (appId === "chrome") {
			setWebUrl("");
			setSearchText("");
		}
		setScreen(appId);
	};
	const handleAppAction = (app) => {
		if (app.id === "phone") {
			setScreen("contacts");
			return;
		}
		if (app.id === "cab" || app.id === "train" || app.id === "homes") {
			setNotice(app.id === "cab" ? "Your demo cab is on its way · 4 min" : app.id === "train" ? "Demo ticket saved · Ikeja → Marina" : "Viewing saved · Lekki · Saturday, 11:00 AM");
			return;
		}
		setNotice(app.id === "wallet" ? "Demo credit added · no real payment made" : app.id === "camera" ? "Photo captured in this demo" : `${app.name} · saved in this demo`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "game-phone-overlay",
		onMouseDown: (event) => {
			if (event.target === event.currentTarget) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "game-phone",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "In-game Android phone",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "game-phone-side-button game-phone-volume",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "game-phone-side-button game-phone-power",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "game-phone-screen",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "game-phone-statusbar",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: time }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "game-phone-status-icons",
								"aria-label": "Signal, Wi-Fi, battery",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "▮▮▮" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "◉" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "▰" })
								]
							})]
						}),
						screen === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "game-phone-home-close",
							type: "button",
							onClick: onClose,
							"aria-label": "Put phone away",
							children: "×"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "game-phone-toolbar",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "game-phone-back",
									type: "button",
									onClick: goHome,
									"aria-label": "Phone home",
									children: "‹"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: screen === "call" ? "Phone" : screen === "apps" ? "All apps" : selectedApp?.name ?? "Contacts" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "game-phone-close",
									type: "button",
									onClick: onClose,
									"aria-label": "Close phone",
									children: "×"
								})
							]
						}),
						screen === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "game-phone-home",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "game-phone-wallpaper",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "game-phone-home-clock",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "game-phone-clock",
											children: time
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "game-phone-date",
											children: new Intl.DateTimeFormat([], {
												weekday: "short",
												day: "numeric",
												month: "long"
											}).format(/* @__PURE__ */ new Date())
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "game-phone-weather-widget",
										"aria-label": "Lagos weather: 30 degrees, partly cloudy",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "☁" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "30°" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "No data" })
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									className: "game-phone-google-search",
									onSubmit: handleSearch,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "game-phone-google-logo",
											"aria-hidden": "true",
											children: "G"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											"aria-label": "Search Google or enter a website",
											placeholder: "Search or enter website",
											value: searchText,
											onChange: (event) => setSearchText(event.target.value)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											"aria-label": "Search the web",
											children: "⌕"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "game-phone-home-icons",
									children: homeApps.map((id) => {
										const app = appList.find((item) => item.id === id);
										if (!app) return null;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: `game-phone-app game-phone-app-${app.tint}`,
											"data-app": app.id,
											type: "button",
											onClick: () => openApp(app.id),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "game-phone-app-icon",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneAppGlyph, { id: app.id })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: app.name })]
										}, app.id);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "game-phone-dock-apps",
									children: [quickDock.map((id) => {
										const app = appList.find((item) => item.id === id);
										if (!app) return null;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: `game-phone-app game-phone-app-${app.tint}`,
											"data-app": app.id,
											type: "button",
											"aria-label": `Open ${app.name}`,
											onClick: () => openApp(app.id),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "game-phone-app-icon",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneAppGlyph, { id: app.id })
											})
										}, app.id);
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "game-phone-app game-phone-app-drawer",
										type: "button",
										"aria-label": "Open all apps",
										onClick: () => setScreen("apps"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "game-phone-app-icon",
											children: "⠿"
										})
									})]
								})
							]
						}),
						screen === "apps" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "game-phone-app-drawer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "game-phone-app-search",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "⌕"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									"aria-label": "Search all apps",
									placeholder: `Search ${appList.length} apps`,
									value: filterText,
									onChange: (event) => setFilterText(event.target.value)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "game-phone-apps",
								children: [filteredApps.map((app) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: `game-phone-app game-phone-app-${app.tint}`,
									"data-app": app.id,
									type: "button",
									onClick: () => openApp(app.id),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "game-phone-app-icon",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneAppGlyph, { id: app.id })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: app.name })]
								}, app.id)), filteredApps.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "game-phone-empty",
									children: "No matching apps."
								})]
							})]
						}),
						screen === "call" && activeContact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "game-phone-call-screen",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "game-phone-call-avatar",
									children: activeContact.name.charAt(0)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: activeContact.name }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: callStatus === "incoming" ? "Incoming simulated call" : callStatus === "connected" ? `Connected · ${Math.floor(callSeconds / 60)}:${String(callSeconds % 60).padStart(2, "0")}` : "Call ended" }),
								callStatus === "connected" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "game-phone-voice-picker",
										"aria-label": "Choose caller voice",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-pressed": voiceGender === "female",
											onClick: () => setVoiceGender("female"),
											children: "Female voice"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-pressed": voiceGender === "male",
											onClick: () => setVoiceGender("male"),
											children: "Male voice"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "game-phone-transcript",
										"aria-live": "polite",
										children: transcript.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: `game-phone-message-bubble game-phone-message-${line.speaker}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line.speaker === "you" ? "You" : activeContact.name }), line.text]
										}, `${index}-${line.text}`))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "game-phone-call-notice",
										role: "status",
										children: notice
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "game-phone-call-actions",
									children: callStatus === "incoming" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "game-phone-reject",
										type: "button",
										onClick: endCall,
										children: "Decline"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "game-phone-answer",
										type: "button",
										onClick: answerCall,
										children: "Answer"
									})] }) : callStatus === "connected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "game-phone-reply",
										type: "button",
										onClick: continueConversation,
										children: "Reply & continue"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "game-phone-reject",
										type: "button",
										onClick: endCall,
										children: "End call"
									})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "game-phone-answer",
										type: "button",
										onClick: goHome,
										children: "Done"
									})
								})
							]
						}),
						(screen === "phone" || screen === "contacts") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "game-phone-content",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "game-phone-section-label",
									children: "FAVOURITES · SIMULATED CONTACTS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "game-phone-contact-list",
									children: contacts.map((contact, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "game-phone-contact",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `game-phone-avatar game-phone-avatar-${index}`,
												children: contact.name.charAt(0)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "game-phone-contact-name",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: contact.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: contact.detail })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "game-phone-call-button",
												type: "button",
												onClick: () => openCall(contact),
												"aria-label": `Call ${contact.name}`,
												children: "☎"
											})
										]
									}, contact.name))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "game-phone-secondary-action",
									type: "button",
									onClick: () => {
										const contact = contacts[Math.floor(Math.random() * contacts.length)];
										if (contact) openCall(contact, true);
									},
									children: "Receive a pretend call"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "game-phone-footnote",
									children: "Calls are make-believe; no real number is dialled."
								})
							]
						}),
						screen === "messages" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "game-phone-content",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "game-phone-section-label",
									children: "MESSAGES · STORED IN THIS SESSION"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "game-phone-contact-list",
									children: contacts.map((contact, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "game-phone-contact",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `game-phone-avatar game-phone-avatar-${index}`,
											children: contact.name.charAt(0)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "game-phone-contact-name",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: contact.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: contact.name === "Mum" ? "Are you home safe?" : contact.name === "Aunty Ngozi" ? "Lunch this weekend?" : "I am by the gate." })]
										})]
									}, contact.name))
								}),
								sentMessages.map((message, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "game-phone-message-bubble game-phone-message-you",
									children: message
								}, `${index}-${message}`)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									className: "game-phone-compose",
									onSubmit: (event) => {
										event.preventDefault();
										const text = messageText.trim();
										if (!text) return;
										setSentMessages((previous) => [...previous, text]);
										setMessageText("");
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										"aria-label": "Write a simulated message",
										placeholder: "Message…",
										value: messageText,
										onChange: (event) => setMessageText(event.target.value)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										children: "Send"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "game-phone-footnote",
									children: "Messages stay on this simulated phone."
								})
							]
						}),
						screen === "chrome" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "game-phone-content game-phone-browser",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									className: "game-phone-search-form",
									onSubmit: handleSearch,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											children: "⌕"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											"aria-label": "Search the web or enter a link",
											placeholder: "Search or type a web address",
											value: searchText,
											onChange: (event) => setSearchText(event.target.value)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											children: "Go"
										})
									]
								}),
								notice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "game-phone-notice",
									role: "status",
									children: notice
								}),
								webUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "game-phone-browser-open",
									href: webUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									children: "Open page in browser ↗"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
									className: "game-phone-webview",
									src: webUrl,
									title: "In-game phone web page",
									sandbox: "allow-forms allow-scripts allow-popups allow-popups-to-escape-sandbox",
									referrerPolicy: "no-referrer"
								})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "game-phone-browser-home",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "game-phone-chrome-mark",
											children: "◉"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Search the web" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enter a website or search above to open it in your browser." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "game-phone-browser-shortcuts",
											children: Object.entries(externalAppUrls).map(([appId, url]) => {
												const app = appList.find((item) => item.id === appId);
												if (!app) return null;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													className: `game-phone-browser-shortcut game-phone-app-${app.tint}`,
													href: url,
													target: "_blank",
													rel: "noopener noreferrer",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "game-phone-app-icon",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneAppGlyph, { id: app.id })
													}), app.name]
												}, appId);
											})
										})
									]
								})
							]
						}),
						selectedApp && externalAppUrls[selectedApp.id] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "game-phone-content game-phone-browser game-phone-social-webview",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "game-phone-social-header",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `game-phone-social-icon game-phone-app-${selectedApp.tint}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneAppGlyph, { id: selectedApp.id })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "game-phone-social-title",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: selectedApp.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Official website" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "game-phone-open-website",
											href: externalAppUrls[selectedApp.id],
											target: "_blank",
											rel: "noopener noreferrer",
											children: "Open app ↗"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
									className: "game-phone-webview",
									src: webUrl || externalAppUrls[selectedApp.id],
									title: `${selectedApp.name} website`,
									sandbox: "allow-forms allow-scripts allow-popups allow-popups-to-escape-sandbox",
									referrerPolicy: "no-referrer",
									allow: "autoplay; encrypted-media; picture-in-picture; web-share",
									allowFullScreen: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "game-phone-embed-note",
									children: "Some sites do not allow in-app viewing. Tap Open to continue."
								})
							]
						}),
						selectedApp && ![
							"phone",
							"contacts",
							"messages",
							"chrome"
						].includes(selectedApp.id) && !externalAppUrls[selectedApp.id] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "game-phone-content game-phone-app-page",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `game-phone-feature-icon game-phone-app-${selectedApp.tint}`,
									"data-app": selectedApp.id,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneAppGlyph, { id: selectedApp.id })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "game-phone-feature-eyebrow",
									children: "LAGOS WORLD · IN-GAME APP"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: selectedApp.name }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "game-phone-feature-summary",
									children: selectedApp.summary
								}),
								selectedApp.id === "train" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "game-phone-select-label",
									children: ["Route", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										"aria-label": "Choose train time",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Ikeja → Marina · 10:15 AM" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Ikeja → Marina · 11:30 AM" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Ikeja → Marina · 12:45 PM" })
										]
									})]
								}),
								selectedApp.id === "cab" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "game-phone-select-label",
									children: ["Ride type", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										"aria-label": "Choose ride type",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Mini · ₦3,200" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Comfort · ₦5,100" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "XL · ₦7,800" })
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "game-phone-feature-list",
									children: selectedApp.details.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "game-phone-feature-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											children: "›"
										})]
									}, item))
								}),
								["youtube", "tiktok"].includes(selectedApp.id) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "game-phone-primary-action",
									type: "button",
									onClick: () => setLiked((value) => !value),
									children: liked ? "♥ Liked" : "♡ Like this clip"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "game-phone-primary-action",
									type: "button",
									onClick: () => handleAppAction(selectedApp),
									children: selectedApp.action
								}),
								notice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "game-phone-notice",
									role: "status",
									children: notice
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "game-phone-footnote",
									children: "This is a local game simulation. No real orders, travel, or payments are made."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
							className: "game-phone-navigation",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Back to phone home",
									onClick: goHome,
									children: "‹"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Phone home",
									onClick: goHome,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Open all apps",
									onClick: () => setScreen("apps"),
									children: "▦"
								})
							]
						})
					]
				})
			]
		})
	});
}
var Moon_default = "/assets/Moon-D_LMUDaS.webp";
var Stars_4_default = "/assets/Stars%204-D1f-_Hq8.webp";
function getDaylightAmount(date) {
	const hour = date.getHours() + date.getMinutes() / 60;
	const smoothstep = (start, end, value) => {
		const amount = MathUtils.clamp((value - start) / (end - start), 0, 1);
		return amount * amount * (3 - 2 * amount);
	};
	return smoothstep(5.5, 7.5, hour) * (1 - smoothstep(18, 20.5, hour));
}
var modelPaths = {
	male: "/model.glb",
	female: "/model1.glb"
};
var movementKeys = /* @__PURE__ */ new Set([
	"w",
	"a",
	"s",
	"d",
	"arrowup",
	"arrowleft",
	"arrowdown",
	"arrowright"
]);
function releaseSceneObject(object) {
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
		seed = seed * 16807 % 2147483647;
		return (seed - 1) / 2147483646;
	};
	const shades = [
		"#d7cdbb",
		"#d1c7b4",
		"#ddd3c1",
		"#cfc5b2"
	];
	const tileSize = 128;
	for (let row = 0; row < 4; row += 1) for (let column = 0; column < 4; column += 1) {
		const x = column * tileSize;
		const y = row * tileSize;
		const inset = 4;
		const tileColor = shades[Math.floor(random() * shades.length)] ?? "#d7cdbb";
		const glaze = context.createLinearGradient(x, y, x + tileSize, y + tileSize);
		glaze.addColorStop(0, tileColor);
		glaze.addColorStop(.55, "#e4dac8");
		glaze.addColorStop(1, "#c9beab");
		context.fillStyle = glaze;
		context.fillRect(x + inset, y + inset, 120, 120);
		context.strokeStyle = "rgba(255, 250, 238, 0.38)";
		context.lineWidth = 2;
		context.strokeRect(x + inset + 1, y + inset + 1, 118, 118);
		context.strokeStyle = "rgba(87, 72, 54, 0.12)";
		context.lineWidth = 1;
		context.beginPath();
		context.moveTo(x + tileSize - inset - 1, y + inset);
		context.lineTo(x + tileSize - inset - 1, y + tileSize - inset);
		context.moveTo(x + inset, y + tileSize - inset - 1);
		context.lineTo(x + tileSize - inset, y + tileSize - inset - 1);
		context.stroke();
	}
	for (let index = 0; index < 7e3; index += 1) {
		context.globalAlpha = .025 + random() * .055;
		context.fillStyle = random() > .5 ? "#fff9ed" : "#756754";
		context.fillRect(random() * 512, random() * 512, 1 + random() * 2, 1 + random() * 2);
	}
	context.globalAlpha = 1;
	const texture = new CanvasTexture(canvas);
	texture.colorSpace = SRGBColorSpace;
	texture.wrapS = RepeatWrapping;
	texture.wrapT = RepeatWrapping;
	texture.repeat.set(2, 2);
	texture.anisotropy = 8;
	return texture;
}
function createGrassField(count) {
	const vertices = [];
	const colors = [];
	const colorsByHeight = [
		new Color(2440478),
		new Color(5798706),
		new Color(9546061)
	];
	const bladeCount = 7;
	const bladeHeight = .23;
	for (let blade = 0; blade < bladeCount; blade += 1) {
		const angle = Math.PI * 2 * blade / bladeCount;
		const sideX = Math.cos(angle) * .018;
		const sideZ = Math.sin(angle) * .018;
		const bendX = Math.cos(angle + 1.1) * .035;
		const bendZ = Math.sin(angle + 1.1) * .035;
		[
			{
				y: 0,
				center: 0,
				halfWidth: 1
			},
			{
				y: bladeHeight * .52,
				center: .55,
				halfWidth: .66
			},
			{
				y: bladeHeight,
				center: 1,
				halfWidth: .03
			}
		].forEach((level, levelIndex) => {
			const centerX = bendX * level.center;
			const centerZ = bendZ * level.center;
			const width = level.halfWidth;
			vertices.push(centerX - sideX * width, level.y, centerZ - sideZ * width, centerX + sideX * width, level.y, centerZ + sideZ * width);
			const color = colorsByHeight[levelIndex] ?? colorsByHeight[2];
			for (let vertex = 0; vertex < 2; vertex += 1) colors.push(color.r, color.g, color.b);
		});
	}
	const geometry = new BufferGeometry();
	geometry.setAttribute("position", new Float32BufferAttribute(vertices, 3));
	geometry.setAttribute("color", new Float32BufferAttribute(colors, 3));
	const indices = [];
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
	const material = new MeshStandardMaterial({
		color: 16777215,
		vertexColors: true,
		roughness: .92,
		side: 2
	});
	const grassTime = { value: 0 };
	material.onBeforeCompile = (shader) => {
		shader.uniforms.uGrassTime = grassTime;
		shader.vertexShader = shader.vertexShader.replace("#include <common>", "#include <common>\nuniform float uGrassTime;");
		shader.vertexShader = shader.vertexShader.replace("#include <begin_vertex>", `#include <begin_vertex>
        #ifdef USE_INSTANCING
          float windWave = sin(uGrassTime * 1.5 + instanceMatrix[3].x * 0.34 + instanceMatrix[3].z * 0.27);
          transformed.x += windWave * 0.045 * transformed.y;
          transformed.z += cos(uGrassTime * 1.15 + instanceMatrix[3].z * 0.3) * 0.035 * transformed.y;
        #endif`);
	};
	material.customProgramCacheKey = () => "lagos-grass-wind-v2";
	const grass = new InstancedMesh(geometry, material, count);
	grass.userData.grassTime = grassTime;
	const transform = new Object3D();
	let seed = 92831;
	const random = () => {
		seed = seed * 16807 % 2147483647;
		return (seed - 1) / 2147483646;
	};
	const variation = new Color();
	for (let index = 0; index < count; index += 1) {
		let x;
		let z;
		if (random() < .82) {
			const angle = random() * Math.PI * 2;
			const radius = Math.sqrt(random()) * 44;
			x = Math.cos(angle) * radius;
			z = Math.sin(angle) * radius;
		} else {
			x = (random() - .5) * 230;
			z = (random() - .5) * 230;
		}
		transform.position.set(x, 0, z);
		transform.rotation.y = random() * Math.PI * 2;
		const scale = .72 + random() * .55;
		transform.scale.set(scale, .75 + random() * .4, scale);
		transform.updateMatrix();
		grass.setMatrixAt(index, transform.matrix);
		variation.setHSL(.25 + random() * .06, .42 + random() * .24, .22 + random() * .16);
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
		seed = seed * 16807 % 2147483647;
		return (seed - 1) / 2147483646;
	};
	const shades = [
		"#293e22",
		"#3c552b",
		"#526b33",
		"#647541",
		"#283a20"
	];
	for (let index = 0; index < 16e3; index += 1) {
		const shade = shades[Math.floor(random() * shades.length)] ?? "#354b27";
		context.globalAlpha = .12 + random() * .25;
		context.strokeStyle = shade;
		context.lineWidth = .5 + random() * 2;
		const x = random() * canvas.width;
		const y = random() * canvas.height;
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x + (random() - .5) * 5, y + 1 + random() * 5);
		context.stroke();
	}
	context.globalAlpha = 1;
	const texture = new CanvasTexture(canvas);
	texture.colorSpace = SRGBColorSpace;
	texture.wrapS = RepeatWrapping;
	texture.wrapT = RepeatWrapping;
	texture.repeat.set(36, 36);
	texture.anisotropy = 8;
	return texture;
}
function GameWorld({ character, playerName }) {
	const containerRef = (0, import_react.useRef)(null);
	const pressedKeys = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	const phoneOpenRef = (0, import_react.useRef)(false);
	const [status, setStatus] = (0, import_react.useState)("loading");
	const [phoneOpen, setPhoneOpen] = (0, import_react.useState)(false);
	phoneOpenRef.current = phoneOpen;
	(0, import_react.useEffect)(() => {
		const container = containerRef.current;
		if (!container) return;
		let active = true;
		let frame = 0;
		let house = null;
		let avatar = null;
		let renderer;
		const scene = new Scene();
		scene.background = new Color(10137269);
		const camera = new PerspectiveCamera(54, 1, .1, 250);
		const player = new Group();
		scene.add(player);
		const timer = new Timer();
		const raycaster = new Raycaster();
		const direction = new Vector3();
		const cameraStart = new Vector3();
		const cameraTarget = new Vector3();
		const lookStart = new Vector3();
		const lookTarget = new Vector3();
		const playerStart = new Vector3();
		const playerBounds = new Box3();
		const playerStep = new Vector3();
		const playerRayOrigin = new Vector3();
		const wallRayDirection = new Vector3();
		const fadedMaterials = /* @__PURE__ */ new Map();
		let cameraFlightStarted = null;
		const playerHeight = 1.7;
		let houseReady = false;
		let characterReady = false;
		const bones = {};
		const boneRest = /* @__PURE__ */ new Map();
		let cameraYaw = 0;
		let cameraPitch = 0;
		let cameraDragging = false;
		let cameraPointerId = null;
		let previousPointerX = 0;
		let previousPointerY = 0;
		try {
			renderer = new WebGLRenderer({
				antialias: true,
				powerPreference: "high-performance"
			});
		} catch {
			setStatus("error");
			return;
		}
		const isSmallScreen = window.matchMedia("(max-width: 700px)").matches;
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, isSmallScreen ? 1.35 : 1.75));
		renderer.outputColorSpace = SRGBColorSpace;
		renderer.toneMapping = 4;
		renderer.toneMappingExposure = 1.15;
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = 1;
		container.appendChild(renderer.domElement);
		renderer.domElement.style.cursor = "grab";
		renderer.domElement.style.touchAction = "none";
		const hemisphereLight = new HemisphereLight(15005183, 5653560, 2);
		scene.add(hemisphereLight);
		const sunlight = new DirectionalLight(16765854, 2.8);
		sunlight.position.set(-12, 24, 8);
		sunlight.castShadow = true;
		sunlight.shadow.mapSize.set(isSmallScreen ? 512 : 1024, isSmallScreen ? 512 : 1024);
		scene.add(sunlight);
		const daySkyColor = new Color(10137269);
		const nightSkyColor = new Color(462879);
		const dayHemisphereColor = new Color(15005183);
		const nightHemisphereColor = new Color(5466769);
		const dayGroundColor = new Color(5653560);
		const nightGroundColor = new Color(1514795);
		const daySunColor = new Color(16765854);
		const nightSunColor = new Color(6650016);
		const currentSkyColor = daySkyColor.clone();
		scene.background = currentSkyColor;
		const textureLoader = new TextureLoader();
		const starsTexture = textureLoader.load(Stars_4_default, (loadedTexture) => {
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
			const resizedTexture = new CanvasTexture(canvas);
			resizedTexture.colorSpace = SRGBColorSpace;
			resizedTexture.generateMipmaps = true;
			resizedTexture.minFilter = LinearMipmapLinearFilter;
			resizedTexture.magFilter = LinearFilter;
			skyMaterial.map = resizedTexture;
			skyMaterial.needsUpdate = true;
			loadedTexture.dispose();
		}, void 0, (error) => {
			console.error("Failed to load the Auto Sky star texture.", error);
			if (active) setStatus("error");
		});
		starsTexture.colorSpace = SRGBColorSpace;
		const skyMaterial = new MeshBasicMaterial({
			map: starsTexture,
			side: 1,
			transparent: true,
			opacity: 0,
			depthWrite: false,
			fog: false
		});
		const starSky = new Mesh(new SphereGeometry(220, 32, 20), skyMaterial);
		starSky.frustumCulled = false;
		starSky.renderOrder = -1e3;
		scene.add(starSky);
		const moonTexture = textureLoader.load(Moon_default, (loadedTexture) => {
			if (!active) loadedTexture.dispose();
		}, void 0, (error) => {
			console.error("Failed to load the Auto Sky moon texture.", error);
			if (active) setStatus("error");
		});
		moonTexture.colorSpace = SRGBColorSpace;
		const moon = new Sprite(new SpriteMaterial({
			map: moonTexture,
			color: 15265791,
			transparent: true,
			opacity: 0,
			depthTest: false,
			depthWrite: false,
			fog: false
		}));
		moon.scale.set(8, 8, 1);
		moon.renderOrder = 1;
		scene.add(moon);
		const moonOffset = new Vector3(-.48, .38, -.79).normalize().multiplyScalar(190);
		const ground = new Mesh(new PlaneGeometry(240, 240), new MeshStandardMaterial({
			color: 16777215,
			map: createGrassSoilTexture(),
			roughness: 1
		}));
		ground.rotation.x = -Math.PI / 2;
		ground.position.y = -.02;
		ground.receiveShadow = true;
		scene.add(ground);
		const grass = createGrassField(isSmallScreen ? 18e3 : 36e3);
		grass.position.y = .005;
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
		new FBXLoader(createHouseLoadingManager()).load(на_скетч_в2_default, (model) => {
			if (!active) {
				releaseSceneObject(model);
				return;
			}
			house = model;
			const backdropMeshes = [];
			const tileFloor = createTileTexture();
			house.traverse((object) => {
				if (!(object instanceof Mesh)) return;
				const size = new Box3().setFromObject(object).getSize(new Vector3());
				const isForestBackdrop = object.name === "Sphere";
				const isGroundBackdrop = object.name === "Plane" && size.x > 1e3 && size.z > 1e3 && size.y < 100;
				if (isForestBackdrop || isGroundBackdrop) {
					backdropMeshes.push(object);
					return;
				}
				if (object.name === "Plane002") object.material = new MeshStandardMaterial({
					map: tileFloor,
					roughness: .68,
					metalness: 0,
					side: 2
				});
				object.castShadow = true;
				object.receiveShadow = true;
				if (Array.isArray(object.material)) object.material.forEach((material) => material.side = 2);
				else object.material.side = 2;
			});
			backdropMeshes.forEach((object) => {
				object.parent?.remove(object);
				releaseSceneObject(object);
			});
			const bounds = new Box3().setFromObject(house);
			const size = bounds.getSize(new Vector3());
			const center = bounds.getCenter(new Vector3());
			const longestSide = Math.max(size.x, size.y, size.z);
			const floorMesh = house.getObjectByName("Plane002");
			const floorHeight = floorMesh ? new Box3().setFromObject(floorMesh).getCenter(new Vector3()).y : bounds.min.y;
			if (longestSide > 0) house.scale.setScalar(14 / longestSide);
			house.position.set(-center.x * house.scale.x, -floorHeight * house.scale.y + .005, -center.z * house.scale.z);
			scene.add(house);
			const normalizedBounds = new Box3().setFromObject(house);
			const normalizedSize = normalizedBounds.getSize(new Vector3());
			const normalizedCenter = normalizedBounds.getCenter(new Vector3());
			playerStart.set(normalizedCenter.x, 0, normalizedBounds.max.z + Math.max(1.5, normalizedSize.z * .06));
			player.position.copy(playerStart);
			cameraStart.set(normalizedCenter.x, normalizedBounds.max.y + Math.max(7, normalizedSize.y * 1.3), normalizedCenter.z + normalizedSize.z * .8);
			lookStart.set(normalizedCenter.x, normalizedBounds.min.y + normalizedSize.y * .28, normalizedCenter.z);
			camera.position.copy(cameraStart);
			camera.lookAt(lookStart);
			const mobileCamera = window.matchMedia("(max-width: 700px)").matches;
			cameraTarget.set(playerStart.x, playerStart.y + (mobileCamera ? 2.2 : 2.6), playerStart.z + (mobileCamera ? 5.2 : 6.5));
			lookTarget.set(playerStart.x, playerStart.y + .95, playerStart.z);
			cameraFlightStarted = performance.now();
			houseReady = true;
			finishLoading();
		}, void 0, () => {
			if (active) setStatus("error");
		});
		new GLTFLoader().load(modelPaths[character], ({ scene: model }) => {
			if (!active) {
				releaseSceneObject(model);
				return;
			}
			avatar = model;
			avatar.traverse((object) => {
				if (object instanceof Bone) {
					bones[object.name] = object;
					boneRest.set(object, object.rotation.clone());
				}
				if (object instanceof Mesh) {
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
		}, void 0, () => {
			if (active) setStatus("error");
		});
		const onKeyDown = (event) => {
			const key = event.key.toLowerCase();
			const target = event.target;
			if (target instanceof HTMLElement && target.matches("input, textarea, select, [contenteditable='true']")) return;
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
		const onKeyUp = (event) => pressedKeys.current.delete(event.key.toLowerCase());
		const onBlur = () => pressedKeys.current.clear();
		const onCameraPointerDown = (event) => {
			if (cameraFlightStarted !== null || phoneOpenRef.current || event.pointerType === "mouse" && event.button !== 0) return;
			cameraDragging = true;
			cameraPointerId = event.pointerId;
			previousPointerX = event.clientX;
			previousPointerY = event.clientY;
			renderer.domElement.style.cursor = "grabbing";
			renderer.domElement.setPointerCapture(event.pointerId);
			event.preventDefault();
		};
		const onCameraPointerMove = (event) => {
			if (!cameraDragging || event.pointerId !== cameraPointerId) return;
			cameraYaw -= (event.clientX - previousPointerX) * .005;
			cameraPitch = MathUtils.clamp(cameraPitch + (event.clientY - previousPointerY) * .004, -.6, .65);
			previousPointerX = event.clientX;
			previousPointerY = event.clientY;
			event.preventDefault();
		};
		const onCameraPointerUp = (event) => {
			if (!cameraDragging || event.pointerId !== cameraPointerId) return;
			cameraDragging = false;
			cameraPointerId = null;
			renderer.domElement.style.cursor = "grab";
			if (renderer.domElement.hasPointerCapture(event.pointerId)) renderer.domElement.releasePointerCapture(event.pointerId);
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
			const delta = Math.min(timer.getDelta(), .05);
			const time = timer.getElapsed();
			const daylight = getDaylightAmount(/* @__PURE__ */ new Date());
			const nightAmount = 1 - daylight;
			currentSkyColor.copy(nightSkyColor).lerp(daySkyColor, daylight);
			hemisphereLight.intensity = .55 + daylight * 1.45;
			hemisphereLight.color.copy(nightHemisphereColor).lerp(dayHemisphereColor, daylight);
			hemisphereLight.groundColor.copy(nightGroundColor).lerp(dayGroundColor, daylight);
			sunlight.intensity = .32 + daylight * 2.48;
			sunlight.color.copy(nightSunColor).lerp(daySunColor, daylight);
			skyMaterial.opacity = nightAmount * .9;
			const moonMaterial = moon.material;
			moonMaterial.opacity = nightAmount;
			starSky.position.copy(camera.position);
			moon.position.copy(camera.position).add(moonOffset);
			const grassTime = grass.userData.grassTime;
			grassTime.value = time;
			const keys = pressedKeys.current;
			const forward = keys.has("w") || keys.has("arrowup");
			const backward = keys.has("s") || keys.has("arrowdown");
			const left = keys.has("a") || keys.has("arrowleft");
			const right = keys.has("d") || keys.has("arrowright");
			const walking = forward || backward || left || right;
			if (walking) {
				direction.set(Number(right) - Number(left), 0, Number(backward) - Number(forward)).normalize();
				player.rotation.y = Math.atan2(direction.x, direction.z);
				const speed = keys.has("shift") ? 5.2 : 3.1;
				playerStep.copy(direction).multiplyScalar(speed * delta);
				if (house) {
					playerRayOrigin.copy(player.position).add(new Vector3(0, .75, 0));
					raycaster.set(playerRayOrigin, playerStep.clone().normalize());
					if (!raycaster.intersectObject(house, true).find((hit) => hit.distance < .38)) player.position.add(playerStep);
				} else player.position.add(playerStep);
				player.position.y = Math.max(0, player.position.y);
			}
			const gait = walking ? Math.sin(time * 9) * .48 : 0;
			const setBoneX = (boneName, offset) => {
				const bone = bones[boneName];
				if (!bone) return;
				const rest = boneRest.get(bone);
				bone.rotation.x = (rest?.x ?? 0) + offset;
			};
			setBoneX("LeftUpLeg", gait);
			setBoneX("RightUpLeg", -gait);
			setBoneX("LeftLeg", Math.max(0, -gait) * .8);
			setBoneX("RightLeg", Math.max(0, gait) * .8);
			setBoneX("LeftArm", walking ? -gait * .65 : 0);
			setBoneX("RightArm", walking ? gait * .65 : 0);
			if (cameraFlightStarted !== null) {
				const progress = Math.min(1, (performance.now() - cameraFlightStarted) / 8500);
				const eased = progress * progress * (3 - 2 * progress);
				camera.position.lerpVectors(cameraStart, cameraTarget, eased);
				const focus = lookStart.clone().lerp(lookTarget, eased);
				camera.lookAt(focus);
				if (progress >= 1) cameraFlightStarted = null;
			} else if (houseReady) {
				const orbitDistance = window.matchMedia("(max-width: 700px)").matches ? 4.2 : 6;
				const elevation = .24 + cameraPitch;
				const horizontalDistance = orbitDistance * Math.cos(elevation);
				const targetCamera = cameraTarget.set(player.position.x + Math.sin(cameraYaw) * horizontalDistance, player.position.y + 1.05 + Math.sin(elevation) * orbitDistance, player.position.z + Math.cos(cameraYaw) * horizontalDistance);
				const targetLook = player.position.clone().add(new Vector3(0, 1.05, 0));
				camera.position.lerp(targetCamera, 1 - Math.exp(-4 * delta));
				camera.lookAt(targetLook);
				const rayLength = wallRayDirection.subVectors(camera.position, targetLook).length();
				wallRayDirection.normalize();
				raycaster.set(targetLook, wallRayDirection);
				const blockingMaterials = /* @__PURE__ */ new Set();
				if (house) raycaster.intersectObject(house, true).forEach((hit) => {
					if (hit.distance >= rayLength - .35 || !(hit.object instanceof Mesh)) return;
					(Array.isArray(hit.object.material) ? hit.object.material : [hit.object.material]).forEach((material) => {
						if (!material.transparent) blockingMaterials.add(material);
					});
				});
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
						depthWrite: material.depthWrite
					});
					material.opacity = Math.min(material.opacity, .18);
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
	const setDirection = (key, pressed) => {
		if (phoneOpenRef.current) return;
		if (pressed) pressedKeys.current.add(key);
		else pressedKeys.current.delete(key);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "game-world",
		"aria-label": "Lagos World playable house",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "game-world-canvas",
				ref: containerRef
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "game-world-shade",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "game-world-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "game-world-brand",
					children: "LAGOS WORLD"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "game-world-greeting",
					children: ["Welcome, ", playerName]
				})]
			}),
			status === "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "game-world-status",
				role: "status",
				"aria-live": "polite",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "game-spinner" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "The clouds are parting…" })]
			}),
			status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "game-world-error",
				role: "alert",
				children: "The house scene couldn’t be loaded. Please refresh and try again."
			}),
			status === "ready" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "game-world-hint",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WASD / arrows to walk · Shift to run · P for phone" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hold and drag to look around" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "game-world-controls",
					"aria-label": "Character movement controls",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Move forward",
							onPointerDown: () => setDirection("w", true),
							onPointerUp: () => setDirection("w", false),
							onPointerLeave: () => setDirection("w", false),
							onPointerCancel: () => setDirection("w", false),
							children: "↑"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Move left",
							onPointerDown: () => setDirection("a", true),
							onPointerUp: () => setDirection("a", false),
							onPointerLeave: () => setDirection("a", false),
							onPointerCancel: () => setDirection("a", false),
							children: "←"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Move backward",
							onPointerDown: () => setDirection("s", true),
							onPointerUp: () => setDirection("s", false),
							onPointerLeave: () => setDirection("s", false),
							onPointerCancel: () => setDirection("s", false),
							children: "↓"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Move right",
							onPointerDown: () => setDirection("d", true),
							onPointerUp: () => setDirection("d", false),
							onPointerLeave: () => setDirection("d", false),
							onPointerCancel: () => setDirection("d", false),
							children: "→"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "game-phone-launch",
					type: "button",
					onClick: () => {
						phoneOpenRef.current = true;
						setPhoneOpen(true);
					},
					"aria-label": "Open in-game phone",
					title: "Phone (press P)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "▯"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Phone" })]
				})
			] }),
			phoneOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GamePhone, { onClose: () => {
				phoneOpenRef.current = false;
				setPhoneOpen(false);
			} })
		]
	});
}
//#endregion
export { GameWorld };
