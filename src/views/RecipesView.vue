<template>
  <PageHeader title="Rezeptübersicht" sub="Suche dir dein Rezept raus! " />
  <div v-for="recipe of state.recipes" :key="recipe.id">
    <h3>{{ recipe.name }}</h3>
    <img :src="recipe.img" alt="" style="width: 200px" />
    <p>{{ recipe.description }}</p>
    <router-link :to="{ name: 'recipe', params: { id: recipe.id } }"
      >Zum Rezept</router-link
    >
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
  },
}
</script>

<style scoped>
div {
  padding-block: 1rem;
}
h3 {
  padding-block: 0.5rem;
}
p {
  padding-block: 0.5rem;
}

button {
  margin-top: 0.5rem;
  padding: 0.3rem;
}
a {
  color:;
}
</style>
