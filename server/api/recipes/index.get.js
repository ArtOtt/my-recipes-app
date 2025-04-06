export default defineEventHandler(async (event) => {
  const { categoryId } = getQuery(event);

  if (categoryId) {
    const allRecipes = await RecipeSchema.find({ categoryId });
    return allRecipes;
  }

  const allRecipes = await RecipeSchema.find();
  return allRecipes;
});
