import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchComponent from "../components/searchComponent";

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
