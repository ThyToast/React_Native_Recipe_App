import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { Context } from "../context/recipeContext";
import RecipeListHorizontal from "./modules/RecipeListHorizontal";

const BrowseScreen = () => {
  const { state, getRandomRecipes }: any = useContext(Context);
  let item = 15;

  // prevent API quota from running out
  // useEffect(() => {
  //   getRandomRecipes(item);

  //   //loads new data on page focus

  //   // navigation.addListener("focus", () => {
  //   //   getRandomRecipes(item);
  //   //   console.log(state.recipes);
  //   // });

  //   //clears the listener when user switches screens
  //   //like rxjava
  //   return () => {
  //     getRandomRecipes(item);
  //   };
  // }, []);

  return (
    <View>
      <Text h2 style={styles.text}>
        Browse
      </Text>

      <RecipeListHorizontal results={state.recipes} />
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
