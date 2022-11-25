<template>
  <div class="portfolios-container">
    <div
      class="portfolios-item"
      v-for="({profileName, firstName, lastName, title, avatar, facebook, instagram, linkedin, github}, index) in profiles"
      :key="id"
    >
      <div class="item-header">
        <div
          class="item-header-default"
          :style="hover && currentIndex === index ? 'display: none;' : ''"
        >
          <div
            class="item-name"
            @click="goToPortfolio(profileName)"
          >
            <h2>{{ firstName + " " + lastName }}</h2>
          </div>
          <div class="item-about">
            <span>{{ title }}</span>
          </div>
          <div class="icons--container">
            <a :href="facebook" class="facebook--icon" target="_blank"
              ><i class="fa-brands fa-facebook-f"></i
            ></a>
            <a :href="instagram" class="instagram--icon" target="_blank"
              ><i class="fa-brands fa-instagram"></i
            ></a>
            <a :href="linkedin" class="linkedin--icon" target="_blank"
              ><i class="fa-brands fa-linkedin"></i
            ></a>
            <a :href="github" class="github--icon" target="_blank"
              ><i class="fa-brands fa-github"></i
            ></a>
          </div>
        </div>
        <div
          class="item-header-hover"
          :style="hover && currentIndex === index ? '' : 'display: none'"
        >
          <h2>Skills</h2>
          <h3>Frontend</h3>
          <div class="skill-progressbar-frontend">
            <div></div>
          </div>
          <h3>Backend</h3>
          <div class="skill-progressbar-backend">
            <div></div>
          </div>
        </div>
      </div>
      <div class="item-avatar">
        <img class="avatar" :src="avatar" />
      </div>
      <div
        class="item-arrow"
        @click="goToPortfolio(profileName)"
        @mouseover="
          hover = true;
          currentIndex = index;
        "
        @mouseout="
          hover = false;
          currentIndex = -1;
        "
      >
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
const app = useNuxtApp();
const profiles = await app.$profileRepository.getAuthenticatedProfiles();
const widthFrontend = ref();
const widthBackend = ref();
debugger; 
widthFrontend.value = "10%";
widthBackend.value = "20%";


const goToPortfolio = (profileName) => {
  navigateTo(`/browse/${profileName}`);
};
</script>
<script>
export default {
  data() {
    return {
      currentIndex: -1,
      hover: false,
    };
  },
};
</script>
<style scoped>
.portfolios-container {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1em;
  column-gap: 2em;
  margin: 0 2em 0 9%;
  padding: 50px;
}

.portfolios-item {
  max-height: 150px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.8em;
  background-color: #1a1b21;
  border-radius: 20px;
  text-align: left;
  margin: 0 auto;
  padding: 4.5rem 1.5rem 4.5rem 1.5rem;
  overflow: visible;
  transition: transform 0.4s ease-out;
  position: relative;
}

.portfolios-item:hover {
  transform: scale(1.02);
  filter: brightness(1.05);
}

.item-header {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  font-weight: 100;
  width: 100%;
  height: 125px;
}

.item-header-default {
  animation: fadeIn 0.8s ease-out;
}

.icons--container {
  display: flex;
  padding: 0.4em 1em 1em 0;
  justify-content: left;
  align-items: center;
  color: #fff;
  margin-top: 15px;
}
div a i {
  color: #918e9b;
  margin-right: 1em;
}
h2 {
  margin: 10px 0 5px 0;
  font-weight: 100;
  letter-spacing: -0.02em;
  width: 250px;
}

.item-about {
  margin: 10px 0 5px 0;
}

.avatar {
  border-radius: 50%;
  width: 4.5em;
  height: auto;
}

.item-avatar {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

span {
  color: #f3bf99;
}

.fa-chevron-right {
  margin-left: 40px;
  color: #918e9b;
  font-size: 25px;
  transition: transform 0.7s ease;
}

.hide {
  display: none;
}

.skill-progressbar-frontend {
  background-color: #fff;
  width: 90%;
  border-radius: 13px;
  padding: 3px;
  margin-bottom: 6px;
}

.skill-progressbar-frontend > div {
  background: #314755; 
  background: -webkit-linear-gradient(
    to right,
    #26a0da,
    #314755
  ); 
  background: linear-gradient(
    to right,
    #26a0da,
    #314755
  ); 

  width: v-bind(widthFrontend);
  height: 10px;
  border-radius: 10px;
  animation: slowLoadFrontend 1s ease-out;
}

.skill-progressbar-backend {
  background-color: #fff;
  width: 90%;
  border-radius: 13px;
  padding: 3px;
}

.skill-progressbar-backend > div {
  background: #314755; 
  background: -webkit-linear-gradient(
    to right,
    #26a0da,
    #314755
  );
  background: linear-gradient(
    to right,
    #26a0da,
    #314755
  );

  width: v-bind(widthBackend);
  height: 10px;
  border-radius: 10px;
  animation: slowLoadBackend 1s ease-out;
}

.item-header-hover {
  display: block;
  width: 100%;
  height: 125px;
  margin: 0 auto;
  animation: fadeIn 0.8s ease-in;
  opacity: 1;
}

.item-header-hover h3 {
  font-size: 13px;
  margin: 0 0 7px 0;
  padding: 0;
}

.item-arrow,
.item-name {
  cursor: pointer;
}

.item-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease 0s;
}
.item-arrow:hover .fa-chevron-right {
  transform: rotate(180deg);
}

/* Could be moved to the assets/animations folder */
@keyframes fadeIn {
  0% {
    filter: brightness(1); 
    opacity: 0;

  }

  1% {
    filter: brightness(1);
    opacity: 0;
  }

  100% {
    filter: brightness(1.03);
    opacity: 1;
  }
}

@keyframes slowLoadFrontend {
  0% {
    width: 0%;
  }
  1% {
    width: 0%;
  }
  100% {
    width: v-bind(widthFrontend);
  }
}

@keyframes slowLoadBackend {
  0% {
    width: 0%;
  }
  1% {
    width: 0%;
  }
  100% {
    width: v-bind(widthBackend);
  }
}
</style>
