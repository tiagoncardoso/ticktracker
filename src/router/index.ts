import { createRouter, createWebHistory, RouteRecordRaw, } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/tracker',
        name: 'tracker',
        component: () => import('../views/TrackerView.vue'),
    },
    {
        path: '/currency',
        name: 'currency',
        component: () => import('../views/CurrencyView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL,),
    routes,
},);

export default router;
