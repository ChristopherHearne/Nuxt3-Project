<template>
  <div class="profile-body">
    <InfoSection :profile="profile" />
    <AboutSection :profile="profile" />
    <FooterSection :profile="profile" />
  </div>
</template>

<script setup>
  const id = 1
  const {data: profile} = await useFetch(`http://localhost:11019/api/profileinfo/${id}`) // Figure out proxy for Nuxt3
</script>
<style>
.profile-body {
  margin: 0;
  box-sizing: border-box;
  background-color: #23252c;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
  height: auto;
  width: auto;
  padding: 50px;
}

body {
  margin: 0;
  box-sizing: border-box;
  min-height: 100vh;
  background-color: #23252c;
}
</style>
