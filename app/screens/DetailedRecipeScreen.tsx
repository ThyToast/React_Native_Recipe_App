import React, { useContext, useEffect, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { Icon, Text, Overlay, Button } from "react-native-elements";

import IngredientList from "./modules/IngredientList";
import { Context } from "../context/recipeContext";
import { deleteRecipe } from "../model/schema";

const DetailedRecipeScreen = ({ route, navigation }: any) => {
  const { state, getDetailedRecipes }: any = useContext(Context);
  const { id } = route.params;
  const { recipes } = route.params;
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const removeRecipes = (id: any) => {
    try {
      deleteRecipe(id);
      console.log(id);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  if (id) {
    useEffect(() => {
      getDetailedRecipes(id);
    }, [id]);

    //for API request recipes
    return (
      <View>
        <ScrollView>
          <ImageBackground
            style={styles.image}
            imageStyle={styles.roundedCorners}
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
    console.log(recipes);
    //for user recipes

    return (
      <View>
        <ScrollView>
          <ImageBackground
            style={styles.image}
            imageStyle={styles.roundedCorners}
            source={{ uri: recipes.image }}
          >
            <LinearGradient
              //adds a transparent gradient on top of source image
              colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 32)"]}
              style={styles.linearGradient}
            />
            <View style={styles.iconContainer}>
              <Icon
                reverse
                name="delete"
                type="material"
                color="darkorange"
                onPress={toggleOverlay}
              />
              <Icon
                reverse
                name="edit"
                type="material"
                color="darkorange"
                onPress={() => {
                  navigation.navigate("EditStack", { oldRecipe: recipes });
                }}
              />
            </View>

            <Text style={styles.name}>{recipes.title}</Text>
          </ImageBackground>
          <Text
            style={styles.text}
          >{`Ingredients: \n${recipes.ingredients}`}</Text>
          <Text
            style={styles.text}
          >{`Instructions: \n${recipes.instructions}`}</Text>
        </ScrollView>

        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
          <Text
            style={styles.message}
          >{`Confirm deleting recipe '${recipes.title}'?`}</Text>
          <View style={styles.buttonContainer}>
            <Button
              buttonStyle={styles.button}
              title="Confirm"
              onPress={() => {
                removeRecipes(recipes._id);
              }}
            />
            <Button
              buttonStyle={styles.button}
              title="Cancel"
              onPress={toggleOverlay}
            />
          </View>
        </Overlay>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
    top: -20,
  },
  roundedCorners: {
    borderRadius: 25,
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
  iconContainer: {
    alignItems: "flex-end",
    top: 30,
  },
  message: {
    fontSize: 18,
    padding: 10,
  },
  button: {
    height: 50,
    margin: 20,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
});

export default DetailedRecipeScreen;
