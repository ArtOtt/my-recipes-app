<template>
  <div class="p-6">
    <PageHeader class="mt-10" title="Startseite" sub="Finde deine Kategorie" />
    <ul class="space-y-2">
      <li
        v-for="category in state.categories"
        :key="category.id"
        class="bg-white shadow-md rounded-lg px-4 py-2 hover:bg-gray-100 transition duration-300"
      >
        <router-link :to="{ name: 'category', params: { id: category.id } }">{{
          category.title
        }}</router-link>
      </li>
    </ul>
    <PageHeader class="mt-10" title="Deine Favoriten" sub="" />
    <recipe-teaser
      v-for="recipe of state.recipes.filter(recipe => recipe.isFavorite)"
      :key="recipe.id"
      :recipe="recipe"
    />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import RecipeTeaser from '@/components/RecipeTeaser.vue'
import { useRecipesStore } from '@/stores/recipes'

export default {
  data() {
    return {
      state: useRecipesStore(),
    }
  },
  computed: {
    favoriteRecipes() {
      return this.state.recipes.filter(recipe => recipe.isFavorit)
    },
  },
  components: {
    PageHeader,
    RecipeTeaser,
  },
  async created() {
    await this.state.getAllRecipes()
    await this.state.getAllCategories()
  },
}
</script>
