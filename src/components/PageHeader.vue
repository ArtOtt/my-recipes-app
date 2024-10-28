<template>
  <header>
    <h2>{{ title }}</h2>
    <p v-show="sub">{{ sub }}</p>
  </header>
</template>

<script>
export default {
  props: ['title', 'sub'],
}
</script>

<style scoped>
header {
  max-width: fit-content;
  padding-block: 1rem;
  border-bottom: 1px solid midnightblue;
}
h2 {
  color: midnightblue;
  font-weight: 400;
}

p {
  font-size: medium;
  color: darkgray;
}
</style>
