import { createRouter, createWebHistory } from 'vue-router'
import ListEmployer from "../views/ListEmployer.vue"
import Login from "../views/Login.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/list",
    },
    {
      path:"/list",
      name:"listemployer",
      component:ListEmployer
    },
    {
      path:"/login",
      name:"login",
      component:Login
    }
  ]
})

export default router
