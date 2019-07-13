<Modal
  animationType="slide"
  transparent={true}
  visible={true}
  onRequestClose={() => {
    Alert.alert("Modal has been closed.");
  }}
  supportedOrientations={["portrait", "landscape"]}
>
  <SafeAreaView
    style={{
      flex: 1,
      marginRight: 20,
      // justifyContent: "center",
      alignItems: "flex-end"
    }}
  >
    <View
      style={{
        marginTop: 22,
        backgroundColor: `#f8f8f8`,
        width: 400,
        height: 400,
        alignContent: "flex-end",
        borderRadius: `30%`,
        shadowColor: "#f8f9fa",
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 1
      }}
    >
      <View style={{ padding: 20 }}>
        <FAB
          icon="close"
          small
          style={{
            width: 40,
            height: 40,
            margin: 16,
            right: 0
          }}
          onPress={() => console.log("Pressed")}
        />
        <Headline>Edit your text</Headline>
      </View>
    </View>
  </SafeAreaView>
</Modal>;
