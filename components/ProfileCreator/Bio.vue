<template>
	<form @submit.prevent="handleNext" class="bio-container">
	  <input
		placeholder="Tell us a little about yourself"
		type="text"
		v-model="userData.about"
		required
	  />
	  <input
		placeholder="Tell us about your interests"
		type="text"
		v-model="userData.interests"
		required
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
	  handleNext(){
		  // Logic to go to the next input section
	  }
	}
  };
  </script>
  <style></style>
  