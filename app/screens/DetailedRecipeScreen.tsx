import React, { useContext, useEffect } from "react";
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import { Context } from "../context/recipeContext";
import IngredientList from "./modules/IngredientList";

const DetailedRecipeScreen = ({ route, navigation }: any) => {
  const { state, getDetailedRecipes }: any = useContext(Context);
  const { id } = route.params;
  const { recipes } = route.params;

  if (id) {
    useEffect(() => {
      getDetailedRecipes(id);

      navigation.addListener("focus", () => {
        getDetailedRecipes(id);
      });

      return () => {
        getDetailedRecipes(id);
      };
    }, [id]);

    //for API request recipes
    return (
      <View>
        <ScrollView>
          <ImageBackground
            style={styles.image}
            imageStyle={{ width: "100%", borderRadius: 15 }}
            source={{ uri: state.image }}
          >
            <LinearGradient
              //adds a transparent gradient on top of source image
              colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 32)"]}
              style={styles.linearGradient}
            />
            <Text style={styles.name}>{state.title}</Text>
          </ImageBackground>

          <Text style={styles.text}>Ingredients: </Text>
          <IngredientList ingredient={state.extendedIngredients} />
          <Text style={styles.text}>{state.instructions}</Text>
        </ScrollView>
      </View>
    );
  } else if (recipes) {
    //for user recipes
    return (
      <View>
        <ScrollView>
          <ImageBackground
            style={styles.image}
            imageStyle={{ width: "100%", borderRadius: 15 }}
            source={{ uri: recipes.image }}
          >
            <LinearGradient
              //adds a transparent gradient on top of source image
              colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 32)"]}
              style={styles.linearGradient}
            />
            <Text style={styles.name}>{recipes.title}</Text>
          </ImageBackground>
          <Text style={styles.text}>{recipes.ingredients}</Text>
          <Text style={styles.text}>{recipes.instructions}</Text>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  name: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
    marginHorizontal: 30,
    paddingBottom: 15,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  linearGradient: {
    backgroundColor: "transparent",
    position: "absolute",
    borderRadius: 15,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  text: {
    fontSize: 18,
    padding: 10,
    paddingVertical: 20,
  },
});

export default DetailedRecipeScreen;
