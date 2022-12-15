<template>
  <form @submit.prevent="handleNext" class="field-container">
    <v-text-field
      label="Link to Facebook..."
      @input="handleChange"
      class="text-field"
      type="url"
      hide-details="auto"
      v-model="userData.facebook"
    />
    <v-text-field
      label="Link to Instagram..."
      @input="handleChange"
      class="text-field"
      type="url"
      hide-details="auto"
      v-model="userData.instagram"
    />
    <v-text-field
      label="Link to Github..."
      @input="handleChange"
      class="text-field"
      type="url"
      hide-details="auto"
      v-model="userData.github"
    />
    <v-text-field
      label="Link to LinkedIn..."
      @input="handleChange"
      class="text-field"
      type="url"
      hide-details="auto"
      v-model="userData.linkedin"
    />
    <v-text-field
      label="Link to website/project..."
      @input="handleChange"
      class="text-field"
      type="url"
      hide-details="auto"
      v-model="userData.website"
    />
  </form>
</template>

<script>
import { useProfileData } from '~~/stores/profiledata';

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
    handleChange() {
      useProfileData().updateUserData(this.userData);
    },
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
