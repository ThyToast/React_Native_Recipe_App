import React from "react";
import { StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

const SearchComponent = ({ input, onInputChange, onInputSubmit }) => {
  return (
    <>
      <SearchBar
        style={styles.inputStyle}
        lightTheme={true}
        value={input}
        placeholder="Enter your recipes here"
        onChangeText={onInputChange}
        onEndEditing={onInputSubmit}
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    fontSize: 18,
    padding: 10,
  },
});

export default SearchComponent;
