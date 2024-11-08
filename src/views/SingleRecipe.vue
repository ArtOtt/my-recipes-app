<template>
  <PageHeader :title="currentRecipe.name" :sub="currentRecipe.description" />
  <article class="py-5">
    <img
      class="rounded pb-4"
      :src="currentRecipe.img"
      alt=""
      style="width: 400px"
    />
    <h3 class="pb-2">Zutaten:</h3>
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
