import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function GameScreen() {
  return (
    <View>
      <Text style={{ color: "white", fontSize: 20 }}>GameScreen</Text>
      <Link href="/" style={{ color: "white", fontSize: 20 }}>
        GO HOME
      </Link>
    </View>
  );
}
