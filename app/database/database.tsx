import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import { mySchema } from "../model/schema";
import { dbModels } from "../model/index";

const adapter = new SQLiteAdapter({
  dbName: "recipesList",
  schema: mySchema,
});

const database = new Database({
  adapter,
  modelClasses: dbModels,
  actionsEnabled: true,
});

export default database;
