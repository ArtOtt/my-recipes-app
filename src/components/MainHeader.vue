<template>
  <header class="bg-sky-900 text-white flex justify-between items-baseline p-4">
    <h1 class="text-2xl">Das Kochbuch</h1>
    <nav>
      <menu class="flex gap-8">
        <li><router-link :to="{ name: 'home' }"> Startseite</router-link></li>
        <li><router-link :to="{ name: 'recipes' }"> Rezepte</router-link></li>
      </menu>
    </nav>
  </header>
</template>
