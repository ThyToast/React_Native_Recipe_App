import React, { useContext, useState, createRef } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Icon } from "react-native-elements";
import { parse } from "fast-xml-parser";
import ActionSheet from "react-native-actions-sheet";

import SearchComponent from "./modules/searchModule";
import RecipeListModule from "./modules/RecipeListModule";
import { Context } from "../context/recipeContext";

const actionSheetRef: any = createRef();

const SearchScreen = () => {
  const [input, setInput] = useState("");
  const [cuisine, setCuisine] = useState("");

  const { state, getRecipes }: any = useContext(Context);

  // const XMLData = Asset.fromModule(require("../../assets/recipetypes.xml"));
  // console.log(XMLData);
  // unable to load non-JSON files in Expo

  return (
    <View style={{ flex: 1 }}>
      <Text h2 style={styles.text}>
        Search
      </Text>
      <SearchComponent
        input={input}
        onInputChange={setInput}
        onInputSubmit={() => {
          if (input) {
            getRecipes(input, cuisine);
          }
        }}
      />
      <RecipeListModule results={state.results} isVertical={true} />

      <Icon
        raised
        containerStyle={styles.button}
        name="filter-list"
        type="MaterialIcons"
        onPress={() => {
          //TODO: Find a way to display popup to choose different cuisine

          actionSheetRef.current?.setModalVisible();

          // setCuisine("Japanese");
          // if (state) {
          //   getRecipes(input, cuisine);
          // }
        }}
      />

      <ActionSheet ref={actionSheetRef}>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.actionsheetTitle}>Filter by:</Text>
          <Text style={styles.actionsheetText}>Recipe type 1</Text>
          <Text style={styles.actionsheetText}>Recipe type 2</Text>
          <Text style={styles.actionsheetText}>Recipe type 3</Text>
        </View>
      </ActionSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 10,
    paddingBottom: 10,
  },
  button: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  actionsheetTitle: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    alignSelf: "center",
  },
  actionsheetText: {
    fontSize: 15,
    padding: 10,
    alignSelf: "center",
  },
});

export default SearchScreen;
