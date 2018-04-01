import Vue from 'vue';
import VueRouter from 'vue-router';
import Category from '../../../src/themes/Category.vue';
import store from '../../../src/vuex/index.js';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [{
        path: '/',
        component: Category
    }]
});

const component = new Vue({
    el: document.createElement('div'),
    router,
    store,
    render: h => h('router-view')
})

// describe('Category.vue', () => {
//     it('should load front end links', (done) => {
//         store.watch((state) => {
//             return state.postsModule.posts;
//         }, () => {
//             expect(component.$el.querySelectorAll('.column').length).to.equal(6);
//             done();
//         });
//     })
// });
