<template>
  <div class="profile-body">
    <div class="info-container">
      <InfoSection :profile="profile" />
      <AboutSection :profile="profile" />
      <FooterSection :profile="profile" />
    </div>
    <div class="github-container">
      <GitHubSection :githubRepos="githubRepos"/> 
    </div>
  </div>
</template>

<script setup>
  const id = 1
  const {data: profile} = await useFetch(`http://localhost:11019/api/profileinfo/${id}`) // Figure out proxy for Nuxt3
  const {data: githubRepos} = await useFetch('https://api.github.com/users/ChristopherHearne/repos')
</script>
<style>
.profile-body {
  margin: 0;
  box-sizing: border-box;
  background-color: #23252c;
  display: flex; 
  justify-content: space-evenly;
  align-items: center;
  font-family: "Inter", sans-serif;
  min-height: 100vh;
  width: auto;
  padding: 50px;
}

.info-container{
  margin-left: 50px;
  margin-bottom: 100px; 
}


body {
  margin: 0;
  box-sizing: border-box;
  min-height: 100vh;
  background-color: #23252c;
}
</style>
