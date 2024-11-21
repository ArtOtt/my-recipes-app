import { defineStore } from 'pinia'

export const useRecipesStore = defineStore('recipes', {
  state() {
    return {
      categories: null,
      recipes: [],
      apiURl: import.meta.env.VITE_API_URL,
    }
  },

  actions: {
    async getAllRecipes() {
      const res = await fetch(this.apiURl + 'recipes')
      this.recipes = await res.json()
    },
    async getAllCategories() {
      const res = await fetch(this.apiURl + 'categories')
      this.categories = await res.json()
    },
  },
})
