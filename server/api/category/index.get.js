export default defineEventHandler(async () => {
  const allCategories = await CategorySchema.find({});
  return allCategories;
});
