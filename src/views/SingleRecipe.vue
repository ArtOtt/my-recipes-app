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
    <ul>
      <li v-for="item in currentRecipe.ingredients" :key="item.name">
        <strong>{{ item.name + ': ' }}</strong>
        {{ item.quantity }}
      </li>
    </ul>
  </article>
  <!-- Neuer Button -->
  <button
    @click="toggleFavorite"
    class="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
  >
    {{
      currentRecipe.isFavorite
        ? 'Als Favorit entfernen'
        : 'Zu Favoriten hinzufügen'
    }}
  </button>
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

  computed: {
    currentRecipe() {
      return this.state.recipes.find(
        singleRecipe => singleRecipe.id === this.recipeId,
      )
    },
  },
  methods: {
    toggleFavorite() {
      if (this.currentRecipe) {
        this.currentRecipe.isFavorite = !this.currentRecipe.isFavorite
      }
    },
  },
}
</script>
