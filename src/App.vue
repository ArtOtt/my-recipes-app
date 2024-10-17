<template>
  <h1>Rezept-App</h1>
  <RouterView />
</template>

<script>
import { useRecipesStore } from '@/stores/recipes.js'

export default {
  data() {
    return {
      state: useRecipesStore(),
    }
  },

  created() {
    this.state.getAllRecipes()
  },
}
</script>
