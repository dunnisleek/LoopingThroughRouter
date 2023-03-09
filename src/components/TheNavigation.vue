<template>
  <ul class="nav-links" id="nav">
    <li class="links">
      <router-link to="/"> Home </router-link>
    </li>
    <li
      v-for="destination in destinations"
      :key="destination.name"
      class="links"
    >
      <router-link
        :to="{
          name: 'DestinationDetails',
          params: { slug: destination.slug },
        }"
      >
        {{ destination.name }}
      </router-link>
    </li>

    <li>
      <router-link to="/user">Dashboard</router-link>
    </li>
  </ul>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped>
ul {
  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  margin: auto;
}
li {
  list-style-type: none;
}
#nav {
  background: #d6d6d6;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  z-index: 2;
  top: 0;
  padding: 30px 0px;
}
</style>
