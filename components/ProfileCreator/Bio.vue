<template>
  <form @submit.prevent="handleNext" class="field-container">
    <v-text-field
      label="Tell us a little about yourself"
      @input="this.store.user.about = this.userData.about"
      class="text-field"
      v-model="userData.about"
      required
    />
    <v-text-field
      label="Tell us about your interests"
      @input="this.store.user.interests = this.userData.interests"
      class="text-field"
      v-model="userData.interests"
      required
    />
  </form>
</template>

<script>

export default {
  props: {
    store: null
  },
  data() {
    return {
      userData: {},
    };
  },
};
</script>
<style scoped>
.text-field {
  color: #fff !important;
  width: 100% !important;
  padding: 1rem !important;
}

.field-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
