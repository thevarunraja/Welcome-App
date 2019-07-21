import React from "react";
import { View } from "react-native";
import * as Font from "expo-font";

import { useRootContext } from "./RootContext";
import Board from "./components/Board";
import EditBoardModal from "./components/EditBoardModal";

export default function Root() {
  const { fontLoaded, setFontLoadedTrue } = useRootContext();

  React.useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        OpenSans400: require(`./assets/fonts/OpenSans/OpenSans-Regular.ttf`),
      });
      setFontLoadedTrue();
    }
    loadFonts();
    loadAdditionalFonts();
  }, []);

  const loadAdditionalFonts = async () => {
    await Font.loadAsync({
      Montserrat400: require(`./assets/fonts/Montserrat/Montserrat-Regular.ttf`),
    });
    await Font.loadAsync({
      DarkerGrotesque400: require(`./assets/fonts/DarkerGrotesque/DarkerGrotesque-Regular.ttf`),
    });
    await Font.loadAsync({
      Lato400: require(`./assets/fonts/Lato/Lato-Regular.ttf`),
    });
    await Font.loadAsync({
      Nunito400: require(`./assets/fonts/Nunito/Nunito-Regular.ttf`),
    });
    await Font.loadAsync({
      Poppins400: require(`./assets/fonts/Poppins/Poppins-Regular.ttf`),
    });
    await Font.loadAsync({
      PTSans400: require(`./assets/fonts/PTSans/PTSans-Regular.ttf`),
    });
  };

  return (
    <View style={{ flex: 1 }}>
      {fontLoaded && (
        <React.Fragment>
          <Board />
          <EditBoardModal />
        </React.Fragment>
      )}
    </View>
  );
}
