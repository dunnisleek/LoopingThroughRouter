<template>
  <div class="home">
    <h1>All Destination</h1>
    <div class="destination">
      <div v-for="destination in destinations" :key="destination.name">
        <!-- take note to add v-bind :to='' -->
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug },
          }"
        >
          <h2>{{ destination.name }}</h2>
          <p>{{ destination.id }}</p>
        </router-link>

        <figure>
          <router-link
            :to="{
              name: 'DestinationDetails',
              params: { slug: destination.slug },
            }"
          >
            <img :src="require(`@/assets/${destination.image}`)" />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";

export default {
  name: "HomeView",
  components: {},
  data() {
    return { destinations: store.destinations };
  },
};
</script>

<style scoped>
.destination {
  display: flex;
}
.destination img {
  width: 200px;
}
</style>
