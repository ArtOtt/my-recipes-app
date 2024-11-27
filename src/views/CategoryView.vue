<template>
  <h2>{{ recipesFromCategory?.title }}</h2>

  <div
    class="my-10 border-1 bg-gray-100 rounded-xl shadow-lg hover:shadow-amber-200"
    v-for="recipe of recipesFromCategory.recipes"
    :key="recipe.id"
  >
    <div class="p-5">
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
  </div>
</template>

<script>
import { useRecipesStore } from '@/stores/recipes'

export default {
  data() {
    return {
      recipesFromCategory: null,
      recipeId: this.$route.params.id,
      state: useRecipesStore(),
    }
  },

  computed: {
    categoryId() {
      return this.$route.params.id
    },
  },

  methods: {
    async getAllCategoryRecipes() {
      const res = await fetch(
        import.meta.env.VITE_API_URL +
          `categories/${this.categoryId}?_embed=recipes`,
      )
      this.recipesFromCategory = await res.json()
    },
  },
  async created() {
    await this.getAllCategoryRecipes()
    console.log(this.recipesFromCategory)
  },

  components: {},
}
</script>
