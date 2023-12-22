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
            layout: 'main',
        },
        children: [
            {
                path: 'creating-bouquets',
                name: 'Creating Bouquets',
                component: () => import('@/views/sections/FaqSection.vue'),
                meta: {
                    layout: 'main',
                }
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    scrollBehavior() {
        window.scrollTo({
            top: 0,
        });
    }
})

export default router