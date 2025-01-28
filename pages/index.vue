<template>
  <div class="p-6">
    <PageHeader class="mt-10" title="Startseite" sub="Finde deine Kategorie" />
    <ul class="space-y-2 m-4 w-max-50">
      <li v-for="category in state.categories" :key="category.id" class="">
        <NuxtLink
          :to="`category/${category.id}`"
          class="px-4 py-2 bg-[#C2A83E] text-black rounded-lg w-[180px] shadow-md hover:bg-blue-500 transition duration-300 flex items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>

          {{ category.title }}
        </NuxtLink>
      </li>
    </ul>
    <PageHeader class="mt-10" title="Deine Favoriten" sub="" />
    <recipe-teaser
      v-for="recipe of state.recipes.filter((recipe) => recipe.isFavorite)"
      :key="recipe.id"
      :recipe="recipe"
    />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import RecipeTeaser from "@/components/RecipeTeaser.vue";
import { useRecipesStore } from "@/stores/recipes";

export default {
  data() {
    return {
      state: useRecipesStore(),
    };
  },
  computed: {
    favoriteRecipes() {
      return this.state.recipes.filter((recipe) => recipe.isFavorit);
    },
  },
  components: {
    PageHeader,
    RecipeTeaser,
  },
  async created() {
    await this.state.getAllRecipes();
    await this.state.getAllCategories();
  },
};
</script>
