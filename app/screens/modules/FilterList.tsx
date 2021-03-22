import React from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";

const FilterList = ({ recipeTypes, callback, refresh }: any) => {
  return (
    <FlatList
      style={styles.flatlist}
      data={recipeTypes.name}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <>
            <TouchableOpacity
              onPress={() => {
                callback(item);
                refresh();
              }}
            >
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          </>
        );
      }}
      keyExtractor={(item) => item}
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
  text: {
    fontSize: 17,
    padding: 15,
  },
});

export default FilterList;
