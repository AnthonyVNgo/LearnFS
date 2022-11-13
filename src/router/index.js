import { createRouter, createWebHistory } from 'vue-router'
import RandomLetterView from '../views/RandomLetterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'random-letter',
      component: RandomLetterView
    },
    {
      path: '/random-word',
      name: 'random-word',
      component: () => import('../views/RandomWordView.vue')
    }
  ]
})

export default router
