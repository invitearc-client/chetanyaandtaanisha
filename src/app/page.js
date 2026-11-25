
"use client";

import { useEffect, useState, useRef } from "react";
import HeroSection from "./components/HeroSection";
import IntroVideo from "./components/IntroVideo";
export default function Home() {
  const audioRef = useRef(null);
  const startedRef = useRef(false);
  const currentSideRef = useRef(null);

  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const playAudio = async (audio) => {
    if (!audio) return;

    try {
      audio.volume = 0.3;
      await audio.play();
      startedRef.current = true;
      setStarted(true);
      setPlaying(true);
    } catch (err) {
      console.log("Audio play failed:", err);
      setPlaying(false);
    }
  };

  const startMusic = async () => {
    const audio = audioRef.current;

    if (!audio || startedRef.current) return;

    currentSideRef.current = null;
    await playAudio(audio);
  };

  const changeSong = async (side) => {
    const audio = audioRef.current;
    if (!audio) return;

    const nextSrc =
      side === "ladke"
        ? "/assets/ladka.mp3"
        : side === "ladki"
        ? "/assets/ladki.mp3"
        : "/assets/song.mp3";

    // Same side: don't restart the song
    if (currentSideRef.current === side) return;

    currentSideRef.current = side;
    startedRef.current = true;
    setStarted(true);

    audio.pause();
    audio.src = nextSrc;
    audio.load();

    audio.oncanplay = async () => {
      audio.oncanplay = null;
      await playAudio(audio);
    };
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      await playAudio(audio);
    }
  };

  useEffect(() => {
    const handler = (event) => {
      if (event.target instanceof Element &&
          event.target.closest("[data-side-song]")) {
        return;
      }

      startMusic();
    };

    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleMusic();
        }}
        className="fixed top-4 right-4 z-50 bg-[#B35800] text-white px-3 py-2 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio
        ref={audioRef}
        src="/assets/song.mp3"
        loop
        preload="auto"
        playsInline
      />
<IntroVideo onFinish={() => setIntroDone(true)} />
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <HeroSection onSideChange={changeSong} />
      </div>
    </>
  );
}
