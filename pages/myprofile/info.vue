<template>
  <div class="form-container">
    <ProfileSection :activeUser="activeUser" />
    <ConnectGitSection :activeUser="activeUser" />
  </div>
</template>
<script setup>
  definePageMeta({
    layout: 'signedin'
  })
</script>
<script>
import { getCookie } from "~~/tools/cookieHandler";


export default {
  data() {
    return {
      activeUser: {},
    };
  },
  async created() {
    if (process.client) {
      const userCookie = getCookie("active_user");
      if (userCookie) {
        this.activeUser = JSON.parse(userCookie);
      }
    }
  },
};
</script>
<style scoped>
.form-container {
  margin: 0 auto;
}
h1 {
  color: #fff;
  font-weight: 100;
}
</style>
