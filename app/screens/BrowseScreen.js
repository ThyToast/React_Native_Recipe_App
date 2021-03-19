import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { Context } from "../context/recipeContext";
import RecipeListModule from "./modules/RecipeListModule";

const BrowseScreen = ({ navigation }) => {
  const { state, getRandomRecipes } = useContext(Context);
  let item = 15;

  useEffect(() => {
    getRandomRecipes(item);

    navigation.addListener("focus", () => {
      getRandomRecipes(item);
      console.log(state.recipes);
    });

    //clears the listener when user switches screens
    //like rxjava
    return () => {
      getRandomRecipes(item);
    };
  }, []);

  return (
    <View>
      <Text h2 style={styles.text}>
        Browse
      </Text>

      <RecipeListModule results={state.recipes} />
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
