import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context } from "../context/recipeContext";

const DetailedRecipeScreen = ({ route, navigation }: any) => {
  const { state, getDetailedRecipes }: any = useContext(Context);

  const { id } = route.params;

  useEffect(() => {
    getDetailedRecipes(id);

    //loads data on page focus

    navigation.addListener("focus", () => {
      getDetailedRecipes(id);
      console.log(state);
    });

    //clears the listener when user switches screens
    //like rxjava
    return () => {
      getDetailedRecipes(id);
    };
  }, []);

  return (
    <View>
      <Text>Detailed recipes</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailedRecipeScreen;
