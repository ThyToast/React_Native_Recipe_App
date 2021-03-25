import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import UserRecipeList from "./modules/UserRecipeList";
import { Icon, Text } from "react-native-elements";
import { displayAllRecipes } from "../model/schema";

const UserRecipe = ({ navigation }: any) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    reloadData();

    navigation.addListener("focus", () => {
      reloadData();
    });

    return () => {
      reloadData();
    };
  }, []);

  const reloadData = () => {
    try {
      displayAllRecipes().then((recipeList: any) => {
        setRecipes(recipeList);
        console.log("Displaying recipes");
      });
    } catch (error) {
      console.log("No recipes found");
    }
  };

  return (
    <View style={styles.container}>
      <Text h2 style={styles.text}>
        User Recipes
      </Text>
      <UserRecipeList recipes={recipes} navigation={navigation} />

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
    marginLeft: 10,
  },
  noRecipe: {
    alignSelf: "center",
    top: "30%",
  },
});

export default UserRecipe;
