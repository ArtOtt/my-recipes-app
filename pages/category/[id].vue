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
    };
  },

  computed: {
    categoryId() {
      return this.$route.params.id;
    },
  },

  methods: {
    async getAllCategoryRecipes() {
      const res = await fetch(
        import.meta.env.VITE_API_URL +
          `categories/${this.categoryId}?_embed=recipes`
      );
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
