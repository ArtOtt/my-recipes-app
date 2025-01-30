<template>
  <div class="container">
    <h2>Zutaten</h2>

    <!-- Klickbare Felder für die Zutaten -->
    <div class="ingredient-list">
      <div
        v-for="ingredient in ingredients"
        :key="ingredient"
        class="ingredient-item"
        @click="addIngredient(ingredient)"
      >
        {{ ingredient }}
      </div>
    </div>

    <!-- Liste der ausgewählten Zutaten -->
    <h3>Ausgewählte Zutaten:</h3>
    <ul>
      <li v-for="ingredient in selectedIngredients" :key="ingredient">
        {{ ingredient }}
        <button @click="removeIngredient(ingredient)">❌</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRecipesStore } from '@/stores/recipes'; // Stelle sicher, dass der Pfad zum Store korrekt ist

const state = useRecipesStore();
const allRecipes = ref([]);
const ingredients = ref([]);
const selectedIngredients = ref([]); // Liste der vom Benutzer ausgewählten Zutaten

// Funktion zum Abrufen der Rezepte
async function getRecipes() {
  await state.getAllRecipes();
  allRecipes.value = state.recipes;
}

// Zutatenliste zusammenstellen
watchEffect(() => {
  const ingredientSet = new Set();

  allRecipes.value.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      ingredientSet.add(ingredient.name);
    });
  });

  ingredients.value = Array.from(ingredientSet);
});

// Zutat zur Liste der ausgewählten Zutaten hinzufügen
function addIngredient(ingredient) {
  if (ingredient && !selectedIngredients.value.includes(ingredient)) {
    selectedIngredients.value.push(ingredient);
    // Entferne die Zutat aus der Liste der verfügbaren Zutaten
    const index = ingredients.value.indexOf(ingredient);
    if (index !== -1) {
      ingredients.value.splice(index, 1);
    }
  }
}

// Zutat aus der Liste der ausgewählten Zutaten entfernen
function removeIngredient(ingredient) {
  const index = selectedIngredients.value.indexOf(ingredient);
  if (index !== -1) {
    selectedIngredients.value.splice(index, 1);
    // Füge die Zutat zurück in die Liste der verfügbaren Zutaten
    ingredients.value.push(ingredient);
  }
}

// Nuxt 3: Abruf der Rezepte sobald die Komponente geladen wird
await getRecipes();
</script>

<style scoped>
/* Styles für die klickbaren Zutaten */
.ingredient-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.ingredient-item {
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 5px;
}

.ingredient-item:hover {
  background-color: #e0e0e0;
}

/* Styles für die Liste der ausgewählten Zutaten */
ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #ff1a1a;
}
</style>
