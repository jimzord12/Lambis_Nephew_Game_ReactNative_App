import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function StatsScreen() {
  return (
    <View>
      <Text style={{ color: "white" }}>StatsScreen</Text>
      <Link href="/" style={{ color: "white", fontSize: 20 }}>
        GO HOME
      </Link>
    </View>
  );
}
