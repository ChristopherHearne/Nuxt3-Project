<template>
  <form @submit.prevent="handleNext" class="field-container">
    <v-text-field
      class="text-field"
      label="Firstname..."
      @input="this.store.user.firstName = this.userData.firstName"
      v-model="userData.firstName"
      hide-details="auto"
      required
    />
    <v-text-field
      label="Lastname..."
      @input="this.store.user.lastName = this.userData.lastName"
      class="text-field"
      v-model="userData.lastName"
      hide-details="auto"
      required
    />
    <v-text-field
      label="Job title..."
      @input="this.store.user.title = this.userData.title"
      class="text-field"
      v-model="userData.title"
      hide-details="auto"
      required
    />
    <v-text-field
      label="Email..."
      @input="this.store.user.email = this.userData.email"
      class="text-field"
      type="email"
      v-model="userData.email"
      hide-details="auto"
      required
    />
  </form>
</template>

<script>

export default {
  props: {
    store: null,
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
