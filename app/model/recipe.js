import { Model } from "@nozbe/watermelondb";
import { field, date, children } from "@nozbe/watermelondb/decorators";

export default class Recipe extends Model {
  static table = "recipes";

  static associations = {
    reviews: { type: "has_many", foreignKey: "movie_id" },
  };

  @field("title") title;
  @field("poster_image") posterImage;
  @field("description") description;
}
