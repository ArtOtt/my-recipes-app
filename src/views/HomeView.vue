<template>
  <PageHeader title="Startseite" sub="Finde deine Kategorie" />
  <div class="p-6">
    <ul class="space-y-2">
      <li
        v-for="category in state.categories"
        :key="category.id"
        class="bg-white shadow-md rounded-lg px-4 py-2 hover:bg-gray-100 transition duration-300"
      >
        <router-link :to="{ name: 'category', params: { id: category.id } }">{{
          category.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import { useRecipesStore } from '@/stores/recipes'

export default {
  data() {
    return {
      state: useRecipesStore(),
    }
  },
  components: {
    PageHeader,
  },
  async created() {
    await this.state.getAllRecipes()
    await this.state.getAllCategories()
  },
}
</script>
