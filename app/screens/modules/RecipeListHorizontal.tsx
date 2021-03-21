import React from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RecipeItemHorizontal from "./RecipeItemHorizontal";

const RecipeListHorizontal = ({ results }: any) => {
  const navigation = useNavigation();

  if (!results) {
    return null;
  }

  return (
    <FlatList
      style={styles.flatlist}
      data={results}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <>
            <TouchableOpacity
              onPress={() => navigation.navigate("Detail", { id: item.id })}
            >
              <RecipeItemHorizontal result={item} isVertical={false} />
            </TouchableOpacity>
          </>
        );
      }}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: "30%",
  },
  flatlist: {
    paddingTop: 15,
  },
});

export default RecipeListHorizontal;
