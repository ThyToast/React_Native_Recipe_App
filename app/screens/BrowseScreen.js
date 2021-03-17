import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchComponent from "./modules/searchModule";

const BrowseScreen = () => {
  const [input, setInput] = useState("");

  return (
    <View>
      <SearchComponent
        input={input}
        onInputChange={setInput}
        onInputSubmit={() => console.log("Submitted")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default BrowseScreen;
