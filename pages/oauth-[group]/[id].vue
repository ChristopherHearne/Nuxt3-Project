<template>
  <div class="form-container">
    <ProfileSection :activeUser="activeUserData" />
    <GitUserInfoSection :gitHubInfo="activeUserData" :repoData="repoData" />
  </div>
</template>

<script setup>
const app = useNuxtApp()
const repoData = ref()
const activeUserData = ref();
const route = useRoute();

definePageMeta({
  layout: 'signedin'
})

const activeUser = await app.$profileRepository.show(route.params.id)

watch(
  activeUser,
  async (data) => {
    if (data) {
      activeUserData.value = { ...data };
      const accessToken = await app.$tokenRepository.showByProfileId(route.params.id)
      const githubData = await app.$githubRepository.getGitHubData(accessToken)
      repoData.value = await app.$githubRepository.popGitHubEndpoint(githubData.repos_url)
      const updatedData = {...activeUserData.value}
      updatedData.githubUsername = githubData.login
      updatedData.avatar = githubData.avatar_url
      await app.$profileRepository.update(updatedData, route.params.id)
      activeUserData.value = updatedData
    }
  },
  {
    deep: true,
    immediate: true,
  }
);
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
