<template>
  <header class="max-w-fit py-2">
    <h2 class="text-black-400 font-black pt-1">{{ title }}</h2>
    <p v-show="sub" class="text-gray-700 text-lg pt-3">{{ sub }}</p>
  </header>
</template>

<script>
export default {
  props: ["title", "sub"],
};
</script>
