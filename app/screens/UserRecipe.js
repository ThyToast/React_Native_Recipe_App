import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Text } from "react-native-elements";

const UserRecipe = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text h2 style={styles.text}>
        User
      </Text>
      <Text style={styles.noRecipe}>No recipes found</Text>
      <Icon
        raised
        name="add"
        type="material"
        containerStyle={styles.button}
        color="darkorange"
        onPress={() => navigation.navigate("AddStack")}
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
  noRecipe: {
    alignSelf: "center",
    top: "30%",
  },
});

export default UserRecipe;
