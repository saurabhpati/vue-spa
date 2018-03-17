import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    isAuthenticated: false
};

const store = new Vuex.Store({ 
    state,
    getters: {
        isAuthenticated: function (state) {
            return state.isAuthenticated;
        }
    },
    actions: {
        logout(context) {

        }
    }
});

export default store;