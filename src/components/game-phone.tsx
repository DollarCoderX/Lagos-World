import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  BusFront,
  Calculator,
  CalendarDays,
  Camera,
  CarFront,
  ChartNoAxesCombined,
  Chrome,
  CircleHelp,
  CloudSun,
  ContactRound,
  Gamepad2,
  GraduationCap,
  HeartPulse,
  House,
  Images,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  Mic,
  Music2,
  Newspaper,
  NotebookPen,
  PackageCheck,
  PartyPopper,
  Phone,
  Radio,
  Settings,
  ShoppingBag,
  TrainFront,
  Utensils,
  Wallet,
  Youtube,
  Clock3,
  type LucideIcon,
} from "lucide-react";

type AppId =
  | "youtube"
  | "tiktok"
  | "instagram"
  | "facebook"
  | "chrome"
  | "phone"
  | "contacts"
  | "messages"
  | "homes"
  | "cab"
  | "train"
  | "maps"
  | "music"
  | "photos"
  | "camera"
  | "calendar"
  | "notes"
  | "weather"
  | "wallet"
  | "bank"
  | "email"
  | "shop"
  | "radio"
  | "clock"
  | "calculator"
  | "recorder"
  | "settings"
  | "games"
  | "food"
  | "jobs"
  | "school"
  | "news"
  | "transit"
  | "events"
  | "health"
  | "portfolio"
  | "delivery"
  | "help";

type PhoneScreen = "home" | "apps" | "call" | AppId;
type VoiceGender = "female" | "male";
type Contact = { name: string; detail: string };
type ConversationLine = { caller: string; reply: string };
type TranscriptLine = { speaker: "caller" | "you"; text: string };
type AppDefinition = {
  id: AppId;
  name: string;
  icon: string;
  tint: string;
  summary: string;
  action: string;
  details: string[];
};

const appGlyphs: Record<AppId, LucideIcon> = {
  youtube: Youtube,
  tiktok: Music2,
  instagram: Images,
  facebook: ContactRound,
  chrome: Chrome,
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
  help: CircleHelp,
};

function PhoneAppGlyph({ id }: { id: AppId }) {
  const Icon = appGlyphs[id];
  return <Icon className="game-phone-app-glyph" aria-hidden="true" />;
}

const contacts: Contact[] = [
  { name: "Mum", detail: "Family · Favourites" },
  { name: "Aunty Ngozi", detail: "Family · Lagos" },
  { name: "Kola — Cab", detail: "Driver · Ikeja" },
];

const appList: AppDefinition[] = [
  {
    id: "youtube",
    name: "YouTube",
    icon: "▶",
    tint: "red",
    summary: "Watch local stories, music and the latest Lagos clips.",
    action: "Play featured clip",
    details: ["Lagos after the rain", "Street food in Yaba", "A quiet evening by the lagoon"],
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: "♪",
    tint: "dark",
    summary: "A little For You feed from around the city.",
    action: "Like this video",
    details: ["Danfo dance challenge", "Sunday jollof rating", "POV: the bus finally arrives"],
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: "◎",
    tint: "pink",
    summary: "Open Instagram in the phone.",
    action: "Open Instagram",
    details: [],
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: "f",
    tint: "blue",
    summary: "Open Facebook in the phone.",
    action: "Open Facebook",
    details: [],
  },
  {
    id: "chrome",
    name: "Chrome",
    icon: "◉",
    tint: "yellow",
    summary: "Search the web or visit a link.",
    action: "Search",
    details: [],
  },
  {
    id: "phone",
    name: "Phone",
    icon: "☎",
    tint: "green",
    summary: "Call one of your saved people.",
    action: "Open contacts",
    details: [],
  },
  {
    id: "contacts",
    name: "Contacts",
    icon: "●",
    tint: "blue",
    summary: "Your saved people are only a tap away.",
    action: "Call contact",
    details: [],
  },
  {
    id: "messages",
    name: "Messages",
    icon: "▰",
    tint: "green",
    summary: "Send a message that stays inside this game.",
    action: "Send message",
    details: [],
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
      "Ikeja GRA · Family home · ₦3.2m / year",
    ],
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
      "XL · 9 min away · ₦7,800",
    ],
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
      "Ikeja → Marina · 12:45 PM",
    ],
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
      "Ikeja City Mall · 13.2 km",
    ],
  },
  {
    id: "music",
    name: "Music",
    icon: "♫",
    tint: "purple",
    summary: "A small soundtrack for your day.",
    action: "Play Lagos mix",
    details: ["Lagos sunset mix", "Afrobeats for the ride", "Easy Sunday morning"],
  },
  {
    id: "photos",
    name: "Photos",
    icon: "✿",
    tint: "pink",
    summary: "Your in-game memories and camera roll.",
    action: "Open album",
    details: ["Lagos World album", "House tour", "Saved moments"],
  },
  {
    id: "camera",
    name: "Camera",
    icon: "◎",
    tint: "dark",
    summary: "Frame a moment from the world.",
    action: "Take a photo",
    details: ["Camera preview is ready.", "Photos are saved locally in this demo."],
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
      "Tomorrow · Check the new listings",
    ],
  },
  {
    id: "notes",
    name: "Notes",
    icon: "▧",
    tint: "yellow",
    summary: "Write down an idea before you forget it.",
    action: "Save note",
    details: ["House ideas", "Shopping list", "Places to visit"],
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
      "Tomorrow · 31° · Sunny",
    ],
  },
  {
    id: "wallet",
    name: "Wallet",
    icon: "▱",
    tint: "purple",
    summary: "Your pretend in-game travel wallet.",
    action: "Add demo credit",
    details: ["Demo balance · ₦25,000", "No real payments are taken."],
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
      "Real banking is not connected.",
    ],
  },
  {
    id: "email",
    name: "Email",
    icon: "✉",
    tint: "red",
    summary: "Your in-game mailbox.",
    action: "Compose demo email",
    details: ["Welcome to Lagos World", "Your house viewing details", "A note from Aunty Ngozi"],
  },
  {
    id: "shop",
    name: "Shop",
    icon: "▣",
    tint: "orange",
    summary: "Pick up a few things for your home.",
    action: "Add item to basket",
    details: ["Throw pillow · ₦8,500", "House plant · ₦12,000", "Table lamp · ₦18,000"],
  },
  {
    id: "radio",
    name: "Radio",
    icon: "◖",
    tint: "purple",
    summary: "Local stations for the ride.",
    action: "Tune in",
    details: ["Lagos FM · City updates", "Naija Vibes · Music", "Island Radio · Easy listening"],
  },
  {
    id: "clock",
    name: "Clock",
    icon: "◷",
    tint: "dark",
    summary: "Your time, alarms and timers.",
    action: "Set 10 minute timer",
    details: ["Lagos · WAT (UTC+1)", "Alarm · 7:00 AM", "Timer · Ready"],
  },
  {
    id: "calculator",
    name: "Calculator",
    icon: "＋",
    tint: "dark",
    summary: "Quick calculations for your plans.",
    action: "Calculate sample fare",
    details: ["Cab estimate · ₦3,200", "Weekly transport · ₦16,000"],
  },
  {
    id: "recorder",
    name: "Recorder",
    icon: "◉",
    tint: "red",
    summary: "Keep a voice memo for yourself.",
    action: "Start demo recording",
    details: ["Recordings stay on this demo screen."],
  },
  {
    id: "settings",
    name: "Settings",
    icon: "⚙",
    tint: "dark",
    summary: "Manage this in-game phone.",
    action: "Check for updates",
    details: ["Sound · On", "Network · Lagos World", "Privacy · Demo data stays in this browser"],
  },
  {
    id: "games",
    name: "Games",
    icon: "▣",
    tint: "purple",
    summary: "Quick little games for a break.",
    action: "Start a quick game",
    details: ["Lagos Word Dash", "Street Sign Spotter", "Guess the neighbourhood"],
  },
  {
    id: "food",
    name: "Food",
    icon: "♨",
    tint: "orange",
    summary: "Find a local bite for the afternoon.",
    action: "Add meal to order",
    details: ["Jollof rice · ₦4,500", "Suya wrap · ₦3,800", "Puff-puff · ₦1,500"],
  },
  {
    id: "jobs",
    name: "Jobs",
    icon: "▤",
    tint: "blue",
    summary: "Browse fictional opportunities around Lagos.",
    action: "Save job",
    details: ["Junior designer · Yaba", "Community host · Lekki", "Customer care · Ikeja"],
  },
  {
    id: "school",
    name: "Learning",
    icon: "▱",
    tint: "green",
    summary: "Short lessons and local discoveries.",
    action: "Start a lesson",
    details: ["Lagos history · 5 min", "Learn Yoruba greetings", "Everyday budgeting"],
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
      "Community football returns Sunday",
    ],
  },
  {
    id: "transit",
    name: "Transit",
    icon: "⇄",
    tint: "green",
    summary: "Compare demo bus and train routes.",
    action: "Plan my trip",
    details: ["Bus · 32 min · ₦900", "Train · 21 min · ₦1,500", "Cab · 18 min · ₦3,200"],
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
      "Live music · Freedom Park",
    ],
  },
  {
    id: "health",
    name: "Wellness",
    icon: "♡",
    tint: "pink",
    summary: "A gentle reminder to pause and take care.",
    action: "Start breathing break",
    details: ["Breathe in for 4", "Hold for 4", "Breathe out for 6"],
  },
  {
    id: "portfolio",
    name: "My profile",
    icon: "◉",
    tint: "blue",
    summary: "Your Lagos World profile and saved places.",
    action: "Save this place",
    details: ["Home · Lagos", "Saved places · 3", "Community · Lagos World"],
  },
  {
    id: "delivery",
    name: "Delivery",
    icon: "▰",
    tint: "orange",
    summary: "Track pretend deliveries to your home.",
    action: "Track demo parcel",
    details: ["Home essentials · On the way", "Expected · Today, 4:30 PM", "Courier · Tunde"],
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
      "Use WASD or arrows to walk.",
    ],
  },
];

const conversations: Record<string, ConversationLine[]> = {
  Mum: [
    {
      caller: "Hello my dear, have you settled into the new house?",
      reply: "I have, Mum. It is beginning to feel like home.",
    },
    {
      caller: "Did you remember to eat before going out?",
      reply: "Yes, I had something this morning. Thank you for checking.",
    },
    {
      caller: "I saw the rain clouds near our street. Is it raining where you are?",
      reply: "Just a little breeze here. I will take an umbrella with me.",
    },
    {
      caller: "Your cousin says hello and wants to visit this weekend.",
      reply: "Please tell them they are welcome. I will be around.",
    },
    {
      caller: "Have you spoken to the caretaker about the front door?",
      reply: "I will call them this afternoon and make sure everything is fine.",
    },
    {
      caller: "I am making stew tomorrow. Should I keep some for you?",
      reply: "Please save a little for me. I will come by when I can.",
    },
    {
      caller: "How is the neighbourhood? Are the people kind?",
      reply: "They seem lovely so far. I am still learning my way around.",
    },
    {
      caller: "Please call your auntie back when you have a quiet moment.",
      reply: "I will call her after this. Thank you for reminding me.",
    },
    {
      caller: "I found your old blue shirt in my wardrobe. Do you want it?",
      reply: "Yes please, Mum. I wondered where it went.",
    },
    {
      caller: "Have you had enough rest this week?",
      reply: "I am taking it slowly today. I promise to get some rest.",
    },
    {
      caller: "The family is planning lunch on Sunday. Can you join us?",
      reply: "That sounds nice. I will check my plans and let you know.",
    },
    {
      caller: "Did the parcel arrive safely at your place?",
      reply: "It did, everything is here. I will open it properly later.",
    },
    {
      caller: "I want to hear all about your new place.",
      reply: "I will send you a few pictures when I have a moment.",
    },
    {
      caller: "Please remember to lock up if you leave in the evening.",
      reply: "I will, Mum. I always check the door before I go.",
    },
    {
      caller: "Are you keeping some money aside for transport?",
      reply: "Yes, I have planned for it. Thanks for looking out for me.",
    },
    {
      caller: "Your little plant needs water when you get back.",
      reply: "I will give it some water as soon as I get home.",
    },
    {
      caller: "I made your favourite jollof rice. I wish you were here.",
      reply: "You know I would never say no to your jollof.",
    },
    {
      caller: "Okay my dear, call me later so we can talk properly.",
      reply: "I will. Love you, Mum. Speak soon.",
    },
  ],
  "Aunty Ngozi": [
    {
      caller: "My dear, how are you finding life in your new Lagos home?",
      reply: "I am settling in nicely, Aunty. It is a lovely place.",
    },
    {
      caller: "I know a good market not far from you. Have you found it?",
      reply: "Not yet, but I would love the directions when you have time.",
    },
    {
      caller: "There is a family celebration next month. We want you there.",
      reply: "I would be happy to come. Please send me the date.",
    },
    {
      caller: "Have you tried the small bakery beside the bus stop?",
      reply: "I have not. I will look for it the next time I go out.",
    },
    {
      caller: "I am visiting the island on Saturday. Shall we meet for lunch?",
      reply: "That sounds wonderful. Let us choose a place near you.",
    },
    {
      caller: "Your uncle says the traffic is lighter before eight in the morning.",
      reply: "That is a helpful tip. I will try to leave earlier.",
    },
    {
      caller: "I heard there is a new art show in town this week.",
      reply: "I love seeing local art. Please tell me where it is.",
    },
    {
      caller: "How is your work going? Are you enjoying the new routine?",
      reply: "It is going well, Aunty. I am finding my rhythm.",
    },
    {
      caller: "I have a spare plant pot if you need one for your room.",
      reply: "That would be lovely. I am trying to make the place feel cosy.",
    },
    {
      caller: "The sea breeze was so nice yesterday evening.",
      reply: "I should go for a walk by the water one of these evenings.",
    },
    {
      caller: "Can you help me choose a gift for your cousin?",
      reply: "Of course. Tell me a little about what they like.",
    },
    {
      caller: "I saved a recipe for that coconut cake you enjoy.",
      reply: "Please send it to me. I will try to make it this weekend.",
    },
    {
      caller: "Do you know which train stop is closest to the market?",
      reply: "I am still learning the routes. I will check the map.",
    },
    {
      caller: "I saw a nice two-bedroom listing near Yaba this morning.",
      reply: "That sounds interesting. Send me the link and I will have a look.",
    },
    {
      caller: "The neighbours are having a small get-together tomorrow.",
      reply: "How kind of them. I will see if I can stop by.",
    },
    {
      caller: "I am proud of how you are making this new place yours.",
      reply: "Thank you, Aunty. It means a lot to hear that.",
    },
    {
      caller: "Would you like me to bring anything when I come over?",
      reply: "Just bring yourself. We can have tea and catch up.",
    },
    {
      caller: "I will call again soon. Give my love to everyone.",
      reply: "I will, Aunty. Have a lovely day.",
    },
  ],
  "Kola — Cab": [
    {
      caller: "Hello, I am by the front gate. I am in a silver car.",
      reply: "Thanks, Kola. I am coming out now.",
    },
    {
      caller: "Traffic is moving slowly near the junction. I may be five minutes late.",
      reply: "No worries. I will wait inside until you get here.",
    },
    {
      caller: "Would you prefer the Lekki-Epe road or the route by the bridge?",
      reply: "Let us take whichever route is moving better right now.",
    },
    {
      caller: "I have started the trip. Please let me know if the air is too cold.",
      reply: "It feels comfortable, thank you.",
    },
    {
      caller: "The main road is busy, but the side street looks clear.",
      reply: "That sounds good. I am not in a hurry.",
    },
    {
      caller: "I can drop you by the entrance or at the corner shop.",
      reply: "The entrance will be perfect, please.",
    },
    {
      caller: "There is a little rain ahead, so I am driving carefully.",
      reply: "Thank you for taking your time. Safety first.",
    },
    {
      caller: "I have arrived at the pickup point. Can you see the car?",
      reply: "Yes, I can see you. I am walking over now.",
    },
    {
      caller: "Would you like me to wait while you pick up your parcel?",
      reply: "That would be helpful. I will be just a few minutes.",
    },
    {
      caller: "The bridge is clear now. We should get there on time.",
      reply: "Great, thank you for keeping me updated.",
    },
    {
      caller: "I found a safe place to pull over near the entrance.",
      reply: "That is fine. I will meet you right there.",
    },
    {
      caller: "The map sent me around the back of the building. Is that right?",
      reply: "Please come to the main entrance instead.",
    },
    {
      caller: "I have put your destination into the map. Please confirm it.",
      reply: "That is the correct address. Thank you.",
    },
    {
      caller: "I am outside the market. Should I stay on this side of the road?",
      reply: "Yes, that is easiest. I will come to you.",
    },
    {
      caller: "The ride is complete. Thank you for choosing my cab today.",
      reply: "Thank you for the safe ride, Kola. Have a good one.",
    },
    {
      caller: "I am a few streets away and should reach you shortly.",
      reply: "I will be ready by the gate. See you soon.",
    },
    {
      caller: "There is road work ahead. I can take a short detour.",
      reply: "Please take the safer road, even if it is a little longer.",
    },
    {
      caller: "I have dropped you at the house. Have a good evening.",
      reply: "Thanks again, Kola. Drive safely.",
    },
  ],
};

const quickDock: AppId[] = ["phone", "messages", "chrome", "camera"];
const homeApps: AppId[] = [
  "photos",
  "youtube",
  "chrome",
  "homes",
  "contacts",
  "tiktok",
  "maps",
  "train",
];

const externalAppUrls: Partial<Record<AppId, string>> = {
  youtube: "https://m.youtube.com/",
  tiktok: "https://www.tiktok.com/",
  instagram: "https://www.instagram.com/",
  facebook: "https://m.facebook.com/",
};

function findVoice(gender: VoiceGender) {
  const voices = window.speechSynthesis.getVoices();
  const patterns =
    gender === "female"
      ? /female|woman|zira|samantha|ava|serena|victoria|karen|tessa|fiona|aria|jenny|sonia/i
      : /male|man|david|mark|james|guy|daniel|george|ryan|thomas|alex/i;
  return (
    voices.find((voice) => patterns.test(voice.name) && /en(-|_)?(ng|gb|us)?/i.test(voice.lang)) ??
    voices.find((voice) => patterns.test(voice.name)) ??
    voices.find((voice) => /^en/i.test(voice.lang))
  );
}

function speakLine(text: string, gender: VoiceGender) {
  if (!("speechSynthesis" in window)) return false;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const voice = findVoice(gender);
  if (voice) utterance.voice = voice;
  utterance.lang = voice?.lang ?? "en-NG";
  utterance.rate = 0.93;
  utterance.pitch = gender === "female" ? 1.08 : 0.9;
  window.speechSynthesis.speak(utterance);
  return true;
}

function normaliseWebAddress(value: string) {
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

export function GamePhone({ onClose }: { onClose: () => void }) {
  const [screen, setScreen] = useState<PhoneScreen>("home");
  const [activeContact, setActiveContact] = useState<Contact | null>(null);
  const [callStatus, setCallStatus] = useState<"incoming" | "connected" | "ended">("incoming");
  const [voiceGender, setVoiceGender] = useState<VoiceGender>("female");
  const [conversationIndex, setConversationIndex] = useState(0);
  const [transcript, setTranscript] = useState<TranscriptLine[]>([]);
  const [notice, setNotice] = useState("");
  const [time, setTime] = useState(() =>
    new Intl.DateTimeFormat([], { hour: "numeric", minute: "2-digit" }).format(new Date()),
  );
  const [searchText, setSearchText] = useState("");
  const [webUrl, setWebUrl] = useState("");
  const [messageText, setMessageText] = useState("");
  const [sentMessages, setSentMessages] = useState<string[]>([]);
  const [filterText, setFilterText] = useState("");
  const [callSeconds, setCallSeconds] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(
        new Intl.DateTimeFormat([], { hour: "numeric", minute: "2-digit" }).format(new Date()),
      );
    }, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (callStatus !== "connected") return;
    const interval = window.setInterval(() => setCallSeconds((seconds) => seconds + 1), 1000);
    return () => window.clearInterval(interval);
  }, [callStatus]);

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  const openCall = (contact: Contact, incoming = false) => {
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
      setTranscript([{ speaker: "caller", text: line.caller }]);
      setNotice(
        speakLine(line.caller, voiceGender)
          ? "Using a free voice installed in this browser"
          : "Voice playback is unavailable; read the conversation below",
      );
    }
  };

  const answerCall = () => {
    if (!activeContact) return;
    const line = conversations[activeContact.name]?.[conversationIndex];
    if (!line) return;
    setCallStatus("connected");
    setTranscript([{ speaker: "caller", text: line.caller }]);
    setCallSeconds(0);
    setNotice(
      speakLine(line.caller, voiceGender)
        ? "Using a free voice installed in this browser"
        : "Voice playback is unavailable; read the conversation below",
    );
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
      { speaker: "you", text: current.reply },
      { speaker: "caller", text: next.caller },
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
  const filteredApps = appList.filter((app) =>
    app.name.toLowerCase().includes(filterText.trim().toLowerCase()),
  );

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
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

  const openApp = (appId: AppId) => {
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

  const handleAppAction = (app: AppDefinition) => {
    if (app.id === "phone") {
      setScreen("contacts");
      return;
    }
    if (app.id === "cab" || app.id === "train" || app.id === "homes") {
      setNotice(
        app.id === "cab"
          ? "Your demo cab is on its way · 4 min"
          : app.id === "train"
            ? "Demo ticket saved · Ikeja → Marina"
            : "Viewing saved · Lekki · Saturday, 11:00 AM",
      );
      return;
    }
    setNotice(
      app.id === "wallet"
        ? "Demo credit added · no real payment made"
        : app.id === "camera"
          ? "Photo captured in this demo"
          : `${app.name} · saved in this demo`,
    );
  };

  return (
    <div
      className="game-phone-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="game-phone"
        role="dialog"
        aria-modal="true"
        aria-label="In-game Android phone"
      >
        <span className="game-phone-side-button game-phone-volume" aria-hidden="true" />
        <span className="game-phone-side-button game-phone-power" aria-hidden="true" />
        <div className="game-phone-screen">
          <div className="game-phone-statusbar">
            <span>{time}</span>
            <span className="game-phone-status-icons" aria-label="Signal, Wi-Fi, battery">
              <span>▮▮▮</span>
              <span>◉</span>
              <span>▰</span>
            </span>
          </div>
          {screen === "home" ? (
            <button
              className="game-phone-home-close"
              type="button"
              onClick={onClose}
              aria-label="Put phone away"
            >
              ×
            </button>
          ) : (
            <header className="game-phone-toolbar">
              <button
                className="game-phone-back"
                type="button"
                onClick={goHome}
                aria-label="Phone home"
              >
                ‹
              </button>
              <span>
                {screen === "call"
                  ? "Phone"
                  : screen === "apps"
                    ? "All apps"
                    : (selectedApp?.name ?? "Contacts")}
              </span>
              <button
                className="game-phone-close"
                type="button"
                onClick={onClose}
                aria-label="Close phone"
              >
                ×
              </button>
            </header>
          )}

          {screen === "home" && (
            <div className="game-phone-home">
              <div className="game-phone-wallpaper">
                <div className="game-phone-home-clock">
                  <span className="game-phone-clock">{time}</span>
                  <p className="game-phone-date">
                    {new Intl.DateTimeFormat([], {
                      weekday: "short",
                      day: "numeric",
                      month: "long",
                    }).format(new Date())}
                  </p>
                </div>
                <div
                  className="game-phone-weather-widget"
                  aria-label="Lagos weather: 30 degrees, partly cloudy"
                >
                  <span>☁</span>
                  <strong>30°</strong>
                  <small>No data</small>
                </div>
              </div>
              <form className="game-phone-google-search" onSubmit={handleSearch}>
                <span className="game-phone-google-logo" aria-hidden="true">
                  G
                </span>
                <input
                  aria-label="Search Google or enter a website"
                  placeholder="Search or enter website"
                  value={searchText}
                  onChange={(event) => setSearchText(event.target.value)}
                />
                <button type="submit" aria-label="Search the web">
                  ⌕
                </button>
              </form>
              <div className="game-phone-home-icons">
                {homeApps.map((id) => {
                  const app = appList.find((item) => item.id === id);
                  if (!app) return null;
                  return (
                    <button
                      className={`game-phone-app game-phone-app-${app.tint}`}
                      data-app={app.id}
                      key={app.id}
                      type="button"
                      onClick={() => openApp(app.id)}
                    >
                      <span className="game-phone-app-icon">
                        <PhoneAppGlyph id={app.id} />
                      </span>
                      <span>{app.name}</span>
                    </button>
                  );
                })}
              </div>
              <div className="game-phone-dock-apps">
                {quickDock.map((id) => {
                  const app = appList.find((item) => item.id === id);
                  if (!app) return null;
                  return (
                    <button
                      className={`game-phone-app game-phone-app-${app.tint}`}
                      data-app={app.id}
                      key={app.id}
                      type="button"
                      aria-label={`Open ${app.name}`}
                      onClick={() => openApp(app.id)}
                    >
                      <span className="game-phone-app-icon">
                        <PhoneAppGlyph id={app.id} />
                      </span>
                    </button>
                  );
                })}
                <button
                  className="game-phone-app game-phone-app-drawer"
                  type="button"
                  aria-label="Open all apps"
                  onClick={() => setScreen("apps")}
                >
                  <span className="game-phone-app-icon">⠿</span>
                </button>
              </div>
            </div>
          )}

          {screen === "apps" && (
            <div className="game-phone-app-drawer">
              <label className="game-phone-app-search">
                <span aria-hidden="true">⌕</span>
                <input
                  aria-label="Search all apps"
                  placeholder={`Search ${appList.length} apps`}
                  value={filterText}
                  onChange={(event) => setFilterText(event.target.value)}
                />
              </label>
              <div className="game-phone-apps">
                {filteredApps.map((app) => (
                  <button
                    className={`game-phone-app game-phone-app-${app.tint}`}
                    data-app={app.id}
                    key={app.id}
                    type="button"
                    onClick={() => openApp(app.id)}
                  >
                    <span className="game-phone-app-icon">
                      <PhoneAppGlyph id={app.id} />
                    </span>
                    <span>{app.name}</span>
                  </button>
                ))}
                {filteredApps.length === 0 && <p className="game-phone-empty">No matching apps.</p>}
              </div>
            </div>
          )}

          {screen === "call" && activeContact && (
            <div className="game-phone-call-screen">
              <span className="game-phone-call-avatar">{activeContact.name.charAt(0)}</span>
              <h2>{activeContact.name}</h2>
              <p>
                {callStatus === "incoming"
                  ? "Incoming simulated call"
                  : callStatus === "connected"
                    ? `Connected · ${Math.floor(callSeconds / 60)}:${String(callSeconds % 60).padStart(2, "0")}`
                    : "Call ended"}
              </p>
              {callStatus === "connected" && (
                <>
                  <div className="game-phone-voice-picker" aria-label="Choose caller voice">
                    <button
                      type="button"
                      aria-pressed={voiceGender === "female"}
                      onClick={() => setVoiceGender("female")}
                    >
                      Female voice
                    </button>
                    <button
                      type="button"
                      aria-pressed={voiceGender === "male"}
                      onClick={() => setVoiceGender("male")}
                    >
                      Male voice
                    </button>
                  </div>
                  <div className="game-phone-transcript" aria-live="polite">
                    {transcript.map((line, index) => (
                      <p
                        className={`game-phone-message-bubble game-phone-message-${line.speaker}`}
                        key={`${index}-${line.text}`}
                      >
                        <span>{line.speaker === "you" ? "You" : activeContact.name}</span>
                        {line.text}
                      </p>
                    ))}
                  </div>
                  <span className="game-phone-call-notice" role="status">
                    {notice}
                  </span>
                </>
              )}
              <div className="game-phone-call-actions">
                {callStatus === "incoming" ? (
                  <>
                    <button className="game-phone-reject" type="button" onClick={endCall}>
                      Decline
                    </button>
                    <button className="game-phone-answer" type="button" onClick={answerCall}>
                      Answer
                    </button>
                  </>
                ) : callStatus === "connected" ? (
                  <>
                    <button
                      className="game-phone-reply"
                      type="button"
                      onClick={continueConversation}
                    >
                      Reply &amp; continue
                    </button>
                    <button className="game-phone-reject" type="button" onClick={endCall}>
                      End call
                    </button>
                  </>
                ) : (
                  <button className="game-phone-answer" type="button" onClick={goHome}>
                    Done
                  </button>
                )}
              </div>
            </div>
          )}

          {(screen === "phone" || screen === "contacts") && (
            <div className="game-phone-content">
              <p className="game-phone-section-label">FAVOURITES · SIMULATED CONTACTS</p>
              <div className="game-phone-contact-list">
                {contacts.map((contact, index) => (
                  <div className="game-phone-contact" key={contact.name}>
                    <span className={`game-phone-avatar game-phone-avatar-${index}`}>
                      {contact.name.charAt(0)}
                    </span>
                    <span className="game-phone-contact-name">
                      <strong>{contact.name}</strong>
                      <span>{contact.detail}</span>
                    </span>
                    <button
                      className="game-phone-call-button"
                      type="button"
                      onClick={() => openCall(contact)}
                      aria-label={`Call ${contact.name}`}
                    >
                      ☎
                    </button>
                  </div>
                ))}
              </div>
              <button
                className="game-phone-secondary-action"
                type="button"
                onClick={() => {
                  const contact = contacts[Math.floor(Math.random() * contacts.length)];
                  if (contact) openCall(contact, true);
                }}
              >
                Receive a pretend call
              </button>
              <p className="game-phone-footnote">
                Calls are make-believe; no real number is dialled.
              </p>
            </div>
          )}

          {screen === "messages" && (
            <div className="game-phone-content">
              <p className="game-phone-section-label">MESSAGES · STORED IN THIS SESSION</p>
              <div className="game-phone-contact-list">
                {contacts.map((contact, index) => (
                  <div className="game-phone-contact" key={contact.name}>
                    <span className={`game-phone-avatar game-phone-avatar-${index}`}>
                      {contact.name.charAt(0)}
                    </span>
                    <span className="game-phone-contact-name">
                      <strong>{contact.name}</strong>
                      <span>
                        {contact.name === "Mum"
                          ? "Are you home safe?"
                          : contact.name === "Aunty Ngozi"
                            ? "Lunch this weekend?"
                            : "I am by the gate."}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              {sentMessages.map((message, index) => (
                <p
                  className="game-phone-message-bubble game-phone-message-you"
                  key={`${index}-${message}`}
                >
                  {message}
                </p>
              ))}
              <form
                className="game-phone-compose"
                onSubmit={(event) => {
                  event.preventDefault();
                  const text = messageText.trim();
                  if (!text) return;
                  setSentMessages((previous) => [...previous, text]);
                  setMessageText("");
                }}
              >
                <input
                  aria-label="Write a simulated message"
                  placeholder="Message…"
                  value={messageText}
                  onChange={(event) => setMessageText(event.target.value)}
                />
                <button type="submit">Send</button>
              </form>
              <p className="game-phone-footnote">Messages stay on this simulated phone.</p>
            </div>
          )}

          {screen === "chrome" && (
            <div className="game-phone-content game-phone-browser">
              <form className="game-phone-search-form" onSubmit={handleSearch}>
                <span aria-hidden="true">⌕</span>
                <input
                  aria-label="Search the web or enter a link"
                  placeholder="Search or type a web address"
                  value={searchText}
                  onChange={(event) => setSearchText(event.target.value)}
                />
                <button type="submit">Go</button>
              </form>
              {notice && (
                <p className="game-phone-notice" role="status">
                  {notice}
                </p>
              )}
              {webUrl ? (
                <>
                  <a
                    className="game-phone-browser-open"
                    href={webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open page in browser ↗
                  </a>
                  <iframe
                    className="game-phone-webview"
                    src={webUrl}
                    title="In-game phone web page"
                    sandbox="allow-forms allow-scripts allow-popups allow-popups-to-escape-sandbox"
                    referrerPolicy="no-referrer"
                  />
                </>
              ) : (
                <div className="game-phone-browser-home">
                  <span className="game-phone-chrome-mark">◉</span>
                  <strong>Search the web</strong>
                  <span>Enter a website or search above to open it in your browser.</span>
                  <div className="game-phone-browser-shortcuts">
                    {Object.entries(externalAppUrls).map(([appId, url]) => {
                      const app = appList.find((item) => item.id === appId);
                      if (!app) return null;
                      return (
                        <a
                          className={`game-phone-browser-shortcut game-phone-app-${app.tint}`}
                          href={url}
                          key={appId}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="game-phone-app-icon">
                            <PhoneAppGlyph id={app.id} />
                          </span>
                          {app.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {selectedApp && externalAppUrls[selectedApp.id] && (
            <div className="game-phone-content game-phone-browser game-phone-social-webview">
              <div className="game-phone-social-header">
                <span className={`game-phone-social-icon game-phone-app-${selectedApp.tint}`}>
                  <PhoneAppGlyph id={selectedApp.id} />
                </span>
                <span className="game-phone-social-title">
                  <strong>{selectedApp.name}</strong>
                  <small>Official website</small>
                </span>
                <a
                  className="game-phone-open-website"
                  href={externalAppUrls[selectedApp.id]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open app ↗
                </a>
              </div>
              <iframe
                className="game-phone-webview"
                src={webUrl || externalAppUrls[selectedApp.id]}
                title={`${selectedApp.name} website`}
                sandbox="allow-forms allow-scripts allow-popups allow-popups-to-escape-sandbox"
                referrerPolicy="no-referrer"
                allow="autoplay; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
              <p className="game-phone-embed-note">
                Some sites do not allow in-app viewing. Tap Open to continue.
              </p>
            </div>
          )}

          {selectedApp &&
            !["phone", "contacts", "messages", "chrome"].includes(selectedApp.id) &&
            !externalAppUrls[selectedApp.id] && (
              <div className="game-phone-content game-phone-app-page">
                <div
                  className={`game-phone-feature-icon game-phone-app-${selectedApp.tint}`}
                  data-app={selectedApp.id}
                >
                  <PhoneAppGlyph id={selectedApp.id} />
                </div>
                <p className="game-phone-feature-eyebrow">LAGOS WORLD · IN-GAME APP</p>
                <h2>{selectedApp.name}</h2>
                <p className="game-phone-feature-summary">{selectedApp.summary}</p>
                {selectedApp.id === "train" && (
                  <label className="game-phone-select-label">
                    Route
                    <select aria-label="Choose train time">
                      <option>Ikeja → Marina · 10:15 AM</option>
                      <option>Ikeja → Marina · 11:30 AM</option>
                      <option>Ikeja → Marina · 12:45 PM</option>
                    </select>
                  </label>
                )}
                {selectedApp.id === "cab" && (
                  <label className="game-phone-select-label">
                    Ride type
                    <select aria-label="Choose ride type">
                      <option>Mini · ₦3,200</option>
                      <option>Comfort · ₦5,100</option>
                      <option>XL · ₦7,800</option>
                    </select>
                  </label>
                )}
                <div className="game-phone-feature-list">
                  {selectedApp.details.map((item) => (
                    <div className="game-phone-feature-row" key={item}>
                      <span>{item}</span>
                      <span aria-hidden="true">›</span>
                    </div>
                  ))}
                </div>
                {["youtube", "tiktok"].includes(selectedApp.id) && (
                  <button
                    className="game-phone-primary-action"
                    type="button"
                    onClick={() => setLiked((value) => !value)}
                  >
                    {liked ? "♥ Liked" : "♡ Like this clip"}
                  </button>
                )}
                <button
                  className="game-phone-primary-action"
                  type="button"
                  onClick={() => handleAppAction(selectedApp)}
                >
                  {selectedApp.action}
                </button>
                {notice && (
                  <p className="game-phone-notice" role="status">
                    {notice}
                  </p>
                )}
                <p className="game-phone-footnote">
                  This is a local game simulation. No real orders, travel, or payments are made.
                </p>
              </div>
            )}

          <footer className="game-phone-navigation">
            <button type="button" aria-label="Back to phone home" onClick={goHome}>
              ‹
            </button>
            <button type="button" aria-label="Phone home" onClick={goHome}>
              <span />
            </button>
            <button type="button" aria-label="Open all apps" onClick={() => setScreen("apps")}>
              ▦
            </button>
          </footer>
        </div>
      </section>
    </div>
  );
}
