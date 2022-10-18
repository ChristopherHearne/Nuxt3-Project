<template lang="">
  <div class="footer--container">
    <div class="icons--container">
      <a :href="profile.facebookLink" class="facebook--icon" target="_blank" ><i class="fa-brands fa-facebook-f"></i></a>
      <a :href="profile.instagramLink" class="instagram--icon" target="_blank"><i class="fa-brands fa-instagram"></i></a>
      <a :href="profile.linkedInLink" class="linkedin--icon" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
      <a :href="profile.gitHubLink" class="github--icon" target="_blank"><i class="fa-brands fa-github"></i></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterSection",
  props: {
    profile: {}
  }
};
</script>
<style scoped>
.footer--container {
  margin: 0 auto;
  width: 317px;
  display: flex;
  height: 67px;
  background-color: #161619;
  border-radius: 0 0 6px 6px;
}

.icons--container {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}
.footer--container i {
  color: #918e9b;
  font-size: 30px;
  padding: 15px;
}

.footer--container a:hover {
  cursor: pointer;
}
</style>
