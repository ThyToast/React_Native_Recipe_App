import React, { useCallback } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const UserRecipeItem = ({ recipes }: any) => {
  console.log("recipes");
  return (
    <View>
      <Image
        source={{ uri: recipes.image.uri }}
        style={{ width: "100%", height: 250 }}
      />
      <Text>{recipes.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UserRecipeItem;
