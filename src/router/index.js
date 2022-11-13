import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'random-letter',
      component: () => import('../views/RandomLetterView.vue')
    },
    {
      path: '/random-word',
      name: 'random-word',
      component: () => import('../views/RandomWordView.vue')
    },
    {
      path: '/fs-typewriter',
      name: 'fs-typewriter',
      component: () => import('../views/FSTypeWriterView.vue')
    }
  ]
})

export default router
