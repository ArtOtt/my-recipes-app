<template>
  <header class="max-w-fit py-2 border-b-2 border-sky-800">
    <h2 class="text-black-400 text-2xl font-medium pt-1">{{ title }}</h2>
    <p v-show="sub" class="text-lg text-gray-700 pt-3">{{ sub }}</p>
  </header>
</template>

<script>
export default {
  props: ['title', 'sub'],
}
</script>
