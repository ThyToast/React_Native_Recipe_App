import React, { useState } from "react";
import { StyleSheet, View, Image, Keyboard, Alert } from "react-native";
import { Text, Input, Icon, Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { launchImageLibrary } from "react-native-image-picker";
import { useDatabase } from "@nozbe/watermelondb/hooks";

const AddRecipe = ({ navigation }: any) => {
  const [image, setImage] = useState<any>();
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instruction, setInstruction] = useState("");

  const database = useDatabase();

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

  async function addRecipe() {
    await database.action(async () => {
      const recipes = database.collections.get("recipes");

      return await recipes.create((recipes) => {
        recipes.title = title;
        recipes.image = image;
        recipes.instruction = instruction;
        recipes.ingredients = ingredients;
      });
    });

    Keyboard.dismiss();
    navigation.goBack();
  }

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
              onChangeText={(input) => setInstruction(input)}
            />
          </View>

          <Button
            title="Add Recipe"
            buttonStyle={styles.button}
            containerStyle={{ paddingHorizontal: 20 }}
            titleStyle={{ padding: 10, flex: 1 }}
            onPress={() => {
              if (!title || !image || !instruction || !ingredients) {
                Alert.alert("Please ensure that all fields are filled");
              } else {
                console.log("All fields are filled");
                addRecipe();
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
