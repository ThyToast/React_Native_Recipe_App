import createDataContext from "./createDataContext";
import spoonacular from "../actions/api/spooncular";

const key = "9a37e6e82ff442a7a2fb07a6b6f9f324";

const recipeReducer = (state, action) => {
  switch (action.type) {
    case "get":
      return action.payload;
    default:
      return state;
  }
};

const getRecipes = (dispatch) => {
  return async (query) => {
    const response = await spoonacular.get("/complexSearch", {
      params: {
        query: query,
        apiKey: key,
      },
    });
    dispatch({ type: "get", payload: response.data });
  };
};

export const { Provider, Context } = createDataContext(
  recipeReducer,
  { getRecipes },
  { errorMessage: "" }
);
