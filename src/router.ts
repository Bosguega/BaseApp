// src/router.ts
import { createRouter, createWebHistory } from 'vue-router'
import TelaStatus from './views/TelaStatus.vue'

const routes = [
  {
    path: '/ajuda/status',
    name: 'status',
    component: TelaStatus
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
