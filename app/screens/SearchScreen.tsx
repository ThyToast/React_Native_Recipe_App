import React, { useContext, useState, createRef, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text, Icon } from "react-native-elements";
import ActionSheet from "react-native-actions-sheet";

import SearchComponent from "./modules/searchModule";
import RecipeListModule from "./modules/RecipeListModule";
import FilterList from "./modules/FilterList";
import { Context } from "../context/recipeContext";
import { storeRecipe, getStoredRecipe } from "../model/asyncRecipe";

const actionSheetRef: any = createRef();

const SearchScreen = ({ navigation }: any) => {
  const [input, setInput] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [recipe, setRecipe] = useState({});
  const [type, setType] = useState({});

  const { state, getRecipes, getRecipeTypes }: any = useContext(Context);

  const retrieveRecipe = async () => {
    try {
      let storedRecipe: any = await getStoredRecipe("searched_recipes");
      setRecipe(storedRecipe);
    } catch (e) {
      console.log(`error displaying: ${e.message}`);
    }
  };

  const retrieveRecipeTypes = async () => {
    try {
      let storedRecipeType: any = await getStoredRecipe("recipe_types");
      setType(storedRecipeType);
    } catch (e) {
      console.log(`error displaying: ${e.message}`);
    }
  };

  //calls on page load or page focus
  useEffect(() => {
    retrieveRecipe();
    retrieveRecipeTypes();

    navigation.addListener("focus", () => {
      retrieveRecipe();
    });
  }, []);

  //stores data whenever state changes
  useEffect(() => {
    if (state.results) {
      storeRecipe(state.results, "searched_recipes");
      retrieveRecipe();
    }
    if (state.recipetypes) {
      storeRecipe(state.recipetypes, "recipe_types");
    }
  }, [state]);

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
            retrieveRecipe();
          }
        }}
      />
      <RecipeListModule results={recipe} />

      <Icon
        raised
        containerStyle={styles.button}
        name="filter-list"
        type="MaterialIcons"
        onPress={() => {
          getRecipeTypes();
          actionSheetRef.current?.setModalVisible();
        }}
      />

      <ActionSheet ref={actionSheetRef}>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.actionsheetTitle}>Filter by:</Text>

          <ScrollView
            nestedScrollEnabled={true}
            onScrollEndDrag={() =>
              actionSheetRef.current?.handleChildScrollEnd()
            }
            onScrollAnimationEnd={() =>
              actionSheetRef.current?.handleChildScrollEnd()
            }
            onMomentumScrollEnd={() =>
              actionSheetRef.current?.handleChildScrollEnd()
            }
          >
            {type ? (
              <FilterList
                recipeTypes={type}
                callback={setCuisine}
                refresh={() => {
                  getRecipes(input, cuisine);
                  //a little buggy on lower end devices
                  actionSheetRef.current?.handleChildScrollEnd();
                }}
              />
            ) : null}
          </ScrollView>
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
  flatlist: {
    paddingTop: 15,
  },
  textList: {
    fontSize: 17,
    padding: 15,
  },
});

export default SearchScreen;
