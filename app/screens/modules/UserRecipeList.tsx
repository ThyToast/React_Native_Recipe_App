import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import UserRecipeItem from "./UserRecipeItem";

const UserRecipeList = () => {
  return (
    <View>
      {/* <FlatList
        data={recipes}
        keyExtractor={(recipes) => recipes.id}
        renderItem={({ item }) => {
          return (
            <>
              <UserRecipeItem />
            </>
          );
        }}
        showsVerticalScrollIndicator={false}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default UserRecipeList;
