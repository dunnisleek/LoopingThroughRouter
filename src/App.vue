<template>
  <div>
    <the-navigation></the-navigation>
    <router-view />
  </div>
</template>
<script>
import TheNavigation from "./components/TheNavigation.vue";
export default {
  components: { TheNavigation },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
}

nav a.vue-active-class {
  color: red;
}
</style>
