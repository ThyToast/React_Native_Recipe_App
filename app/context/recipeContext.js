import createDataContext from "./createDataContext";
import spoonacular from "../actions/api/spooncular";

const apiKey = "9a37e6e82ff442a7a2fb07a6b6f9f324";

const recipeReducer = (state, action) => {
  switch (action.type) {
    case "get":
      return action.payload;

    case "get_random":
      return action.payload;

    default:
      return state;
  }
};

const getRecipes = (dispatch) => {
  return async (query) => {
    const response = await spoonacular.get("/complexSearch", {
      params: {
        query,
        apiKey,
      },
    });
    dispatch({ type: "get", payload: response.data });
  };
};

const getRandomRecipes = (dispatch) => {
  return async (number) => {
    const response = await spoonacular.get("/random", {
      params: {
        number,
        apiKey,
      },
    });
    dispatch({ type: "get_random", payload: response.data });
  };
};

export const { Provider, Context } = createDataContext(
  recipeReducer,
  { getRecipes, getRandomRecipes },
  { errorMessage: "" }
);
