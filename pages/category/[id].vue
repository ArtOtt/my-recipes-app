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
      recipesFromCategory: {},
      recipeId: this.$route.params.id,
      state: useRecipesStore(),
      config: useRuntimeConfig(),
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

  methods: {
    async getAllCategoryRecipes() {
      const res = await fetch(this.apiURL + `/api/category/${this.categoryId}`);
      this.recipesFromCategory = await res.json();
    },
  },
  async created() {
    await this.getAllCategoryRecipes();
    console.log(this.recipesFromCategory);
  },

  components: { RecipeTeaser },
};
</script>
