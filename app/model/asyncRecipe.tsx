import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeRecipe = async (recipe: any, key: string) => {
  try {
    const jsonValue = JSON.stringify(recipe);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(`error saving: ${e.message}`);
  }
};

export const getStoredRecipe = async (key: string) => {
  try {
    let storedRecipe: any = await AsyncStorage.getItem(key);
    storedRecipe = JSON.parse(storedRecipe);
    return storedRecipe;
  } catch (e) {
    console.log(`error displaying: ${e.message}`);
  }
};
