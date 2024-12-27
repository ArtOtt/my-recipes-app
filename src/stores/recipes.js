import { defineStore } from 'pinia'

export const useRecipesStore = defineStore('recipes', {
  state() {
    return {
      user: null,

      categories: null,
      recipes: [],
      apiURl: import.meta.env.VITE_API_URL,
    }
  },
  getters: {
    isLoggedIn() {
      return this.user !== null
    },
  },

  actions: {
    async Login(username, password) {
      console.log(username, password)

      const res = await fetch(this.apiURl + 'users')
      const allUsers = await res.json()

      const loggedInUser = allUsers.find(function (user) {
        return user.username.toLowerCase() === username.toLowerCase()
      })
      if (loggedInUser) {
        this.user = loggedInUser
        localStorage.setItem('user', JSON.stringify(loggedInUser))
      }
    },
    checkLoggin() {
      this.user = JSON.parse(localStorage.getItem('user'))
    },
    async getAllRecipes() {
      const res = await fetch(this.apiURl + 'recipes')
      this.recipes = await res.json()
    },
    async getAllCategories() {
      const res = await fetch(this.apiURl + 'categories')
      this.categories = await res.json()
    },
    logout() {
      this.user = null
      localStorage.setItem('user', null)
    },
  },
})
