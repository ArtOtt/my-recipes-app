<template>
  <article
    class="my-10 border-1 bg-[#345b4f] rounded-xl shadow-lg hover:shadow-amber-200 overflow-hidden"
  >
    <div class="text-white">
      <div class="relative">
        <img
          class="mb-3 w-full max-h-[216px] object-cover"
          :src="recipe.img"
          alt=""
        />

        <div
          class="absolute inset-y-10 left-6 rounded-lg flex items-center justify-center"
        >
          <h3 class="md:text-6xl text-4xl font-black drop-shadow-xl text-white">
            {{ recipe.name }}
          </h3>
        </div>
      </div>
      <div class="m-6">
        <p class="mb-6 text-white text-xl">
          {{ recipe.description }}
        </p>

        <NuxtLink
          class="text-xl bg-sky-500 text-white px-9 py-3 rounded"
          :to="`singleRecipe/${recipe._id}`"
        >
          Zum Rezept
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    recipe: Object,
  },
};
</script>
