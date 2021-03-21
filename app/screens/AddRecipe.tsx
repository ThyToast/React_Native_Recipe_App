import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Platform, Alert } from "react-native";
import { Text, Input, Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { launchImageLibrary } from "react-native-image-picker";

const AddRecipe = () => {
  const [image, setImage] = useState<any>();

  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== "web") {
  //       const {
  //         status,
  //       } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       if (status !== "granted") {
  //         Alert.alert(
  //           "Sorry, we need camera roll permissions to make this work!"
  //         );
  //       }
  //     }
  //   })();
  // }, []);

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
            <Input placeholder="Enter recipe name" />
            <Input placeholder="Enter recipe ingredients" multiline={true} />
            <Input placeholder="Enter recipe steps" multiline={true} />
          </View>
        </View>
      </ScrollView>

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
