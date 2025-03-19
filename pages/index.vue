<template>
  <div class="p-6">
    <PageHeader
      class="mt-10 font-black text-3xl"
      title="Finde deine Kategorie"
    />
    <ul class="gap-4 my-4 w-max-50 flex flex-wrap">
      <li v-for="category in state.categories" :key="category.id">
        <NuxtLink
          :to="`category/${category._id}`"
          class="text-white px-9 py-3 bg-[rgb(54,69,60)] rounded flex items-center gap-1 w-[210px]"
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
    <PageHeader class="mt-10 font-black text-3xl" title="Deine Favoriten" />
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
