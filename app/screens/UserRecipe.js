import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

const UserRecipe = () => {
  return (
    <View style={styles.container}>
      <Text></Text>
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
});

export default UserRecipe;
