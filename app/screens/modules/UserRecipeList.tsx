import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const UserRecipeList = ({ recipes }: any) => {
  if (!recipes) {
    return null;
  }
  return (
    <FlatList
      style={styles.spacing}
      data={recipes}
      keyExtractor={(recipes) => recipes._id}
      renderItem={({ item }) => {
        return (
          <View style={styles.container}>
            <ImageBackground
              style={styles.image}
              imageStyle={{ width: "100%", borderRadius: 15 }}
              source={{ uri: item.image }}
            >
              <LinearGradient
                //adds a transparent gradient on top of source image
                colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 32)"]}
                style={styles.linearGradient}
              />

              <Text style={styles.name}>{item.title}</Text>
            </ImageBackground>
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  spacing: {
    paddingBottom: "30%",
  },
  container: {
    alignItems: "center",
    paddingTop: 15,
  },
  image: {
    width: "90%",
    height: 250,
  },
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

export default UserRecipeList;
