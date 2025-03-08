<template>
  <div class="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Zutaten</h2>

    <div class="flex flex-wrap gap-2 mb-4">
      <div
        v-for="ingredient in ingredients"
        :key="ingredient"
        class="px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-300 transition"
        @click="addIngredient(ingredient)"
      >
        {{ ingredient }}
      </div>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mb-2">
      Ausgewählte Zutaten:
    </h3>
    <ul class="list-none p-0">
      <li
        v-for="ingredient in selectedIngredients"
        :key="ingredient"
        class="flex justify-between items-center bg-gray-100 p-2 rounded-lg mb-2"
      >
        <span>{{ ingredient }}</span>
        <button
          @click="removeIngredient(ingredient)"
          class="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          ❌
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useRecipesStore } from "@/stores/recipes";
const state = useRecipesStore();
const allRecipes = ref([]);
const ingredients = ref([]);
const selectedIngredients = ref([]);

async function getRecipes() {
  await state.getAllRecipes();
  allRecipes.value = state.recipes;
}

watchEffect(() => {
  const ingredientSet = new Set();

  allRecipes.value.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      ingredientSet.add(ingredient.name);
    });
  });

  ingredients.value = Array.from(ingredientSet);
});

function addIngredient(ingredient) {
  if (ingredient && !selectedIngredients.value.includes(ingredient)) {
    selectedIngredients.value.push(ingredient);

    const index = ingredients.value.indexOf(ingredient);
    if (index !== -1) {
      ingredients.value.splice(index, 1);
    }
  }
}

function removeIngredient(ingredient) {
  const index = selectedIngredients.value.indexOf(ingredient);
  if (index !== -1) {
    selectedIngredients.value.splice(index, 1);

    ingredients.value.push(ingredient);
  }
}

await getRecipes();
</script>
