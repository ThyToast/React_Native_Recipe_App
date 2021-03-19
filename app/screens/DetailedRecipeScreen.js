import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DetailedRecipeScreen = ({ route }) => {
  const { id } = route.params;
  console.log(id);

  return (
    <View>
      <Text>Detailed recipes</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailedRecipeScreen;
