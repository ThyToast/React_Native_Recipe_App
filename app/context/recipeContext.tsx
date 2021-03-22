import createDataContext from "./createDataContext";
import spoonacular from "../actions/api/spooncular";
import recipetypes from "../actions/api/recipetypes";
import { parse } from "fast-xml-parser";

const apiKey = "9a37e6e82ff442a7a2fb07a6b6f9f324";

const recipeReducer = (state: any, action: any) => {
  switch (action.type) {
    case "get":
      return action.payload;

    case "get_random":
      return action.payload;

    case "get_type":
      return action.payload;

    default:
      return state;
  }
};

const getRecipes = (dispatch: any) => {
  return async (query: String, cuisine: String) => {
    const response = await spoonacular.get("/complexSearch", {
      params: {
        query,
        cuisine,
        apiKey,
      },
    });
    dispatch({ type: "get", payload: response.data });
  };
};

const getRandomRecipes = (dispatch: any) => {
  return async (amount: Number) => {
    const response = await spoonacular.get("/random", {
      params: {
        number: amount.toString(),
        apiKey,
      },
    });
    dispatch({ type: "get_random", payload: response.data });
  };
};

const getDetailedRecipes = (dispatch: any) => {
  return async (id: any) => {
    const response = await spoonacular.get(`/${id}/information`);
    dispatch({ type: "get_detailed", payload: response.data });
  };
};

const getRecipeTypes = (dispatch: any) => {
  return async () => {
    const response = await recipetypes.get("");
    dispatch({ type: "get_type", payload: parse(response.data) });
  };
};

export const { Provider, Context } = createDataContext(
  recipeReducer,
  { getRecipes, getRandomRecipes, getDetailedRecipes, getRecipeTypes },
  { errorMessage: "" }
);
