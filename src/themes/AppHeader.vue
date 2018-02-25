<template>
    <nav class="nav has-shadow">
        <div class="container">
            <router-link to="/" exact>
                <img src="http://bit.ly/vue-img" alt="Vue SPA"/>
            </router-link>
            <router-link to="/" class="nav-item is-tab" exact>Home</router-link>
            <router-link to="/login" class="nav-item is-tab">Login</router-link>
        </div>
    </nav>
</template>
