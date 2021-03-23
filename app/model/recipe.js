import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export default class Recipe extends Model {
  static table = "recipes";

  @field("title") title;
  @field("image") image;
  @field("instruction") instruction;
  @field("ingredients") ingredients;


  getRecipe() {
    return {
      title: this.title,
      image: this.image,
      instruction: this.instruction,
      ingredients: this.ingredients
    }
  }

  async deleteRecipe() {
    await super.markAsDeleted()
  }
}
