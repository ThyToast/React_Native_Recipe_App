import React, { useState } from "react";
import { StyleSheet, View, Image, Keyboard, Alert } from "react-native";
import { Text, Input, Icon, Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { launchImageLibrary } from "react-native-image-picker";
import { useId } from "react-id-generator";

import { addNewRecipe } from "../model/schema";

const AddRecipe = ({ navigation }: any) => {
  const [image, setImage] = useState<any>();
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [htmlId] = useId();

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        includeBase64: false,
        maxHeight: 250,
        maxWidth: 400,
      },
      (response) => {
        setImage(response);
      }
    );
  };

  // const storeRecipe = async (recipe: any) => {
  //   try {
  //     const oldRecipe = await AsyncStorage.getItem("user_recipes");
  //     if (oldRecipe != null) {
  //       //append to list
  //       console.log(oldRecipe);
  //     }
  //     const jsonValue = JSON.stringify(recipe);
  //     await AsyncStorage.setItem("user_recipes", jsonValue);
  //   } catch (e) {
  //     console.log("error saving");
  //   }
  // };

  const storeRecipe = () => {
    try {
      const newRecipe = {
        _id: htmlId,
        title,
        image: image.uri,
        instructions,
        ingredients,
      };
      addNewRecipe(newRecipe);
      console.log(`recipe ${title} added`);
      Keyboard.dismiss();
      navigation.goBack();
    } catch (e) {
      console.log(`error saving: ${e.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ marginBottom: 100 }}>
          <Text h2 style={styles.text}>
            Add Recipe
          </Text>

          {image ? (
            <Image
              source={{ uri: image.uri }}
              style={{ width: "100%", height: 250 }}
            />
          ) : null}

          <View style={styles.inputContainer}>
            <Input
              placeholder="Enter recipe name"
              onChangeText={(input) => setTitle(input)}
            />
            <Input
              placeholder="Enter recipe ingredients"
              multiline={true}
              onChangeText={(input) => setIngredients(input)}
            />
            <Input
              placeholder="Enter recipe steps"
              multiline={true}
              onChangeText={(input) => setInstructions(input)}
            />
          </View>

          <Button
            title="Add Recipe"
            buttonStyle={styles.button}
            containerStyle={{ paddingHorizontal: 20 }}
            titleStyle={{ padding: 10, flex: 1 }}
            onPress={() => {
              if (!title || !image || !instructions || !ingredients) {
                Alert.alert("Please ensure that all fields are filled");
              } else {
                console.log("All fields are filled");
                //add recipe goes here
                storeRecipe();
              }
            }}
          />
        </View>
      </ScrollView>

      <Icon
        raised
        containerStyle={styles.upload}
        name="upload"
        type="font-awesome-5"
        onPress={pickImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  text: {
    padding: 10,
    paddingBottom: 10,
  },
  upload: {
    alignSelf: "flex-end",
    bottom: 20,
    right: 20,
  },
  button: {
    height: 35,
  },
});

export default AddRecipe;
