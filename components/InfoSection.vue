<template lang="">
  <div class="info--container">
      <div class="info--text">
          <img :src="profile.avatar" class="info--image"/>
          <h2 class="info--header">{{`${profile.firstName} ${profile.lastName}`}}</h2>
          <h4 class="info--jobtitle">{{profile.title}}</h4>
          <span class="info--website">{{profile.website}}</span>
      </div>
      <div class="info--buttons">
          <a :href="`mailto:${profile.email}`" target="_blank">
            <button class="info--emailbtn">
            <i class="fa-solid fa-envelope"></i>
                Email
            </button>   
          </a>
          <a :href="profile.linkedin" target="_blank">
            <button class="info--linkedbtn">
            <i id="icon--linkedin" class="fa-brands fa-linkedin"></i>
                LinkedIn
            </button> 
          </a>
      </div>
  </div>
</template>
<script>
export default {
  name: 'InfoSection', 
  props: {
    profile: {}
  }
}
</script>
<style scoped>
a{
  text-decoration: none; 
}
.info--container, button{
    font-family: 'Inter', sans-serif; 
}
.info--container{
  background-color: #1A1B21;
  width: 317px;
  height: auto;
  margin: 0 auto;  
}
.info--text{
  text-align: center; 
  display: block; 
  justify-content: center;
  align-items: center;
}

.info--image{
  width: auto;
  height: 317px;
  border-radius: 6px 6px 0 0;
}

.info--buttons {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
}

.info--buttons button{
  display: flex;
  align-items: center;
  justify-content: center; 
  width: 115px; 
  height: 34px;
  margin: 10px;
  text-align: center; 
}

.fa-envelope{
  margin-right: 8px;
}

#icon--linkedin{
  color: #ffffff; 
  margin-right: 8px; 
}

.info--header{
  font-weight: 700;
  color: #fff; 
  font-size: 25px;
  font-style: normal;
  line-height: 30px; 
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 0; 
}

.info--jobtitle{
  font-weight: 400;
  font-size: 12.8px;
  line-height: 15.49px;
  color: #F3BF99;
  margin: 6px 0 6px 0;  
}

.info--website{
  font-weight: 400;
  font-size: 10.24px;
  line-height: 15.36px; 
  color: #F5F5F5;
}

.info--emailbtn{
  color: #374151;
  border-radius: 8px #1a1b21; 
  cursor: pointer;
}

.info--linkedbtn{
  border-radius: 8px;  
  background: #5093E2;
  color: #ffffff;
  cursor: pointer;
}
</style>