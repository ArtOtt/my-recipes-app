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
  padding-block: 0.5rem;
  border-bottom: 1px solid midnightblue;
}
h2 {
  color: midnightblue;
  font-weight: 400;

  padding-top: 1rem;
}

p {
  font-size: medium;
  color: rgb(41, 36, 36);
  padding-top: 1rem;
}
</style>
