<template>
  <div class="w-full h-screen flex items-center justify-start flex-col">
    <div class="text-center mb-6 mt-28">
      <h1 class="text-4xl font-bold">Willkommen</h1>
      <h3 class="text-2xl mt-2">
        Melde dich an, wenn du dein Rezept speichern willst!
      </h3>
      <p class="text-base text-gray-600 mt-1">Kein Konto?!</p>
      <p class="text-base mt-1">
        Hier kannst du dich
        <span class="underline italic"><a>registrieren</a> </span>
      </p>
    </div>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import { useRecipesStore } from "@/stores/recipes";

export default {
  data() {
    return {
      state: useRecipesStore(),
    };
  },

  computed: {},

  components: { LoginForm },
};
</script>
