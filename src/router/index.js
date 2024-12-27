import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipesView from '@/views/RecipesView.vue'
import SingleRecipe from '@/views/SingleRecipe.vue'
import CategoryView from '@/views/CategoryView.vue'
import LoginView from '@/views/LoginView.vue'
import { useRecipesStore } from '@/stores/recipes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        public: false,
      },
      component: HomeView,
    },
    {
      path: '/category/:id',
      name: 'category',
      meta: {
        public: false,
      },
      component: CategoryView,
    },
    {
      path: '/recipes',
      name: 'recipes',
      meta: {
        public: false,
      },
      component: RecipesView,
    },
    {
      path: '/recipes/:id',
      name: 'recipe',
      meta: {
        public: false,
      },
      component: SingleRecipe,
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        public: true,
      },
      component: LoginView,
    },
  ],
})

router.beforeEach(to => {
  const store = useRecipesStore()

  if (!store.isLoggedIn && !to.meta.public) {
    return { name: 'login' }
  }
})

export default router
