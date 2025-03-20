import React, { useState, useEffect } from "react";
import introSound from "@/public/sounds/night_intro.wav";
import repeatSound from "@/public/sounds/night_loop.wav";
import { Howl, Howler } from "howler";

function BackgroundNightSound(props) {
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const introAudio = new Howl({
      src: [introSound],
      onend: () => {
        setShouldPlay(true);
      },
    });

    introAudio.play();

    return () => {
      introAudio.unload();
    };
  }, []);

  useEffect(() => {
    if (shouldPlay) {
      const repeatAudio = new Howl({
        src: [repeatSound],
        loop: true,
      });

      repeatAudio.play();

      return () => {
        repeatAudio.unload();
      };
    }
  }, [shouldPlay]);
  return <div />;
}

export default BackgroundNightSound;
