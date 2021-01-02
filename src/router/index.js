import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'
import BlogSingle from '../views/BlogSingle.vue'
import Contact from '../views/Contact.vue'
import Service from '../views/Service.vue'
import Doctor from '../views/Doctor.vue'
import PageNotFound from '../views/404.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    // {
    //     path: '/exercise',
    //     name: 'About',
    //     component: About
    // },
    {
        path: '/service',
        name: 'Service',
        component: Service
    },
    {
        path: '/doctor',
        name: 'Doctor',
        component: Doctor
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/blog-single',
        name: 'BlogSingle',
        component: BlogSingle
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: PageNotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router