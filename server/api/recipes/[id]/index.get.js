export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);
  const recipe = await RecipeSchema.findById(id);
  if (!recipe) {
    throw createError({
      statusCode: 404,
      statusMessage: "Recipe not found",
    });
  }
  return recipe;
});
