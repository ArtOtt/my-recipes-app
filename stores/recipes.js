export const useRecipesStore = defineStore("recipes", {
  state() {
    return {
      user: null,
      config: useRuntimeConfig(),

      categories: null,
      recipes: [],
    };
  },
  getters: {
    isLoggedIn() {
      return this.user !== null;
    },

    apiURL() {
      return this.config.public.apiURL;
    },
  },

  actions: {
    async Login(username, password) {
      console.log(username, password);

      const res = await fetch(this.apiURl + "users");
      const allUsers = await res.json();

      const loggedInUser = allUsers.find(function (user) {
        return user.username.toLowerCase() === username.toLowerCase();
      });
      if (loggedInUser) {
        this.user = loggedInUser;
        localStorage.setItem("user", JSON.stringify(loggedInUser));
      }
    },
    checkLoggin() {
      this.user = JSON.parse(localStorage.getItem("user"));
    },
    async getAllRecipes() {
      console.log("API URL:", this.apiURL);
      const res = await fetch(this.apiURL + "/api/recipes");
      this.recipes = await res.json();
    },
    async getAllCategories() {
      const res = await fetch(this.apiURL + "/api/category");
      this.categories = await res.json();
    },
    logout() {
      this.user = null;
      localStorage.setItem("user", null);
    },
    async getCategoryById(id) {
      const res = await fetch(this.apiURL + `/api/category/${id}`);
      return await res.json();
    },
    async getRecipeById(id) {
      const res = await fetch(this.apiURL + `/api/recipes/${id}`);
      return await res.json();
    },
    async getRecipesByCategory(categoryId) {
      const res = await fetch(
        this.apiURL + `/api/recipes?categoryId=${categoryId}`
      );
      return await res.json();
    },
  },
});
