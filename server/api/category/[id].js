export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);
  console.log(id);
  const allCategories = await CategorySchema.find({ _id: id });
  return allCategories;
});
