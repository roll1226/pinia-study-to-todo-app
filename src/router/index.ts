import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CompletedTodosViewVue from '@/views/CompletedTodosView.vue'
import IncompleteTodosViewVue from '@/views/IncompleteTodosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/completedTodos',
      name: 'completedTodos',
      component: () => CompletedTodosViewVue
    },
    {
      path: '/incompleteTodos',
      name: 'incompleteTodos',
      component: () => IncompleteTodosViewVue
    }
  ]
})

export default router
