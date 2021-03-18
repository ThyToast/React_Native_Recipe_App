import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ListItem } from "react-native-elements";

const RecipeListModule = ({ results }) => {
  const navigation = useNavigation();

  if (!results) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});

export default RecipeListModule;
