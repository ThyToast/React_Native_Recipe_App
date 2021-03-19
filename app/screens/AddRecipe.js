import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text, Input, Icon } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
//react-native-image-picker if not using expo

const AddRecipe = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text h2 style={styles.text}>
        Add Recipe
      </Text>

      <Image source={{ uri: image }} style={{ width: "100%", height: 250 }} />

      <View style={styles.inputContainer}>
        <Input placeholder="Enter recipe name" />
        <Input placeholder="Enter recipe ingredients" multiline={true} />
        <Input placeholder="Enter recipe steps" multiline={true} />
      </View>

      <Icon
        raised
        containerStyle={styles.button}
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
  button: {
    alignSelf: "flex-end",
    bottom: 20,
    right: 20,
  },
});

export default AddRecipe;
