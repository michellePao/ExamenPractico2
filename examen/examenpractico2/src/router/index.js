import { createRouter, createWebHistory } from 'vue-router'
import TareasList from '../views/TareasList.vue' 

const routes = [
  {
    path: '/',
    name: 'tareas',
    component: TareasList
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
