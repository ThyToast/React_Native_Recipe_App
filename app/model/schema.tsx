import Realm from "realm";

const mySchema = {
  name: "recipes",
  properties: {
    _id: "string",
    title: "string",
    image: "string",
    instructions: "string",
    ingredients: "string",
  },
  primaryKey: "_id",
};

const realm = {
  path: "myrealm",
  schema: [mySchema],
};

export const addNewRecipe = (recipe: any) =>
  new Promise((resolve, reject) => {
    Realm.open(realm)
      .then((realm) => {
        realm.write(() => {
          realm.create("recipes", recipe);
          resolve(recipe);
        });
      })
      .catch((error) => reject(error));
  });

export const deleteRecipe = (recipeId: any) =>
  new Promise((resolve, reject) => {
    Realm.open(realm)
      .then((realm) => {
        realm.write(() => {
          let deleteRecipe = realm.objectForPrimaryKey("recipes", recipeId);
          realm.delete(deleteRecipe);
          resolve(deleteRecipe);
        });
      })
      .catch((error) => reject(error));
  });

export const displayAllRecipes = () =>
  new Promise((resolve, reject) => {
    Realm.open(realm)
      .then((realm) => {
        realm.write(() => {
          let allRecipes = realm.objects("recipes");
          resolve(allRecipes);
        });
      })
      .catch((error) => reject(error));
  });

export const editRecipe = (recipe: any, recipeId: any) =>
  new Promise((resolve, reject) => {
    Realm.open(realm)
      .then((realm) => {
        realm.write(() => {
          let editedRecipe: any = realm.objectForPrimaryKey(
            "recipes",
            recipeId
          );
          editedRecipe.title = recipe.title;
          editedRecipe.image = recipe.image;
          editedRecipe.instructions = recipe.instructions;
          editedRecipe.ingredients = recipe.ingredients;

          resolve(editedRecipe);
        });
      })
      .catch((error) => reject(error));
  });

export default new Realm(realm);
