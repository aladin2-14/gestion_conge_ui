import { createRouter, createWebHistory } from 'vue-router'
import ListEmployer from "../views/ListEmployer.vue"
import List_conge from "../views/List_conge.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/list",
      name:"listemployer",
      component:ListEmployer
    },
    {
      path:"/list_conge",
      name:"listeconge",
      component:List_conge
    }
  ]
})

export default router
