<template>
  <div class="profile-name-container">
    <form @submit.prevent="handleSubmit">
      <v-text-field
        :class="{ error: error.set }"
        class="text-field"
        label="Profile name..."
        type="text"
        v-model="userData.profileName"
        required
      />
      <div class="error-msg" v-if="error.set">{{ error.message }}</div>
      <button type="submit">Create my profile</button>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    user: Object,
  },
  data() {
    return {
      error: {
        set: false,
        message: null,
      },
      post: {
        success: false,
        message: null,
      },
	  userData: {}
    };
  },
  methods: {
    async handleSubmit() {
      const data = { ...this.user };
      const response = await this.$profileRepository.create(data);

      if (!response.ok) {
        const request = await response.json();
        console.log(
          `Server responded with ${response.status}: ${request.Error[0]}`
        );
        this.error.message = request.Error[0];
        this.error.set = true;
        return;
      }

      const results = await response.json();
      console.log(
        `Success: User ${results.profileName} was created with a status of ${response.status}`
      );
      this.post.success = true;
      this.post.message = `${results.profileName} was created and added to the database successfully`;
      setCookie("active_user", JSON.stringify(results), 1);
      await navigateTo(`/myprofile/${results.profileName}`);
    },
  },
};
</script>
<style scoped>
.error-msg {
  color: red;
  font-size: 15px;
  font-weight: 400;
}

.error {
  border-color: red;
}

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
