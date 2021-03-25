import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

import { storeRecipe, getStoredRecipe } from "../model/asyncRecipe";
import { Context } from "../context/recipeContext";
import RecipeListModule from "./modules/RecipeListModule";

const BrowseScreen = ({ navigation }: any) => {
  const { state, getRandomRecipes }: any = useContext(Context);
  const [recipe, setRecipe] = useState({});

  let item = 15;

  useEffect(() => {
    getRandomRecipes(item);

    //loads new data on page focus
    // navigation.addListener("focus", () => {
    //   getRandomRecipes(item);
    // });
  }, []);

  const retrieveRecipe = async () => {
    try {
      let storedRecipe: any = await getStoredRecipe("random_recipes");
      setRecipe(storedRecipe);
    } catch (e) {
      console.log(`error displaying: ${e.message}`);
    }
  };

  useEffect(() => {
    if (state.recipes) {
      storeRecipe(state.recipes, "random_recipes");
    }
    retrieveRecipe();
  }, [state]);

  return (
    <View>
      <Text h2 style={styles.text}>
        Browse
      </Text>

      <RecipeListModule results={recipe} />
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
