import { createRouter, createWebHistory, RouteRecordRaw, } from 'vue-router';
import HomeView from '../views/HomeView.vue';

/* eslint-disable no-alert, no-console */
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/tracker',
        name: 'tracker',
        component: () => import(/* webpackChunkName: "tracker" */ '../views/TrackerView.vue'),
    },
    {
        path: '/currency',
        name: 'currency',
        component: () => import(/* webpackChunkName: "currency" */ '../views/CurrencyView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL,),
    routes,
},);
/* eslint-enable no-alert */
export default router;
