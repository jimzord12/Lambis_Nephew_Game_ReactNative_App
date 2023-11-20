import { Audio } from "expo-av";
import { useEffect, useState } from "react";

// Define a type for the Sound object
type SoundType = Audio.Sound | null;

// Hook to play a soundtrack
const useSoundtrack = () => {
  const [sound, setSound] = useState<SoundType>();

  // Function to check if the sound is playing
  const isPlaying = async () => {
    if (sound) {
      const status = await sound.getStatusAsync();
      // Check if the status has the `isPlaying` property and return it
      return "isPlaying" in status && status.isPlaying;
    }
    return false;
  };

  useEffect(() => {
    let isCancelled = false;

    const loadAndPlay = async () => {
      try {
        // Make sure to unload any sound that might be loaded already
        if (sound) {
          await sound.unloadAsync();
        }

        // Load the sound
        const { sound: newSound } = await Audio.Sound.createAsync(
          // Make sure to use require for local files
          require("../assets/sound/Initial_D_Deja_Vu.mp3"),
          { shouldPlay: true, isLooping: true, volume: 0.8 }
        );

        // Only set the sound if we haven't been cancelled
        if (!isCancelled) {
          setSound(newSound);
        }
      } catch (e) {
        console.error("There was an error loading the sound", e);
      }
    };

    loadAndPlay();

    // Cleanup
    return () => {
      isCancelled = true;
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);
  // Expose sound control methods if needed
  return {
    play: async () => {
      if (sound) {
        await sound.playAsync();
      }
    },
    pause: async () => {
      if (sound) {
        await sound.pauseAsync();
      }
    },
    stop: async () => {
      if (sound) {
        await sound.stopAsync();
      }
    },
    unload: async () => {
      if (sound) {
        await sound.unloadAsync();
        setSound(undefined);
      }
    },
    isPlaying,
  };
};

export default useSoundtrack;
