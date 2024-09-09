import React from "react";
import { Text, View, StatusBar, Dimensions } from "react-native";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  const { height, width } = Dimensions.get("window");

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#202024",
        height: height,
        width: width,
      }}
    >
      <StatusBar backgroundColor="transparent" translucent />
      {fontsLoaded ? (
        <Text style={{ color: "#fff" }}>Olá SKD51</Text>
      ) : (
        <View />
      )}
    </SafeAreaView>
  );
}
