import React, { useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Button, Icon, Input, Text } from "react-native-elements";
import { launchImageLibrary } from "react-native-image-picker";
import { editRecipe } from "../model/schema";

const EditRecipe = ({ navigation, route }: any) => {
  const [image, setImage] = useState<any>();
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const { oldRecipe } = route.params;

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

  const storeRecipe = () => {
    try {
      const newRecipe = {
        title,
        image: image.uri,
        instructions,
        ingredients,
      };
      editRecipe(newRecipe, oldRecipe._id);
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
            Edit Recipe
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
              defaultValue={oldRecipe.title}
            />
            <Input
              placeholder="Enter recipe ingredients"
              multiline={true}
              onChangeText={(input) => setIngredients(input)}
              defaultValue={oldRecipe.ingredients}
            />
            <Input
              placeholder="Enter recipe steps"
              multiline={true}
              onChangeText={(input) => setInstructions(input)}
              defaultValue={oldRecipe.instructions}
            />
          </View>

          <Button
            title="Update Recipe"
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

export default EditRecipe;
