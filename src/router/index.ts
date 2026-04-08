import { createRouter, createWebHistory } from 'vue-router'

// imports des pages
import Home from '../pages/Home.vue'
import Board from '../pages/Board.vue'
import LandingPage from '../pages/LandingPage.vue'
import Login from '../pages/login/Login.vue'
import Signup from '../pages/login/Signup.vue'

const routes = [
    {
        path: '/',
        name: 'landing',
        component: LandingPage
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/boards',
        name: 'board',
        component: Board
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router