<template>
  <form @submit.prevent="handleNext" class="field-container">
    <v-text-field
      label="Link to Facebook..."
      @input="this.store.user.facebook = this.userData.facebook"
      class="text-field"
      type="url"
      hide-details="auto"
      v-model="userData.facebook"
    />
    <v-text-field
      label="Link to Instagram..."
      @input="this.store.user.instagram = this.userData.instagram"
      class="text-field"
      type="url"
      hide-details="auto"
      v-model="userData.instagram"
    />
    <v-text-field
      label="Link to Github..."
      @input="this.store.user.githbub = this.userData.github"
      class="text-field"
      type="url"
      hide-details="auto"
      v-model="userData.github"
    />
    <v-text-field
      label="Link to LinkedIn..."
      @input="this.store.user.linkedin = this.userData.linkedin"
      class="text-field"
      type="url"
      hide-details="auto"
      v-model="userData.linkedin"
    />
    <v-text-field
      label="Link to website/project..."
      @input="this.store.user.website = this.userData.website"
      class="text-field"
      type="url"
      hide-details="auto"
      v-model="userData.website"
    />
  </form>
</template>

<script>

export default {
  props: {
    store: null,
  },
  data(){
	return {
		userData: {}
	}
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
