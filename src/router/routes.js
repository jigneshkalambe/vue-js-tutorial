import { ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/components/Home.vue'),
  },
  {
    name: 'A',
    path: '/A',
    component: () => import('@/components/A.vue'),
  },
  {
    name: 'B',
    path: '/B',
    component: () => import('@/components/B.vue'),
  },
  {
    name: 'C',
    path: '/C',
    component: () => import('@/components/C.vue'),
  },
  {
    name: 'Profile',
    path: '/profile',
    component: () => import('@/components/Profile.vue'),
  },
  {
    name: 'ProfileWithName',
    path: '/profile/:name',
    component: () => import('@/components/Profile.vue'),
  },
  {
    name: 'ProfileWithId',
    path: '/profile/id/:id',
    component: () => import('@/components/Profile.vue'),
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: () => import('@/components/PageNotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const isLoading = ref(false)

router.beforeEach((to, from, next) => {
  isLoading.value = true
  setTimeout(() => {
    next()
  }, 1000)
})

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 300)
})

export default router

export { isLoading }
