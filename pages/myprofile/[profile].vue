<template>
  <div class="form-container">
    <ProfileSection :activeUser="activeUser" />
    <ConnectGitSection :activeUser="activeUser" v-if="needsGithubAuth" />
    <GitUserInfoSection v-if="hasGithubData" :gitHubInfo="activeUser" :repoData="repoData" />
  </div>
</template>

<script setup>

const app = useNuxtApp()
const route = useRoute();
const githubData = ref();
const repoData = ref()

definePageMeta({
  layout: "signedin",
});

let needsGithubAuth = true;
let hasGithubData = false; 

const activeUser = await app.$profileRepository.showByName(route.params.profile)



watch(activeUser, async (data) => {
  if (data) {
    const userData = { ...data };
    if (userData.githubUsername != null) {
      hasGithubData = true;
      needsGithubAuth = false
      const accessToken = await app.$tokenRepository.showByProfileId(userData.id)
      const gitHubData = await app.$githubRepository.getWithToken(accessToken, userData.githubUsername);
      repoData.value = await app.$githubRepository.popGitHubEndpoint(gitHubData.repos_url)
    }
  }
}, {
  deep: true, 
  immediate: true
});
</script>

<style scoped>

.form-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 40%;
}
h1 {
  color: #fff;
  font-weight: 100;
}
</style>
