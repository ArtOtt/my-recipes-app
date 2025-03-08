<template>
  <PageHeader title="Rezeptübersicht" class="text-4xl m-6" />
  <RecipeTeaser
    v-for="recipe of state.recipes"
    :key="recipe.id"
    :recipe="recipe"
  />
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import RecipeTeaser from "@/components/RecipeTeaser.vue";
import { useRecipesStore } from "@/stores/recipes";

export default {
  components: { PageHeader, RecipeTeaser },

  data() {
    return {
      state: useRecipesStore(),
    };
  },

  async created() {
    await this.state.getAllRecipes();
  },
};
</script>
