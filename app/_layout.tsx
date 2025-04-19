import { Slot } from "expo-router";
import { StatusBar, View } from "react-native";
import { TareasProvider } from "../contexts/TareasContext";

export default function Layout() {
  return (
    <TareasProvider>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" backgroundColor="black" />
        <Slot />
      </View>
    </TareasProvider>
  );
}
