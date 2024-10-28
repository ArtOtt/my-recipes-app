<template>
  <MainHeader />
  <main>
    <RouterView />
  </main>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import { useRecipesStore } from '@/stores/recipes'

export default {
  components: {
    MainHeader,
  },
  data() {
    return {
      state: useRecipesStore(),
    }
  },

  async created() {
    if (this.state.recipes.length === 0) {
      await this.state.getAllRecipes()
    }
  },
}
</script>
