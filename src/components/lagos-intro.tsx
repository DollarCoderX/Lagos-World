import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createIntroMusic } from "@/lib/intro-music";
import logo from "@/assets/b.png";
import couple from "@/assets/1.png";
import bridge from "@/assets/2.png";
import flight from "@/assets/3.png";
import party from "@/assets/4.png";
import beach from "@/assets/5.png";
import gamer from "@/assets/5.png";
import couplePhone from "@/assets/lagos-couple-phone.jpg";
import bridgePhone from "@/assets/lagos-bridge-phone.jpg";
import flightPhone from "@/assets/lagos-flight-phone.jpg";
import partyPhone from "@/assets/lagos-party-phone.jpg";
import beachPhone from "@/assets/lagos-beach-phone.jpg";
import gamerPhone from "@/assets/lagos-gamer-phone.jpg";

const scenes = [
  {
    image: couple,
    portrait: couplePhone,
    alt: "A couple beside a sports car on the Lagos waterfront at sunset",
    movement: "couple",
  },
  {
    image: bridge,
    portrait: bridgePhone,
    alt: "A sunset aerial view of the bridge across Lagos Lagoon",
    movement: "flight",
  },
  {
    image: flight,
    portrait: flightPhone,
    alt: "Lagos skyline and lagoon seen from a helicopter cabin",
    movement: "flight",
  },
  {
    image: party,
    portrait: partyPhone,
    alt: "A waterfront party in Lagos at night",
    movement: "party",
  },
  {
    image: beach,
    portrait: beachPhone,
    alt: "A Lagos beachside restaurant and crowd at sunset",
    movement: "couple",
  },
  {
    image: gamer,
    portrait: gamerPhone,
    alt: "A gamer relaxing in a blue-lit room playing Lagos World",
    movement: "party",
  },
];
const splashDuration = 3600;
const sceneDuration = 8000;
const totalDuration = splashDuration + scenes.length * sceneDuration;
const gameLoadingDuration = 6000;
const creditsDuration = 16000;
const skipDelay = 4000;
type CharacterChoice = "male" | "female";
const MotionButton = motion.create(Button);
const CharacterPreview = lazy(() =>
  import("@/components/character-preview").then(({ CharacterPreview }) => ({
    default: CharacterPreview,
  })),
);
const GameWorld = lazy(() =>
  import("@/components/game-world").then(({ GameWorld }) => ({
    default: GameWorld,
  })),
);

function ScenicBackdrop({
  image,
  portrait,
  alt,
}: {
  image: string;
  portrait: string;
  alt: string;
}) {
  return (
    <picture className="cinema-background" aria-hidden="true">
      <source media="(max-aspect-ratio: 3/4)" srcSet={portrait} />
      <img src={image} alt={alt} />
    </picture>
  );
}

export function LagosIntro() {
  const [elapsed, setElapsed] = useState(0);
  const [gameStage, setGameStage] = useState<
    "intro" | "loading" | "credits" | "age" | "character" | "profile" | "world"
  >("intro");
  const [canSkipCredits, setCanSkipCredits] = useState(false);
  const [age, setAge] = useState("");
  const [profile, setProfile] = useState({
    name: "",
    username: "",
    password: "",
    state: "",
  });
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterChoice | null>(null);
  const wantsSound = useRef(true);
  const preloadStarted = useRef(false);
  const reduceMotion = useReducedMotion();
  const splash = elapsed < splashDuration;
  const complete = elapsed >= totalDuration;
  const entering = gameStage !== "intro";
  const sceneIndex = Math.min(
    scenes.length - 1,
    Math.max(0, Math.floor((elapsed - splashDuration) / sceneDuration)),
  );
  const scene = scenes[sceneIndex];

  useEffect(() => {
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
  useEffect(() => {
    const portrait = window.matchMedia("(max-aspect-ratio: 3/4)").matches;
    [logo, ...scenes.map((scene) => (portrait ? scene.portrait : scene.image))].forEach((src) => {
      const image = new Image();
      image.src = src;
    });
    const instrumental = createIntroMusic();
    const start = () => {
      if (wantsSound.current) void instrumental.play().catch(() => {});
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
  useEffect(() => {
    if (splash || preloadStarted.current) return;
    preloadStarted.current = true;
    void import("@/lib/preload-game-world")
      .then(({ preloadGameWorldAssets }) => preloadGameWorldAssets())
      .catch((error: unknown) => {
        console.error("Unable to preload the game world assets during the intro.", error);
      });
  }, [splash]);
  useEffect(() => {
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
  const createProfile = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProfile((current) => ({ ...current, password: "" }));
    setGameStage("world");
  };

  return (
    <main className="intro-shell" aria-label="Lagos World cinematic introduction">
      <AnimatePresence mode="sync">
        {!splash && scene && (
          <motion.div
            key={sceneIndex}
            className="scene-layer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 1.8, ease: "easeInOut" }}
          >
            <picture className="scene-picture">
              <source media="(max-aspect-ratio: 3/4)" srcSet={scene.portrait} />
              <img
                className={`scene-image scene-${scene.movement}`}
                src={scene.image}
                alt={scene.alt}
              />
            </picture>
            {!reduceMotion && (
              <div className={`scene-atmosphere atmosphere-${scene.movement}`} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="scene-shade" />
      {!splash && <div className="film-texture" aria-hidden="true" />}
      {!splash && !complete && !reduceMotion && (
        <motion.div
          key={`shutter-${sceneIndex}`}
          className="scene-shutter"
          aria-hidden="true"
          initial={{ opacity: 0.24 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      )}
      <AnimatePresence>
        {splash && (
          <motion.div className="splash" exit={{ opacity: 0 }} transition={{ duration: 1.1 }}>
            <motion.img
              className="main-logo"
              src={logo}
              alt="Lagos World"
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.14, filter: "blur(10px)" }}
              animate={{ opacity: [0, 1, 1], scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 2.4, times: [0, 0.5, 1], ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              className="splash-motto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 1 }}
            >
              SAME CITY. DIFFERENT DREAMS.
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {complete && !entering && (
          <motion.div
            className="end-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: reduceMotion ? 1 : 1.04 }}
            transition={{ duration: 1.2 }}
          >
            <motion.img
              className="main-logo"
              src={logo}
              alt="Lagos World"
              initial={{ scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: 3 }}
            />
            <span className="splash-motto">SAME CITY. DIFFERENT DREAMS.</span>
            <MotionButton
              variant="cinema"
              className="continue-button"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              whileHover={{ scale: reduceMotion ? 1 : 1.025 }}
              whileTap={{ scale: reduceMotion ? 1 : 0.96 }}
              onClick={() => setGameStage("loading")}
            >
              <span>Continue</span>
              <span className="continue-arrow" aria-hidden="true">
                <ArrowRight />
              </span>
            </MotionButton>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {gameStage === "loading" && (
          <motion.div
            className="world-transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1 }}
          >
            <ScenicBackdrop
              image={bridge}
              portrait={bridgePhone}
              alt="The Lagos lagoon bridge at sunset"
            />
            <img className="world-watermark" src={logo} alt="" aria-hidden="true" />
            <motion.img
              className="world-logo"
              src={logo}
              alt="Lagos World"
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1.5 }}
            />
            <div className="loading-center world-loading" role="status">
              <span className="game-spinner" />
              <span className="world-loading-text">Going to world</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {gameStage === "credits" && (
          <motion.section
            className="cinema-credits"
            aria-label="Lagos World terms and credits"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <ScenicBackdrop
              image={bridge}
              portrait={bridgePhone}
              alt="The Lagos lagoon bridge at sunset"
            />
            <motion.div
              className={`credits-roll${reduceMotion ? " credits-roll-static" : ""}`}
              initial={{ y: reduceMotion ? 0 : "100vh" }}
              animate={{ y: reduceMotion ? 0 : "-110vh" }}
              transition={{ duration: reduceMotion ? 0 : creditsDuration / 1000, ease: "linear" }}
            >
              <img className="credits-logo" src={logo} alt="Lagos World" />
              <p className="credits-kicker">A WORLD OF MANY STORIES</p>
              <h2>TERMS OF SERVICE</h2>
              <p>
                Lagos World is a fictional experience inspired by the energy and spirit of Lagos.
              </p>
              <p>Play with respect. Help keep the city welcoming for everyone.</p>
              <p className="credits-kicker">SAME CITY. DIFFERENT DREAMS.</p>
              <p className="credits-thanks">THANK YOU FOR BEING HERE</p>
            </motion.div>
            {canSkipCredits && (
              <MotionButton
                variant="cinema"
                className="credits-skip"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setGameStage("age")}
              >
                Skip <ArrowRight aria-hidden="true" />
              </MotionButton>
            )}
          </motion.section>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {gameStage === "age" && (
          <motion.section
            className="age-gate"
            aria-labelledby="age-gate-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ScenicBackdrop
              image={bridge}
              portrait={bridgePhone}
              alt="The Lagos lagoon bridge at sunset"
            />
            <img className="age-gate-logo" src={logo} alt="Lagos World" />
            <p className="credits-kicker">BEFORE YOU ENTER</p>
            <h2 id="age-gate-title">How old are you?</h2>
            <p className="age-gate-copy">Enter your age to continue.</p>
            <form
              className="age-form"
              onSubmit={(event) => {
                event.preventDefault();
                setGameStage("character");
              }}
            >
              <label className="sr-only" htmlFor="player-age">
                Your age
              </label>
              <input
                id="player-age"
                type="number"
                min="1"
                max="120"
                inputMode="numeric"
                placeholder="Your age"
                value={age}
                onChange={(event) => setAge(event.target.value)}
                required
              />
              <Button
                className="age-confirm"
                type="submit"
                disabled={!age || Number(age) < 1 || Number(age) > 120}
              >
                Confirm age
              </Button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {(gameStage === "character" || gameStage === "profile") && (
          <motion.section
            key={gameStage}
            className={`age-gate profile-gate${gameStage === "character" ? " character-gate" : ""}`}
            aria-labelledby={gameStage === "character" ? "character-title" : "profile-title"}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.35 }}
          >
            {gameStage === "character" ? (
              <>
                <ScenicBackdrop
                  image={bridge}
                  portrait={bridgePhone}
                  alt="The Lagos lagoon bridge at sunset"
                />
                <Suspense
                  fallback={
                    <div className="character-scene-preview character-scene-preview-status">
                      <span className="character-model-status" role="status" aria-live="polite">
                        <span className="character-model-spinner" aria-hidden="true" />
                        <span>Loading character…</span>
                      </span>
                    </div>
                  }
                >
                  <CharacterPreview
                    className="character-scene-preview"
                    modelPath={selectedCharacter === "female" ? "/model1.glb" : "/model.glb"}
                  />
                </Suspense>
                <div className="character-scene-shade" aria-hidden="true" />
                <div className="character-select-ui">
                  <div className="character-select-heading">
                    <p className="credits-kicker">MAKE IT YOURS</p>
                    <h2 id="character-title">Choose your character</h2>
                    <p className="age-gate-copy">Pick who you want to be in Lagos World.</p>
                  </div>
                  <div
                    className="character-options"
                    role="group"
                    aria-label="Choose your character"
                  >
                    <button
                      className={`character-option${selectedCharacter === "male" ? " character-option-selected" : ""}`}
                      type="button"
                      aria-pressed={selectedCharacter === "male"}
                      onClick={() => setSelectedCharacter("male")}
                    >
                      <span className="character-option-name">Male</span>
                    </button>
                    <button
                      className={`character-option${selectedCharacter === "female" ? " character-option-selected" : ""}`}
                      type="button"
                      aria-pressed={selectedCharacter === "female"}
                      onClick={() => setSelectedCharacter("female")}
                    >
                      <span className="character-option-name">Female</span>
                    </button>
                  </div>
                  <Button
                    className="age-confirm character-continue"
                    type="button"
                    disabled={!selectedCharacter}
                    onClick={() => setGameStage("profile")}
                  >
                    Continue <ArrowRight aria-hidden="true" />
                  </Button>
                </div>
              </>
            ) : (
              <>
                <ScenicBackdrop
                  image={couple}
                  portrait={couplePhone}
                  alt="The Lagos lagoon bridge at sunset"
                />
                <div className="profile-panel">
                  {gameStage === "profile" && (
                    <>
                      <p className="credits-kicker">YOUR STORY STARTS HERE</p>
                      <h2 id="profile-title">Create your profile</h2>
                      <p className="age-gate-copy">
                        Add your details and get ready to enter Lagos World.
                      </p>
                      <form className="profile-form" onSubmit={createProfile}>
                        <p className="profile-selected-character">
                          Character:{" "}
                          <strong>{selectedCharacter === "female" ? "Female" : "Male"}</strong>
                        </p>
                        <label className="sr-only" htmlFor="profile-name">
                          Name
                        </label>
                        <input
                          id="profile-name"
                          name="name"
                          autoComplete="name"
                          placeholder="Name"
                          value={profile.name}
                          onChange={(event) => setProfile({ ...profile, name: event.target.value })}
                          required
                        />
                        <label className="sr-only" htmlFor="profile-username">
                          Username
                        </label>
                        <input
                          id="profile-username"
                          name="username"
                          autoComplete="username"
                          placeholder="Username"
                          value={profile.username}
                          onChange={(event) =>
                            setProfile({ ...profile, username: event.target.value })
                          }
                          required
                        />
                        <label className="sr-only" htmlFor="profile-password">
                          Password
                        </label>
                        <input
                          id="profile-password"
                          name="password"
                          type="password"
                          autoComplete="new-password"
                          placeholder="Password"
                          value={profile.password}
                          onChange={(event) =>
                            setProfile({ ...profile, password: event.target.value })
                          }
                          required
                        />
                        <label className="sr-only" htmlFor="profile-state">
                          State
                        </label>
                        <input
                          id="profile-state"
                          name="state"
                          autoComplete="address-level1"
                          placeholder="State"
                          value={profile.state}
                          onChange={(event) =>
                            setProfile({ ...profile, state: event.target.value })
                          }
                          required
                        />
                        <p className="profile-privacy-note">
                          Preview only: details aren’t sent or saved, and your password is
                          discarded.
                        </p>
                        <Button className="age-confirm" type="submit">
                          Discover my life <ArrowRight aria-hidden="true" />
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </>
            )}
          </motion.section>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {gameStage === "world" && (
          <motion.div
            className="game-world-transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1 }}
          >
            <Suspense
              fallback={
                <div className="game-world-loading-fallback" role="status">
                  <span className="game-spinner" />
                  <span>The clouds are parting…</span>
                </div>
              }
            >
              <GameWorld character={selectedCharacter ?? "male"} playerName={profile.name} />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
      {!splash && !complete && (
        <div className="loading-center" role="status" aria-label="Loading Lagos World">
          <span className="game-spinner" />
          <span className="loading-text">LOADING</span>
        </div>
      )}
    </main>
  );
}
