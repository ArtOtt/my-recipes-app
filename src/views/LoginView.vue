<template>
  <LoginForm />
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import { useRecipesStore } from '@/stores/recipes'

export default {
  data() {
    return {
      state: useRecipesStore(),
    }
  },

  computed: {},

  components: { LoginForm },
}
</script>
