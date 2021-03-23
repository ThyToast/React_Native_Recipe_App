import { appSchema, tableSchema } from "@nozbe/watermelondb";

export const mySchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: "recipes",
      columns: [
        { name: "title", type: "string" },
        { name: "image", type: "string" },
        { name: "instruction", type: "string" },
        { name: "ingredients", type: "string" },
      ],
    }),
  ],
});
