<template>
  <form
    class="flex flex-col gap-2"
    @submit.prevent="Login"
    v-if="state.user === null"
  >
    <div class="flex flex-col-reverse justify-end gap-2">
      <input
        type="text"
        v-model="username"
        id="username"
        placeholder="Dein Benutzername"
        class="border-2 border-sky-400 rounded p-2"
      />
      <label for="username">Benutzername</label>
    </div>
    <hr />
    <div class="flex flex-col-reverse justify-end gap-2">
      <input
        type="password"
        v-model="password"
        id="password"
        placeholder="Dein Passwort"
        class="border-2 border-sky-400 rounded p-2"
      />
      <label for="password">Passwort</label>
    </div>
    <button
      class="self-start my-2 px-6 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
      type="submit"
    >
      Einloggen
    </button>
  </form>
  <button
    v-else
    class="self-start my-2 px-6 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
    @click="state.logout"
  >
    Ausloggen
  </button>
  <p
    class="bg-green-200 border-2 border-green-400 p-2 rounded"
    v-if="isLoggedIn"
  >
    Erfolgreich eingeloggt, {{ state.user.username }}
  </p>
  <p class="bg-red-200 border-2 border-red-400 p-2 rounded" v-if="errorMessage">
    {{ errorMessage }}
  </p>
</template>

<script>
import { useRecipesStore } from "@/stores/recipes";

export default {
  data() {
    return {
      state: useRecipesStore(),
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  computed: {
    isLoggedIn() {
      return this.state.user !== null;
    },
  },
  methods: {
    async Login() {
      if (!this.username || !this.password) {
        this.errorMessage = "Benutzername und Passwort dürfen nicht leer sein!";
        return;
      }

      try {
        await this.state.Login(this.username, this.password);
        this.errorMessage = ""; // Fehlernachricht zurücksetzen
      } catch (error) {
        this.errorMessage =
          "Login fehlgeschlagen. Bitte überprüfe deine Eingaben.";
      }
    },
  },

  mounted() {
    this.state.checkLoggin();
    console.log(this.state.user);
  },
};
</script>
