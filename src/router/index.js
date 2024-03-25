import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductsList from '@/views/ProductsList.vue'
import BusinessList from '@/views/BusinessList.vue'
import UserProfile from '@/views/UserProfile.vue'

const router = createRouter({
  scrollBehavior: function() {
    return { x: 0, y: 0 };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/user/profile',
      component: UserProfile
    },
    {
      path: '/products',
      component: ProductsList
    },
    {
      path: '/businesses',
      component: BusinessList
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
