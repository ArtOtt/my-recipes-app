<template>
  <header class="bg-sky-900 text-white flex justify-between items-baseline p-4">
    <h1 class="text-2xl">Rezepte-App</h1>
    <nav>
      <ul class="flex gap-8">
        <li v-if="state.user">
          <router-link :to="{ name: 'home' }">Startseite</router-link>
        </li>
        <li v-if="state.user">
          <router-link :to="{ name: 'recipes' }">Rezepte</router-link>
        </li>
        <li v-if="state.user">
          <router-link :to="{ name: 'addRecipes' }"
            >Rezepte hinzufügen</router-link
          >
        </li>
        <li v-else>
          <router-link :to="{ name: 'login' }">Login</router-link>
        </li>
        <li v-if="state.user">
          <router-link :to="{ name: 'login' }">Ausloggen</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { useRecipesStore } from '@/stores/recipes'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const state = useRecipesStore()
    const router = useRouter()

    const handleLogout = () => {
      state.logout()
      router.push({ name: 'login' })
    }

    return { state, handleLogout }
  },
}
</script>
