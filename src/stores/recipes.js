import { defineStore } from 'pinia'

export const useRecipesStore = defineStore('recipes', {
  state() {
    return {
      recipes: [],
      apiURl: import.meta.env.VITE_API_URL,
    }
  },

  actions: {
    async getAllRecipes() {
      const res = await fetch(this.apiURl)
      this.recipes = await res.json()
    },
  },
})
