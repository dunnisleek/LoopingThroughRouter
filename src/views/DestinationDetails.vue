<template>
  <div>
    <GoBack />
    <!-- start of destination -->
    <section class="destinations">
      <h1>
        {{ destination.name }}
      </h1>
      <div class="destination-details">
        <img
          :src="require(`@/assets/${destination.image}`)"
          :alt="destination.name"
        />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <!-- end of destination -->
    <!-- start of experience -->
    <section class="experiences">
      <h2>Top experiences in {{ destination.name }}</h2>
      <div class="cards">
        <div
          v-for="experience in destination.experiences"
          :key="experience.slug"
          class="card"
        >
          <router-link
            :to="{
              name: 'experienceDetails',
              params: { experienceSlug: experience.slug },

              hash: '#experience', //this is the anchor hash
            }"
          >
            <img
              :src="require(`@/assets/${experience.image}`)"
              :alt="experience.name"
              class="image-exp"
            />
            <span class="card__text">
              {{ experience.name }}
            </span>
          </router-link>
        </div>
      </div>
      <router-view :key="$route.path" />
    </section>
  </div>
</template>

<script>
import store from "@/store.js";
import GoBack from "@/components/GoBack.vue";

export default {
  components: { GoBack },
  data() {
    return {
      // slug: this.$route.params.slug,
    };
  },
  //How to pass Vue Router params as props to components
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.slug == this.slug
      );
    },
  },
};
</script>
<style scoped>
.experience {
  padding: 40px 0px;
}
.cards {
  display: flex;
  flex-direction: row;
  gap: 40px;
}
.image-exp {
  width: 300px;
}
</style>
