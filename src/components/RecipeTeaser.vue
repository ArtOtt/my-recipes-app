<template>
  <article
    class="my-10 border-1 bg-[#7CA982] rounded-xl shadow-lg hover:shadow-amber-200"
  >
    <div class="p-5 text-white">
      <h3 class="text-xl mb-3 underline">{{ recipe.name }}</h3>
      <img class="mb-3 rounded max-h-32" :src="recipe.img" alt="" />
      <p class="mb-3">{{ recipe.description }}</p>
      <router-link
        class="text-blue-900 underline"
        :to="{ name: 'recipe', params: { id: recipe.id } }"
      >
        Zum Rezept</router-link
      >
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    recipe: Object,
  },
}
</script>
