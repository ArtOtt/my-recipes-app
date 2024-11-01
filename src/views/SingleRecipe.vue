<template>
  <PageHeader :title="currentRecipe.name" :sub="currentRecipe.description" />
  <article>
    <img :src="currentRecipe.img" alt="" style="width: 400px" />
    <h3>Zutaten:</h3>
    <li v-for="item in currentRecipe.ingredients" :key="item">
      <strong>{{ item.name + ': ' }}</strong>
      {{ item.quantity }}
    </li>
  </article>
</template>

<script>
import { useRecipesStore } from '@/stores/recipes'
import PageHeader from '@/components/PageHeader.vue'

export default {
  components: { PageHeader },
  data() {
    return {
      recipeId: this.$route.params.id,
      state: useRecipesStore(),
    }
  },

  created() {
    console.log(this.recipeId)
  },

  computed: {
    currentRecipe() {
      return this.state.recipes.find(
        singleRecipe => singleRecipe.id === this.recipeId,
      )
    },
  },
}
</script>

<style scoped>
article {
  padding-block: 1rem;
}
h3 {
  padding-block: 1rem;
}
li {
  padding-block: 0.3rem;
}
</style>
