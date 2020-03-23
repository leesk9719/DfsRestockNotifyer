import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from "../components/Product";
import LoginForm from '../components/LoginForm'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Product',
        component: Product
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'LoginForm',
        component: LoginForm
    }
]

const router = new VueRouter({
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

export default router
