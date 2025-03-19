export default defineEventHandler(async () => {
  const allRecipes = await RecipeSchema.find({});
  return allRecipes;
});
