import React from "react";
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from "react-native";

import { useRootContext } from "../../RootContext";
import { fonts } from "../../constants";

export default function Index() {
  const { setShowModal, line1Text, line2Text, boardImage, boardFont } = useRootContext();
  const font = fonts.find(o => o.value === boardFont);

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={() => {
        setShowModal(true);
      }}>
      <View style={styles.container}>
        <React.Fragment>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={{ fontSize: 200, fontFamily: `${font.data}400` }}>
            {line1Text === "" ? "Click to customize" : line1Text}
          </Text>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={{
              fontSize: 70,
              fontFamily: `${font.data}400`,
              letterSpacing: 1,
            }}>
            {line2Text}
          </Text>
          {boardImage && (
            <View style={{ position: `absolute`, bottom: 0, right: 0 }}>
              <Image
                source={require("../../assets/images/flowers.png")}
                style={{ width: 220, height: 280 }}
              />
            </View>
          )}
        </React.Fragment>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`,
    paddingLeft: 40,
    paddingRight: 40,
  },
});
