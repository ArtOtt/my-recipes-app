import { defineMongooseModel } from "#nuxt/mongoose";

export const CategorySchema = defineMongooseModel({
  name: "CategorySchema",

  schema: {
    title: {
      type: "String",
      required: true,
    },
  },
});
