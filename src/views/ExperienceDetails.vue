<template>
  <section>
    <h1>This is an about Experiences</h1>
    <h2 id="experience">{{ experience.name }}</h2>
    <div class="exper-image">
      <img :src="require(`@/assets/${experience.image}`)" />
      <p>{{ experience.description }}</p>
    </div>
  </section>
</template>

<script>
import store from "@/store.js";
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
    experienceSlug: {
      type: String,
      required: true,
    },
  },

  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.slug === this.slug
      );
    },
    experience() {
      return this.destination.experiences.find(
        (experience) => experience.slug === this.experienceSlug
      );
    },
  },
};
</script>
