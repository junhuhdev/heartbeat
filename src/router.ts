import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Profile from './views/Profile.vue';
import Tracker from './views/Tracker.vue';
import Dashboard from './views/Dashboard.vue';
import Daily from './views/Daily.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/login', name: 'login', component: Login},
        {path: '/profile', name: 'profile', component: Profile},
        {path: '/dashboard', name: 'dashboard', component: Dashboard},
        {path: '/tracker', name: 'tracker', component: Tracker},
        {path: '/daily', name: 'daily', component: Daily},
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
    ],
});
