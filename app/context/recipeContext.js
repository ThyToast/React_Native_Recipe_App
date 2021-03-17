import createDataContext from "./createDataContext";
import spoonacular from "../actions/api/spooncular";

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
