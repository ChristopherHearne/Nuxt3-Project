<template>
  <form @submit.prevent="handleNext" class="basic-info-container">
    <v-text-field
      class="firstname-field"
      label="Firstname..."
      v-model="userData.firstName"
      hide-details="auto"
      required
    />
    <input
      placeholder="Lastname..."
      type="text"
      v-model="userData.lastName"
      required
    />
    <input placeholder="Title..." type="text" v-model="userData.title" required />
    <input placeholder="Email..." type="email" v-model="userData.email" required />
    <button type="submit">Next -></button>
  </form>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  data(){
	return{
		userData: {}
	}
  },
  methods: {
	handleNext(){
		// Logic to go to the next input section
	}
  }
};
</script>

<style scoped>
  .firstname-field{
    color: #fff !important;
    width: 50% !important;
  }

</style>
