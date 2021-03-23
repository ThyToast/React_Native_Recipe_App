import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import DatabaseProvider from "@nozbe/watermelondb/DatabaseProvider";

import SearchScreen from "./app/screens/SearchScreen";
import DetailedRecipeScreen from "./app/screens/DetailedRecipeScreen";
import BrowseScreen from "./app/screens/BrowseScreen";
import AddRecipe from "./app/screens/AddRecipe";
import EditRecipe from "./app/screens/EditRecipe";
import UserRecipe from "./app/screens/UserRecipe";
import database from "./app/database/database";

import { Provider } from "./app/context/recipeContext";

const UserStack = createStackNavigator();
const BrowseStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainTab = createMaterialBottomTabNavigator();

const BrowseStackFlow = () => {
  return (
    <BrowseStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BrowseStack.Screen name="BrowseStack" component={BrowseScreen} />
    </BrowseStack.Navigator>
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

const MainTabFlow = () => {
  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }: any) => {
          let iconName: string = "";
          let type: string = "";

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

          return <Icon name={iconName} color={color} type={type} size={size} />;
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
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <MainStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <MainStack.Screen name="Main" component={MainTabFlow} />
          <MainStack.Screen name="Detail" component={DetailedRecipeScreen} />
        </MainStack.Navigator>
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
    <DatabaseProvider database={database}>
      <Provider>
        <App />
      </Provider>
    </DatabaseProvider>
  );
};
