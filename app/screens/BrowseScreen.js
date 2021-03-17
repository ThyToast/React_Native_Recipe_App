import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchComponent from "./modules/searchModule";
import { Context } from "../context/recipeContext";

const BrowseScreen = () => {
  const [input, setInput] = useState("");
  const { state, getRecipes } = useContext(Context);

  console.log(state);

  return (
    <View>
      <SearchComponent
        input={input}
        onInputChange={setInput}
        onInputSubmit={() => getRecipes(input)}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default BrowseScreen;
