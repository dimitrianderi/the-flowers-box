import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('@/views/Main.vue'),
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/builder',
        name: 'Builder',
        component: () => import('@/views/Builder.vue'),
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/faq',
        name: 'Faq',
        component: () => import('@/views/Faq.vue'),
        meta: {
            layout: 'main'
        },
    },
    {
        path: '/faq/:topic(creating-bouquets|another-topic|yet-another-topic)',
        name: 'Section',
        component: () => import('@/views/sections/Section.vue'),
        meta: {
            layout: 'main'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

export default router