<template>
  <form @submit.prevent="handleNext" class="basic-info-container">
    <input
      placeholder="Firstname..."
      type="text"
      v-model="user.firstName"
      required
    />
    <input
      placeholder="Lastname..."
      type="text"
      v-model="user.lastName"
      required
    />
    <input placeholder="Title..." type="text" v-model="user.title" required />
    <input placeholder="Email..." type="email" v-model="user.email" required />
    <button type="submit">Next -></button>
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
