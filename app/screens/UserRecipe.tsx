import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Text } from "react-native-elements";
import UserRecipeList from "./modules/UserRecipeList";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserRecipe = ({ navigation }: any) => {
  const [recipe, setRecipe] = useState<any>();

  const getData = () => {
    try {
      AsyncStorage.getItem("user_recipes").then((recipes: any) => {
        const recipe = JSON.parse(recipes);
        setRecipe(recipe);
      });
    } catch (e) {
      console.log("error getting recipes");
    }
  };

  useEffect(() => {
    getData();

    navigation.addListener("focus", () => {
      getData();
    });

    return () => {
      getData();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text h2 style={styles.text}>
        User
      </Text>
      <UserRecipeList recipes={recipe} />
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
