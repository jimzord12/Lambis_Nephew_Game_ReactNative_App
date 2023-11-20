import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, ImageBackground, TouchableOpacity } from "react-native";
import useSoundtrack from "../hooks/useSoundtrack";

export default function MainMenu() {
  const [isPlayingSound, setIsPlayingSound] = React.useState(false);
  const router = useRouter();
  const onPressPlay = async () => {
    // Handle the button press
    console.log("[PLAY] Button was pressed!");
    setIsPlayingSound(true)
    await play();

    router.push("/game");
  };

  const onPressStats = async () => {
    // Handle the button press
    console.log("[STATS] Button was pressed!");
    setIsPlayingSound(false)

    await stop();

    router.push("/stats");
  };

  const { play, stop, isPlaying } = useSoundtrack(); // Use the hook with the path to your audio file
  useEffect(() => {
    console.log("AAAAAAAAAAAAAA");
    const checkIfPlaying = async () => {
      const playing = await isPlaying();
      console.log("Is the sound playing?", playing);
    };

    checkIfPlaying();
  }, [isPlayingSound]);

  return (
    <ImageBackground
      source={require("../assets/images/gameAppBG.gif")}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 60,
      }}
    >
      {/* <Text style={{ color: "white" }}>MainMenu</Text> */}
      <TouchableOpacity onPress={onPressPlay}>
        <Image
          source={require("../assets/images/playButton.png")}
          style={{ width: 400, height: 150, objectFit: "contain" }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressStats}>
        <Image
          source={require("../assets/images/statsButton.png")}
          style={{ width: 400, height: 150, objectFit: "contain" }}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
}
