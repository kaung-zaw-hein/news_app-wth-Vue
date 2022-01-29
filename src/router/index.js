import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Search from '../views/Search.vue'
import Category from '../views/Category.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/search/:searchkey',
    name: 'Search',
    component: Search,
    props:true
  },
  {
    path: '/category/:catego',
    name: 'Category',
    component: Category,
    props:true
  },
  {
    path: '/:catchAll(.*)*',
    redirect: {name: 'Home'},
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
