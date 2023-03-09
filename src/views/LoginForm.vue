<template>
  <div class="login">
    <h1>Login</h1>
    <div class="form">
      <label for="username">Username</label>
      <input type="text" v-model="username" name="username" class="input" />
      <label for="password">Password</label>
      <input v-model="password" type="password" class="input" />
      <button @click="login" class="btn">Login</button>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    login() {
      //Authetic API
      store.user = this.username;
      this.$router.push("/user");
    },
  },
};
</script>
