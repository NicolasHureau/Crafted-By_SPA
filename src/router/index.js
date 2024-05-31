import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductsList from '@/views/ProductsList.vue'
import BusinessList from '@/views/BusinessList.vue'
import UserProfile from '@/views/UserProfile.vue'
import CartView from '@/views/CartView.vue'
import BusinessDetail from '@/components/BusinessDetail.vue'
import ProductDetail from '@/components/ProductDetail.vue'
import UserProfilePassword from '@/components/UserProfilePassword.vue'
import UserAddress from '@/components/UserAddress.vue'
import BusinessRegister from '@/components/BusinessRegister.vue'
import UserBusiness from '@/components/UserBusiness.vue'

const router = createRouter({
  scrollBehavior: function() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
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
      path: '/user/password',
      component: UserProfilePassword
    },
    {
      path: '/user/address',
      component: UserAddress
    },
    {
      path: '/user/businessregister',
      component: BusinessRegister
    },
    {
      path: '/user/business',
      component: UserBusiness
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsList
    },
    {
      path: '/products/:id',
      component: ProductDetail
    },
    {
      path: '/business',
      name: 'businesses',
      component: BusinessList
    },
    {
      path: '/business/:id',
      component: BusinessDetail
    },
    {
      path: '/cart',
      component: CartView
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
