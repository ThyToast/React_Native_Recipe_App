import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
// import LinearGradient from 'react-native-linear-gradient';
// to be used if React Native CLI is used instead of Expo

const RecipeItemListHorizontal = ({ result }: any) => {
  return (
    <View style={styles.horizontalContainer}>
      <ImageBackground
        style={styles.imageHorizontal}
        imageStyle={{ borderRadius: 15 }}
        source={{ uri: result.image }}
      >
        <LinearGradient
          //adds a transparent gradient on top of source image
          colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]}
          style={styles.linearGradient}
        />

        <Text style={styles.name}>{result.title}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalContainer: {
    alignItems: "center",
    marginLeft: 10,
  },
  imageHorizontal: { width: 400, height: 200, marginRight: 20 },
  name: {
    fontWeight: "bold",
    fontSize: 18,
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
});

export default RecipeItemListHorizontal;
