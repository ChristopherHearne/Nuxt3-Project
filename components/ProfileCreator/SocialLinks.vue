<template>
  <form @submit.prevent="handleNext" class="links-container">
    <input
      placeholder="Link to Facebook..."
      type="url"
      v-model="user.facebook"
    />
    <input
      placeholder="Link to Instagram..."
      type="url"
      v-model="user.instagram"
    />
    <input
      placeholder="Link to Github..."
      type="url"
      v-model="user.github"
    />
    <input
      placeholder="Link to LinkedIn..."
      type="url"
      v-model="user.linkedin"
    />
    <input
      placeholder="Link to website/project..."
      type="url"
      v-model="user.website"
    />
  </form>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  methods: {
    handleNext() {
      // Logic to go to the next input section
    },
  },
};
</script>
<style></style>
