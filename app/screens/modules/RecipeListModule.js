import React from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "react-native-elements";
import RecipeItemListModule from "./RecipeItemListModule";

const RecipeListModule = ({ results }) => {
  const navigation = useNavigation();

  if (!results) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={results}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate("Detail", { id: item.id })}
              >
                <RecipeItemListModule result={item} />
              </TouchableOpacity>

              <Divider
                style={{
                  backgroundColor: "lightgray",
                  height: 2,
                  marginVertical: 25,
                }}
              />
            </>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
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

export default RecipeListModule;
