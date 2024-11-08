<template>
  <PageHeader title="Rezeptübersicht" sub="Suche dir dein Rezept raus! " />
  <div
    class="my-10 border-1 bg-gray-100 rounded-xl shadow-lg hover:shadow-amber-200"
    v-for="recipe of state.recipes"
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
import PageHeader from '@/components/PageHeader.vue'
import { useRecipesStore } from '@/stores/recipes'

export default {
  components: { PageHeader },

  data() {
    return {
      state: useRecipesStore(),
    }
  },

  async created() {
    await this.state.getAllRecipes()
    console.log(this.recipes)
  },
}
</script>
