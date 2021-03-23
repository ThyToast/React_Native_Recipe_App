import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Image } from "react-native-elements";
import UserRecipeItem from "./UserRecipeItem";

const UserRecipeList = ({ recipes }: any) => {
  if (!recipes) {
    return null;
  }
  return (
    <View>
      <View>
        <Text>{recipes.title}</Text>
      </View>
      {/* <FlatList
        data={recipes}
        keyExtractor={(recipes) => recipes.title}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default UserRecipeList;
