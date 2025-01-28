export default defineNuxtRouteMiddleware((to, from) => {
  const store = useRecipesStore();

  if (!store.isLoggedIn && to.path != "/login") {
    return navigateTo("/login");
  }
});
