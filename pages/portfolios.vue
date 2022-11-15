<template>
  <div class="portfolios-container">
    <div
      class="portfolios-item"
      v-for="profile in profiles"
      @click="goToPortfolio(profile.profileName)"
    >
      <div class="item-header">
        <h2>{{ profile.firstName + profile.lastName }}</h2>
        <div class="icons--container">
          <a :href="profile.facebook" class="facebook--icon" target="_blank"
            ><i class="fa-brands fa-facebook-f"></i
          ></a>
          <a :href="profile.instagram" class="instagram--icon" target="_blank"
            ><i class="fa-brands fa-instagram"></i
          ></a>
          <a :href="profile.linkedin" class="linkedin--icon" target="_blank"
            ><i class="fa-brands fa-linkedin"></i
          ></a>
          <a :href="profile.github" class="github--icon" target="_blank"
            ><i class="fa-brands fa-github"></i
          ></a>
        </div>
      </div>
      <div class="item-about">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script setup>
const app = useNuxtApp()
const profiles = await app.$profileRepository.getAuthenticatedProfiles()

const goToPortfolio = (profileName) => {
  navigateTo(`/browse/${profileName}`);
};
</script>
<style scoped>
.portfolios-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 3em;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2em;
  column-gap: 1em;
  margin: 0 auto;
  margin-left: 8em;
}

.portfolios-item {
	height: auto; 
	width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  padding: 0.8em;
  background-color: #1a1b21;
  border-radius: 20px;
  text-align: center;
}

.item--header{
	display: flex;
	justify-content: space-between; 
}

.icons--container {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  color: #fff; 
}
</style>
