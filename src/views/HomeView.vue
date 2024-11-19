<template>
  <PageHeader title="Startseite" />
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'

import { useRecipesStore } from '@/stores/recipes'

export default {
  data() {
    return {
      recipeId: this.$route.params.id,
      state: useRecipesStore(),
    }
  },
  components: {
    PageHeader,
  },
  async created() {
    await this.state.getAllRecipes()
  },
}
</script>
