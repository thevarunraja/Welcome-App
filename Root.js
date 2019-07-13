import React from "react";
import { View, Text } from "react-native";
import * as Font from "expo-font";

import { useRootContext } from "./RootContext";
import Board from "./components/Board";

export default function Root() {
  const { fontLoaded, setFontLoadedTrue } = useRootContext();

  React.useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        OpenSans400: require(`./assets/fonts/OpenSans/OpenSans-Regular.ttf`)
      });
      setFontLoadedTrue();
    }
    loadFonts();
  }, []);

  return <View style={{ flex: 1 }}>{fontLoaded && <Board />}</View>;
}
