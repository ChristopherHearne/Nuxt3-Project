<template>
  <div class="profile-name-container">
    <form @submit.prevent="handleSubmit">
      <v-text-field
        :class="{ error: error.set }"
        class="text-field"
        label="Profile name..."
        type="text"
        @input="this.store.user.profileName = this.profileName"
        v-model="profileName"
        required
      />
      <div class="error-msg" v-if="error.set">{{ error.message }}</div>
      <button type="submit">Create my profile</button>
    </form>
  </div>
</template>
<script>
import { setCookie } from '~~/tools/cookieHandler';
export default {
  props: {
    store: null,
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
	    profileName: '', 
    };
  },
  methods: {
    async handleSubmit() {
      const data = {...this.store.getUserData()};
      console.log(data)
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
