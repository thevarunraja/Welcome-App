import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Font from "expo-font";

import { useRootContext } from "../../RootContext";

// FIXME: render conditionally

export default function Index() {
  return (
    <View style={styles.container}>
      <React.Fragment>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={{ fontSize: 180, fontFamily: `OpenSans400` }}
        >
          Sundar Pichai
        </Text>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={{
            fontSize: 70,
            fontFamily: `OpenSans400`,
            letterSpacing: 1
          }}
        >
          Google Inc.
        </Text>
        <View style={{ position: `absolute`, bottom: 0, right: 0 }}>
          <Image
            source={require("../../assets/images/flowers.png")}
            style={{ width: 220, height: 280 }}
          />
        </View>
      </React.Fragment>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`,
    paddingLeft: 40,
    paddingRight: 40
  }
});
