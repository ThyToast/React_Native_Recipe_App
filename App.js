import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, use } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

import SearchScreen from "./app/screens/SearchScreen";
import DetailedRecipeScreen from "./app/screens/DetailedRecipeScreen";
import BrowseScreen from "./app/screens/BrowseScreen";
import AddRecipe from "./app/screens/AddRecipe";
import EditRecipe from "./app/screens/EditRecipe";
import UserRecipe from "./app/screens/UserRecipe";

import { Provider } from "./app/context/recipeContext";

const DetailedStack = createStackNavigator();
const UserStack = createStackNavigator();

const MainTab = createMaterialBottomTabNavigator();

const BrowseStackFlow = () => {
  return (
    <DetailedStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <DetailedStack.Screen name="BrowseStack" component={BrowseScreen} />
      <DetailedStack.Screen
        name="DetailStack"
        component={DetailedRecipeScreen}
      />
    </DetailedStack.Navigator>
  );
};

const UserStackFlow = () => {
  return (
    <UserStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <UserStack.Screen name="UserStack" component={UserRecipe} />
      <UserStack.Screen name="EditStack" component={EditRecipe} />
      <UserStack.Screen name="AddStack" component={AddRecipe} />
    </UserStack.Navigator>
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

              if (route.name === "Browse") {
                iconName = "list-ul";
                type = "font-awesome-5";
              } else if (route.name === "Search") {
                iconName = "search";
                type = "font-awesome-5";
              } else if (route.name === "User") {
                iconName = "user-alt";
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
          labeled={false}
        >
          <MainTab.Screen name="Browse" component={BrowseStackFlow} />
          <MainTab.Screen name="Search" component={SearchScreen} />
          <MainTab.Screen name="User" component={UserStackFlow} />
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
export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
