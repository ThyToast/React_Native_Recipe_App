import createDataContext from "./createDataContext";
import spoonacular from "../actions/api/spooncular";

const recipeReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const getRecipes = (dispatch) => {};

export const { Provider, Context } = createDataContext(
  recipeReducer,
  { getRecipes },
  { errorMessage: "" }
);
