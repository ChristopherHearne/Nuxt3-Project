<template>
  <form @submit.prevent="handleNext" class="links-container">
    <input
      placeholder="Link to Facebook..."
      type="url"
      v-model="userData.facebook"
    />
    <input
      placeholder="Link to Instagram..."
      type="url"
      v-model="userData.instagram"
    />
    <input
      placeholder="Link to Github..."
      type="url"
      v-model="userData.github"
    />
    <input
      placeholder="Link to LinkedIn..."
      type="url"
      v-model="userData.linkedin"
    />
    <input
      placeholder="Link to website/project..."
      type="url"
      v-model="userData.website"
    />
	<button type="submit">Next -></button>
  </form>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  data(){
	return {
		userData: {}
	}
  },
  methods: {
    handleNext() {
      // Logic to go to the next input section
    },
  },
};
</script>
<style></style>
