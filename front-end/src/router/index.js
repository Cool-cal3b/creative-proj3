import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Artists from "../views/Artists.vue"
import NearMe from "../views/NearMe.vue"
import MyTickets from "../views/MyTickets.vue"
import Admin from "../views/Admin.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/artists',
    name: 'Artists',
    component: Artists
  },
  {
    path: "/near",
    name: "NearMe",
    component: NearMe
  },
  {
    path: "/tickets",
    name: "myTickets",
    component: MyTickets
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
