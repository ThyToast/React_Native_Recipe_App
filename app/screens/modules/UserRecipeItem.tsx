import React, { useCallback } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import withObservables from "@nozbe/with-observables";

const UserRecipeItem = ({ recipes }: any) => {
  const handleDelete = useCallback(async () => {
    await recipes.delete();
  }, [recipes]);

  return (
    <View>
      {/* <Image
        source={{ uri: recipes.image.uri }}
        style={{ width: "100%", height: 250 }}
      /> */}
      <Text>{recipes.title}</Text>
    </View>
  );
};

export default UserRecipeItem;

const styles = StyleSheet.create({});
