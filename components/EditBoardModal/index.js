import React from "react";
import {
  Modal,
  View,
  SafeAreaView,
  Linking,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Surface, Text, Headline, Switch, Button } from "react-native-paper";
import { Dropdown } from "react-native-material-dropdown";
import { TextField } from "react-native-material-textfield";

import { useRootContext } from "../../RootContext";
import { fonts } from "../../constants";

export default function Index() {
  const {
    showModal,
    setShowModal,
    line1Text,
    setLine1Text,
    line2Text,
    setLine2Text,
    boardFont,
    setBoardFont,
    boardImage,
    toggleBoardImage,
  } = useRootContext();

  return (
    <Modal
      animationType="slide"
      transparent
      visible={showModal}
      supportedOrientations={["portrait", "landscape"]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView
          style={{
            flex: 1,
            marginRight: 20,
            alignItems: "flex-end",
          }}>
          <Surface
            style={{
              backgroundColor: `#fafafa`,
              width: 400,
              height: 500,
              alignContent: "flex-end",
              borderRadius: `14px`,
              elevation: 2,
              marginTop: 22,
            }}>
            <View style={{ padding: 20 }}>
              <Headline style={{ fontFamily: "OpenSans400", fontSize: 18 }}>
                Edit your text
              </Headline>
              <TextField
                label="First Line Text"
                value={line1Text}
                onChangeText={text => {
                  setLine1Text(text);
                }}
                baseColor={"#106ebe"}
                fontSize={18}
                labelFontSize={16}
                style={{
                  fontFamily: "OpenSans400",
                }}
              />
              <TextField
                label="Second Line Text"
                value={line2Text}
                baseColor={"#106ebe"}
                onChangeText={text => {
                  setLine2Text(text);
                }}
                fontSize={18}
                labelFontSize={16}
                style={{
                  fontFamily: "OpenSans400",
                }}
              />
              <Dropdown
                label="Select Font"
                data={fonts}
                fontSize={18}
                labelFontSize={16}
                baseColor={"#106ebe"}
                style={{
                  fontFamily: "OpenSans400",
                }}
                value={boardFont}
                onChangeText={value => {
                  setBoardFont(value);
                }}
              />
              <View
                style={{
                  flexDirection: `row`,
                  marginTop: 25,
                }}>
                <Text
                  style={{
                    fontFamily: "OpenSans400",
                    fontSize: 18,
                  }}>
                  Display image
                </Text>
                <Switch
                  style={{ marginLeft: 20 }}
                  color={"#106ebe"}
                  value={boardImage}
                  onValueChange={() => {
                    toggleBoardImage(!boardImage);
                  }}
                />
              </View>
              <Button
                mode="contained"
                color="#106ebe"
                onPress={() => setShowModal(false)}
                contentStyle={{
                  height: 40,
                }}
                style={{ marginTop: 20, width: 150 }}>
                <Text style={{ fontSize: 18, color: `#fff` }}>Close</Text>
              </Button>
              <Text style={{ fontSize: 16, marginTop: 10, fontFamily: "OpenSans400" }}>
                *Open this window again by clicking anywhere on the screen
              </Text>
              <Text style={{ fontSize: 16, marginTop: 10, fontFamily: "OpenSans400" }}>
                *Request a new feature{" "}
                <Text
                  style={{ fontFamily: "OpenSans400", color: "#106ebe" }}
                  onPress={() => {
                    Linking.openURL(`https://www.thevarunraja.com/contact`);
                  }}>
                  Click Here
                </Text>
              </Text>
            </View>
          </Surface>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
