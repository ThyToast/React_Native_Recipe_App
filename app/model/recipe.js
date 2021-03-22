import { Model } from "@nozbe/watermelondb";
import { field, date, children } from "@nozbe/watermelondb/decorators";

export default class Recipe extends Model {
  static table = "recipes";

  @field("title") recipeTitle;
  @field("image") recipeImage;
  @field("instruction") recipeDescription;
}
