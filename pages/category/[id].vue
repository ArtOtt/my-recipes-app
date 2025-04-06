<template>
  <h2>{{ recipesFromCategory.title }}</h2>

  <recipe-teaser
    v-for="recipe of recipesFromCategory.recipes"
    :key="recipe.id"
    :recipe="recipe"
  />
</template>

<script>
import RecipeTeaser from "@/components/RecipeTeaser.vue";
import { useRecipesStore } from "@/stores/recipes";

export default {
  data() {
    return {
      category: {},
      recipesFromCategory: [],

      state: useRecipesStore(),
      config: useRuntimeConfig(),
      categoryId: this.$route.params.id,
    };
  },

  computed: {
    categoryId() {
      return this.$route.params.id;
    },
    apiURL() {
      return this.config.public.apiURL;
    },
  },

  async created() {
    this.recipesFromCategory = await this.state.getRecipesByCategory(
      this.categoryId
    );
    this.category = await this.state.getCategoryById(this.categoryId);
    console.log(this.category.title);
  },

  components: { RecipeTeaser },
};
</script>
