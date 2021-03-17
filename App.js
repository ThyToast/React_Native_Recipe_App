import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import BrowseScreen from "./app/screens/BrowseScreen";
import DetailedRecipeScreen from "./app/screens/DetailedRecipeScreen";

const DetailedStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const DetailedStackFlow = () => {
  return (
    <DetailedStack.Navigator>
      <DetailedStack.Screen name="Browse" component={BrowseScreen} />
      <DetailedStack.Screen name="Detail" component={DetailedRecipeScreen} />
    </DetailedStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MainTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName, type;

            if (route.name === "Main") {
              iconName = "food-variant";
              type = "material-community";
            }

            return (
              <Icon
                style={{ padding: 10 }}
                name={iconName}
                type={type}
                size={30}
              />
            );
          },
        })}
        tabBarOptions={{
          labelStyle: {
            fontSize: 15,
            marginTop: 5,
            color: "black",
          },
        }}
      >
        <MainTab.Screen name="Main" component={DetailedStackFlow} />
      </MainTab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
