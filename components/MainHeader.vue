<template>
  <header
    class="bg-[#345b4f] text-[#f1f7ed] flex justify-between items-center p-4 text-xs md:text-base"
  >
    <h1 class="text-lg lg:text-2xl">
      <NuxtLink :to="{ name: 'index' }">Rezepte-App</NuxtLink>
    </h1>
    <nav>
      <ul class="flex gap-8">
        <li>
          <NuxtLink class="hidden sm:inline" :to="{ name: 'index' }"
            >Startseite</NuxtLink
          >
        </li>
        <li>
          <NuxtLink class="size-6 hidden sm:inline" :to="{ name: 'allRecipes' }"
            >Rezepte</NuxtLink
          >
          <NuxtLink class="sm:hidden" :to="{ name: 'allRecipes' }">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-8"
            >
              <path
                d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"
              /></svg
          ></NuxtLink>
        </li>
        <li v-if="state.user">
          <NuxtLink class="size-6 hidden sm:inline" :to="{ name: 'addRecipe' }"
            >Rezepte hinzufügen</NuxtLink
          >
          <NuxtLink class="sm:hidden" :to="{ name: 'addRecipe' }"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-8"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                clip-rule="evenodd"
              /></svg
          ></NuxtLink>
        </li>
        <li v-else>
          <NuxtLink :to="{ name: 'login' }">Login</NuxtLink>
        </li>
        <li v-if="state.user">
          <NuxtLink class="size-6 hidden sm:inline" :to="{ name: 'login' }"
            >Ausloggen</NuxtLink
          >
          <NuxtLink class="sm:hidden" :to="{ name: 'login' }"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-8 p-0 sm:hidden"
            >
              <path
                fill-rule="evenodd"
                d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z"
                clip-rule="evenodd"
              /></svg
          ></NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from "vue";

import { useRecipesStore } from "@/stores/recipes";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {},
  setup() {
    const state = useRecipesStore();
    const router = useRouter();

    const handleLogout = () => {
      state.logout();
      router.push({ name: "login" });
    };

    return { state, handleLogout };
  },
});
</script>
