import { createRouter, createWebHistory } from "vue-router"
import DataGrid from '../Pages/DataGrid.vue'
import CoromonPage from '../Pages/CoromonPage.vue'

const routes = [
  { path: '/', component: DataGrid },
  { path: '/coromon/:id', component: CoromonPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;