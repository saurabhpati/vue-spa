<template>
  <div class="content">
	<h2>Login</h2>
	<div class="field is-horizontal">
		<div class="field-label is-normal">
		  <label class="label">Username</label>
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <input v-model="username" class="input" type="text" placeholder="Your username">
			</div>
		  </div>
		</div>
	</div>
	<div class="field is-horizontal">
		<div class="field-label is-normal">
		  <label class="label">Password</label>
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <input v-model="password" class="input" type="password" placeholder="Your password">
			</div>
		  </div>
		</div>
	</div>
	<div class="field is-horizontal">
		<div class="field-label">
		  <!-- Left empty for spacing -->
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <button class="button is-primary" v-on:click="login()">
				Login
			  </button>
				<button class="button is-danger" v-on:click="logout()">
				Logout
			  </button>
			</div>
		  </div>
		</div>
	</div>
</div>
</template>

<script>
import authService from "../service/auth.service";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
			debugger;
      authService
        .login({ username: this.username, password: this.password })
					.then(function(response) {
						window.localStorage.setItem("token", response.token);
						window.localStorage.setItem("tokenExpiration", response.expiration);
					})
					.catch(function(reason) {
						window.alert("Could not Login!");
					});
		},
		
		logout() {
			window.localStorage.removeItem("token");
			window.localStorage.removeItem("tokenExpiration");
		}
  }
};
</script>

