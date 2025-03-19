import { defineMongooseModel } from "#nuxt/mongoose";

export const RecipeSchema = defineMongooseModel({
  name: "RecipeSchema",

  schema: {
    name: {
      type: "String",
      required: true,
    },
    categoryId: {
      type: "String",
      required: true,
    },
    description: {
      type: "String",
      required: true,
    },
    isFavorite: {
      type: "boolean",
    },
    ingredients: {
      type: "array",
      required: true,
    },
    img: {
      type: "String",
      required: true,
    },
  },
});
