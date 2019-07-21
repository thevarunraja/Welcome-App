/**
 * FIXME: MVP - Welcomeboard App
 *
 *  1. Add Splash screen.
 *  2. Add Icon
 *  3. Add different fonts. - [fixed partially]
 *  4. Keep Awake - [fixed]
 *  5. Figure out a way to "Get Dimensions" of the device.
 *  6. different layouts.[Select a template or start from a blank template] - [on hold]
 *  7. Routing. [on hold]
 *  8. Analytics - AWS? [on hold]
 *
 */

import React from "react";
import { SafeAreaView } from "react-native";
import { useKeepAwake } from "expo-keep-awake";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";

import { RootProvider } from "./RootContext";
import Root from "./Root";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,

    primary: `#c03`,
  },
};

export default function App() {
  useKeepAwake();

  return (
    <RootProvider>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Root />
        </SafeAreaView>
      </PaperProvider>
    </RootProvider>
  );
}
