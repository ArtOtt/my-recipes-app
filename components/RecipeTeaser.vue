<template>
  <article
    class="my-10 border-1 bg-[#7CA982] rounded-xl shadow-lg hover:shadow-amber-200"
  >
    <div class="p-5 text-white">
      <h3 class="text-xl mb-3 underline">{{ recipe.name }}</h3>
      <img class="mb-3 rounded max-h-32" :src="recipe.img" alt="" />
      <p class="mb-3">{{ recipe.description }}</p>
      <NuxtLink
        class="text-blue-900 underline"
        :to="`singleRecipe/${recipe.id}`"
      >
        Zum Rezept</NuxtLink
      >
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    recipe: Object,
  },
};
</script>
