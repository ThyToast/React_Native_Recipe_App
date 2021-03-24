import React from "react";
import { StyleSheet, FlatList, Image, Text, View } from "react-native";
import { Chip } from "react-native-paper";

const IngredientList = ({ ingredient }: any) => {
  if (!ingredient) {
    return null;
  }

  return (
    <FlatList
      data={ingredient}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <View style={styles.container}>
            <Chip style={styles.chip}>
              <Text style={styles.name}>{item.name}</Text>
            </Chip>
          </View>
        );
      }}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10 },
  chip: {
    backgroundColor: "darkorange",
    paddingHorizontal: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    marginHorizontal: 30,
    paddingBottom: 15,
  },
});

export default IngredientList;
