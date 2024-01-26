import { createRouter, createWebHistory } from 'vue-router'
import ListEmployer from "../views/ListEmployer.vue"
import Login from "../views/Login.vue"
import Ajouteremployer from "../views/Ajouteremployer.vue"
import Modifier from "../views/Modifier.vue"
import Supprimer from "../views/Supprimer.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login",
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
    },
    {
      path:"/ajout",
      name:"ajout",
      component:Ajouteremployer
    }, 
    {
      path:"/supprime",
      name:"supprimer",
      component:Supprimer
    },
    {
      path:"/modifier",
      name:"modifier",
      component:Modifier
    }
  ]
})

export default router
