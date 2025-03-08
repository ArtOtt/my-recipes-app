<template>
  <PageHeader
    class="text-6xl my-12 text-green-900"
    :title="currentRecipe.name"
    :sub="currentRecipe.description"
  />
  <article class="py-5">
    <div class="flex gap-4 flex-col md:flex-row">
      <img
        class="rounded pb-4"
        :src="currentRecipe.img"
        alt=""
        style="width: 400px"
      />
      <div>
        <h3 class="pb-2 text-3xl font-black">Zutaten:</h3>
        <ul>
          <li v-for="item in currentRecipe.ingredients" :key="item.name">
            <strong>{{ item.name + ": " }}</strong>
            {{ item.quantity }}
          </li>
        </ul>
      </div>
    </div>
  </article>

  <button
    @click="toggleFavorite"
    class="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
  >
    {{
      currentRecipe.isFavorite
        ? "Als Favorit entfernen"
        : "Zu Favoriten hinzufügen"
    }}
  </button>
</template>

<script>
import { useRecipesStore } from "@/stores/recipes";
import PageHeader from "@/components/PageHeader.vue";

export default {
  components: { PageHeader },
  data() {
    return {
      recipeId: this.$route.params.id,
      state: useRecipesStore(),
    };
  },

  computed: {
    currentRecipe() {
      return this.state.recipes.find(
        (singleRecipe) => singleRecipe.id === this.recipeId
      );
    },
  },
  methods: {
    async toggleFavorite() {
      if (this.currentRecipe) {
        this.currentRecipe.isFavorite = !this.currentRecipe.isFavorite;

        const response = await fetch(
          `https://24-mai-recipes.api.cbe.uber.space/recipes/${this.currentRecipe.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.currentRecipe),
          }
        );

        const updatedTodoFromApi = await response.json();
        console.log(updatedTodoFromApi);
      }
    },
  },
};
</script>
