import { createRouter, createWebHistory } from "vue-router"
import DataGrid from '../Pages/DataGrid.vue'
import CoromonPage from '../Pages/CoromonPage.vue'
import NotFound from '../Pages/NotFound.vue'

const routes = [
  { path: '/', component: DataGrid },
  { path: '/coromon/:id', component: CoromonPage },
  { path: "/:catchAll(.*)", component: NotFound, name: "NotFound"},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;