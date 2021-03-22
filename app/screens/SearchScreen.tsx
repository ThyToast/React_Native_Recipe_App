import React, { useContext, useState, createRef, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text, Icon } from "react-native-elements";
import ActionSheet from "react-native-actions-sheet";

import SearchComponent from "./modules/searchModule";
import RecipeListModule from "./modules/RecipeListModule";
import FilterList from "./modules/FilterList";
import { Context } from "../context/recipeContext";

const actionSheetRef: any = createRef();

const SearchScreen = ({ navigation }: any) => {
  const [input, setInput] = useState("");
  const [cuisine, setCuisine] = useState("");

  const { state, getRecipes, getRecipeTypes }: any = useContext(Context);

  useEffect(() => {
    getRecipeTypes();

    navigation.addListener("focus", () => {
      if (input) {
        getRecipes(input, cuisine);
      }
    });

    return () => {
      getRecipeTypes();
    };
  }, []);

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
            {state.recipetypes ? (
              <FilterList
                recipeTypes={state.recipetypes}
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
