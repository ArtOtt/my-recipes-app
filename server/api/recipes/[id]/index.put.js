export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);
  const body = await readBody(event);
  const recipe = await RecipeSchema.findByIdAndUpdate(id, body, { new: true });
  return recipe;
});
