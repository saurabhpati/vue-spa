import Vue from 'vue';
import VueRouter from 'vue-router';
import Category from './themes/Category.vue';
import Login from './themes/Login.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    //mode: 'history', // This is not working for now, see later.
    linkActiveClass: 'is-active',
    routes: [{
        path: '/category/front-end',
        component: Category
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/',
        redirect: '/category/front-end'
    }]
});

export default router;