<template>
  <div class="max-w-lg mx-auto p-6 bg-[#345b4f] shadow-md rounded-lg mt-5">
    <h1 class="text-2xl font-bold text-center text-white mb-6">
      Neues Rezept hinzufügen
    </h1>
    <form @submit.prevent="addRecipe" class="space-y-4">
      <div class="space-y-2">
        <label for="name" class="block text-white font-bold">Name:</label>
        <input
          v-model="recipe.name"
          id="name"
          type="text"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      <div class="space-y-2">
        <label class="block text-white font-bold">Kategorie:</label>
        <div class="space-y-2">
          <div
            v-for="category in categories"
            :key="category.id"
            class="flex items-center space-x-3 p-2 border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            <input
              type="radio"
              :id="category.id"
              :value="category.id"
              v-model="recipe.categoryId"
              class="focus:ring-blue-500 text-blue-600"
              required
            />
            <label :for="category.id" class="text-white cursor-pointer">{{
              category.title
            }}</label>
          </div>
        </div>
      </div>

      <div class="space-y-2">
        <label for="description" class="block text-white font-bold"
          >Beschreibung:</label
        >
        <textarea
          v-model="recipe.description"
          id="description"
          rows="3"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        ></textarea>
      </div>

      <div class="space-y-2">
        <label for="img" class="block text-white font-bold">Bild-URL:</label>
        <input
          v-model="recipe.img"
          id="img"
          type="text"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      <div class="flex items-center space-x-3">
        <input
          type="checkbox"
          v-model="recipe.isFavorite"
          id="isFavorite"
          class="focus:ring-blue-500 text-blue-600"
        />
        <label for="isFavorite" class="text-white font-bold"
          >Als Favorit markieren</label
        >
      </div>

      <div>
        <h3 class="text-lg font-bold text-white">Zutaten</h3>
        <div
          v-for="(ingredient, index) in recipe.ingredients"
          :key="index"
          class="flex items-center space-x-3 mb-2"
        >
          <input
            v-model="ingredient.name"
            placeholder="Zutat"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <input
            v-model="ingredient.quantity"
            placeholder="Menge"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <button
            @click="removeIngredient(index)"
            type="button"
            class="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Entfernen
          </button>
        </div>
        <button
          @click="addIngredient"
          type="button"
          class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Zutat hinzufügen
        </button>
      </div>

      <button
        type="submit"
        class="w-full px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600"
      >
        Rezept speichern
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { id: "28493710", title: "Asiatisch" },
        { id: "61740283", title: "Europäisch" },
        { id: "50392176", title: "Orientalisch" },
        { id: "65012247", title: "Andere Küchen" },
      ],
      recipe: {
        id: Date.now().toString(),
        name: "",
        categoryId: "",
        description: "",
        img: "",
        isFavorite: false,
        ingredients: [],
      },
    };
  },
  methods: {
    addIngredient() {
      this.recipe.ingredients.push({ name: "", quantity: "" });
    },
    removeIngredient(index) {
      this.recipe.ingredients.splice(index, 1);
    },
    async addRecipe() {
      try {
        const apiUrl = "https://24-mai-recipes.api.cbe.uber.space/recipes";
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.recipe),
        });

        if (!response.ok) {
          throw new Error(`Fehler beim Hinzufügen: ${response.statusText}`);
        }

        const result = await response.json();
        alert("Rezept erfolgreich hinzugefügt!");
        this.resetForm();
      } catch (error) {
        console.error("Fehler:", error);
        alert("Das Rezept konnte nicht hinzugefügt werden.");
      }
    },
    resetForm() {
      this.recipe = {
        id: Date.now().toString(),
        name: "",
        categoryId: "",
        description: "",
        img: "",
        isFavorite: false,
        ingredients: [],
      };
    },
  },
};
</script>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
