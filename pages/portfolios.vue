<template>
  <div class="portfolios-container">
    <div
      class="portfolios-item"
      v-for="profile in profiles"
      @click="goToPortfolio(profile.profileName)">
      <div class="item-header" :style="hover ? 'display: none;' : ''" >
        <h2>{{ profile.firstName + " " + profile.lastName }}</h2>
        <div class="item-about">
          <span>{{profile.title}}</span>
        </div>
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
      <div class="item-avatar" :style="hover ? 'display: none;' : ''">
        <img :src="profile.avatar" class="avatar">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
      <div class="item-dev-info" v-if="hover">
        Frontend
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
<script>
export default {
  data(){
    return {
      hover: false
    }
  }
}
</script>
<style scoped>
.portfolios-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 3em;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2em;
  column-gap: 1em;
  margin: 0 2em 0 9%; 
  padding: 50px; 
}

.portfolios-item {
	height: auto; 
	width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8em;
  background-color: #1a1b21;
  border-radius: 20px;
  text-align: left;
  margin: 0 auto;
  padding: 4.5rem 1.5rem 4rem 1.5rem; 
  overflow: visible;
  transition: transform .8s ease; 
}

.portfolios-item:hover{
  transform: scale(1.02);
  filter: brightness(1.05);
}

.item--header{
	display: flex;
	justify-content: space-between;
  flex-direction: column;
  align-items: baseline;
  font-weight: 400; 
}

.icons--container {
  display: flex;
  padding: .4em 1em 1em 0; 
  justify-content: left;
  align-items: center;
  color: #fff; 
}
div a i{
  color: #918e9b;
  margin-right: 1em; 
}
h2{
  margin: 10px 0 10px 0; 
  font-weight: 300;
  letter-spacing: -0.02em;
  width: 250px;   
}

.item-about{
  margin: 10px 0 5px 0;
}

.avatar{
  border-radius: 50%;
  width: 4.5em; 
  height: auto;
}

.item-avatar{
  width: 100%;
  height: auto;
  display: flex; 
  align-items: center;
  justify-content: space-evenly;
}

span{
  color: #F3BF99;
}

.fa-chevron-right{
  margin-left: 40px;
  color: #918e9b; 
  font-size: 25px 
}
</style>
