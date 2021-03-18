import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

import SearchComponent from "./modules/searchModule";
import { Context } from "../context/recipeContext";

const SearchScreen = () => {
  const [input, setInput] = useState("");
  const { state, getRecipes } = useContext(Context);

  console.log(state);

  return (
    <View>
      <Text h2 style={styles.text}>
        Search
      </Text>
      <SearchComponent
        input={input}
        onInputChange={setInput}
        onInputSubmit={() => getRecipes(input)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 10,
    paddingBottom: 10,
  },
});

export default SearchScreen;
