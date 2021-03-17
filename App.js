import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, use } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

import BrowseScreen from "./app/screens/BrowseScreen";
import DetailedRecipeScreen from "./app/screens/DetailedRecipeScreen";
import RandomRecipe from "./app/screens/RandomRecipe";

const DetailedStack = createStackNavigator();
const MainTab = createMaterialBottomTabNavigator();

const DetailedStackFlow = () => {
  return (
    <DetailedStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <DetailedStack.Screen name="Browse" component={BrowseScreen} />
      <DetailedStack.Screen name="Detail" component={DetailedRecipeScreen} />
    </DetailedStack.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <MainTab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName, type;

              //displays different icons based on route name

              if (route.name === "Main") {
                iconName = "food-variant";
                type = "material-community";
              } else if (route.name === "Random") {
                iconName = "random";
                type = "font-awesome-5";
              }

              return (
                <Icon name={iconName} color={color} type={type} size={size} />
              );
            },
          })}
          activeColor="darkorange"
          inactiveColor="gray"
          barStyle={styles.bar}
        >
          <MainTab.Screen name="Main" component={DetailedStackFlow} />
          <MainTab.Screen name="Random" component={RandomRecipe} />
        </MainTab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bar: {
    backgroundColor: "white",
  },
});

export default App;
