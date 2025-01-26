<script setup lang="ts">
import { useRecipesStore } from "./stores/recipes";

const test = useRecipesStore().test;
</script>

<template>
  <div>
    <h2>Hallo Welt</h2>
    <h2>{{ test }}</h2>
  </div>
</template>
