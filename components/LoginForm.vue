<template>
  <div class="w-full flex items-center justify-center flex-col">
    <form
      class="flex flex-col gap-4 bg-[#345b4f] p-6 rounded shadow-lg"
      @submit.prevent="Login"
      v-if="state.user === null"
    >
      <div class="flex flex-col-reverse gap-2">
        <input
          type="text"
          v-model="username"
          id="username"
          placeholder="Dein Benutzername"
          class="border-2 border-grey-400 rounded p-2 w-72"
        />
        <label for="username" class="text-2xl font-bold text-white"
          >Benutzername</label
        >
      </div>

      <div class="flex flex-col-reverse gap-2">
        <input
          type="password"
          v-model="password"
          id="password"
          placeholder="Dein Passwort"
          class="border-2 border-grey-400 rounded p-2 w-72"
        />
        <label for="password" class="text-2xl font-bold text-white"
          >Passwort</label
        >
      </div>
      <button
        class="px-6 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
        type="submit"
      >
        Einloggen
      </button>
    </form>
    <button
      v-else
      class="px-6 py-2 bg-[#345b4f] text-white rounded hover:bg-sky-600 mt-4"
      @click="state.logout"
    >
      Ausloggen
    </button>
    <p
      class="bg-green-200 border-2 border-green-400 p-2 rounded mt-4"
      v-if="isLoggedIn"
    >
      Erfolgreich eingeloggt, {{ state.user.username }}
    </p>
    <p
      class="bg-red-200 border-2 border-red-400 p-2 rounded mt-4"
      v-if="errorMessage"
    >
      {{ errorMessage }}
    </p>
  </div>
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
        this.errorMessage = "";
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
