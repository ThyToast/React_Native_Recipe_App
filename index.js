import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import { mySchema } from "./app/model/schema";
import { dbModels } from "./app/model/index";

//if app is not loading properly, use android studio to sync, reboot the phone and run again, or check watermelon db setup

const adapter = new SQLiteAdapter({
  dbName: "recipesList",
  schema: mySchema,
});

const database = new Database({
  adapter,
  modelClasses: dbModels,
  actionsEnabled: true,
});

AppRegistry.registerComponent(appName, () => App);
