import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Text } from "react-native-elements";

const UserRecipe = () => {
  return (
    <View style={styles.container}>
      <Text h2 style={styles.text}>
        User
      </Text>
      <Icon
        raised
        name="add"
        type="material"
        containerStyle={styles.button}
        color="darkorange"
        onPress={() => console.log("hello")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  button: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  text: {
    padding: 10,
    paddingBottom: 10,
  },
});

export default UserRecipe;
