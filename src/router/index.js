import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResultView from '../views/ResultView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
		{
			path: '/result/:firstName/:crushName',
			name: 'result',
			component: ResultView,
			props: true,
		}
  ]
})

export default router
