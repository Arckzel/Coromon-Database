import { createRouter, createWebHistory } from "vue-router"
import DataGrid from '../Pages/DataGrid.vue'

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
  { path: '/', component: DataGrid },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;