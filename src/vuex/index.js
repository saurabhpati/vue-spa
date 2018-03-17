import Vue from 'vue';
import Vuex from 'vuex';
import { resolve } from 'url';
import authService from "../service/auth.service";
import { debug } from 'util';

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
        login(context, credentials) {
            debugger;
            return authService
                .login(credentials)
                .then((response) => {
                    context.commit('login', response);
                });
        },
        logout(context) {
            context.commit('logout');
        }
    },
    mutations: {
        login(state, data) {
            debugger;
            if (typeof window != 'undefined') {
                window.localStorage.setItem("token", data.token);
                window.localStorage.setItem("tokenExpiration", data.expiration);
            }

            state.isAuthenticated = true;
        },
        logout(state) {
            if (typeof window != 'undefined') {
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("tokenExpiration");
            }

            state.isAuthenticated = false
        }
    }
});

if (typeof window != 'undefined') {
    document.addEventListener('DOMContentLoaded', (event) => {
        let expiration = window.localStorage.getItem("tokenExpiration");
        let timeStamp = new Date().getTime() / 1000;
    
        if (expiration != null && parseInt(expiration) - timeStamp > 0) {
          state.isAuthenticated = true;
        }
    });  
}

export default store;