import axios from "axios";

export default axios.create({
  baseURL: "https://api.spoonacular.com/recipes",
  headers: {
    Authorization: "Bearer 9a37e6e82ff442a7a2fb07a6b6f9f324",
  },
});
