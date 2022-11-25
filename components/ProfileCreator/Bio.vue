<template>
	<form @submit.prevent="handleNext" class="bio-container">
	  <input
		placeholder="Tell us a little about yourself"
		type="text"
		v-model="user.about"
		required
	  />
	  <input
		placeholder="Tell us about your interests"
		type="text"
		v-model="user.interests"
		required
	  />
	</form>
  </template>
  
  <script>
  export default {
	props: {
	  user: Object,
	},
	methods: {
	  handleNext(){
		  // Logic to go to the next input section
	  }
	}
  };
  </script>
  <style></style>
  