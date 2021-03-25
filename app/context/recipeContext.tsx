import createDataContext from "./createDataContext";
import spoonacular from "../actions/api/spooncular";
import recipetypes from "../actions/api/recipetypes";
import { parse } from "fast-xml-parser";

//limited to 150 requests a day only
const apiKey = "8b93abc6a0a64c8988e35c704819f6ad";
const apiKey2 = "b4461fbf347d486d973781a27735bc79";

const recipeReducer = (state: any, action: any) => {
  switch (action.type) {
    case "get":
      return action.payload;

    case "get_random":
      return action.payload;

    case "get_detailed":
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
        apiKey: apiKey,
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
        apiKey: apiKey,
      },
    });
    dispatch({ type: "get_random", payload: response.data });
  };
};

const getDetailedRecipes = (dispatch: any) => {
  return async (id: any) => {
    const response = await spoonacular.get(`/${id}/information/`, {
      params: {
        apiKey: apiKey,
      },
    });
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
