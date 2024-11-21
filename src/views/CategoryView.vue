<template>
  <div>
    <h2>{{ recipesFromCategory?.title }}</h2>
    <li v-for="recipe in recipesFromCategory.recipes" :key="recipe.id">
      {{ recipe.name }}
    </li>
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
