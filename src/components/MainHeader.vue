<template>
  <header>
    <h1>Das Kochbuch</h1>
    <nav>
      <menu>
        <li><router-link :to="{ name: 'home' }"> Startseite</router-link></li>
        <li><router-link :to="{ name: 'recipes' }"> Rezepte</router-link></li>
      </menu>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: midnightblue;
  color: antiquewhite;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
}

menu {
  display: flex;
  align-items: center;

  gap: 1.5rem;

  list-style-type: none;
}

a {
  color: antiquewhite;
}
</style>
