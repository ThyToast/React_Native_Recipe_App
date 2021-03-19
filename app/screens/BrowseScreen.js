import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { Context } from "../context/recipeContext";

const BrowseScreen = () => {
  const { state, getRecipes } = useContext(Context);

  return (
    <View>
      <Text h2 style={styles.text}>
        Browse
      </Text>
    </View>
  );
};

export default BrowseScreen;

const styles = StyleSheet.create({
  text: {
    padding: 10,
    paddingBottom: 10,
  },
});
