<template>
  <div class="profile-body">
    <div class="info-container">
      <InfoSection :profile="profile" :avatarURL="avatarURL" />
      <AboutSection :profile="profile" />
      <FooterSection :profile="profile" />
    </div>
    <div class="github-container">
      <GitHubSection :githubRepos="repos" />
    </div>
  </div>
</template>

<script setup>

definePageMeta({
  layout: "signedin",
});

const app = useNuxtApp()
const route = useRoute();
const repos = ref();
const avatarURL = ref();
const runTimeConfig = useRuntimeConfig();

const profile = await app.$profileRepository.showByName(route.params.profile)

watch(
  profile,
  async (data) => {
    const profile = { ...data };
    const userData = await app.$githubRepository.getUserData(profile.githubUsername)
    const repoData = await app.$githubRepository.popGitHubEndpoint(userData.repos_url)
    repos.value = repoData
    avatarURL.value = userData.avatar_url
    await app.$githubRepository.populateGitHubRepos(repos.value);
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>
<style>
.profile-body {
  margin: 0;
  box-sizing: border-box;
  background-color: #23252c;
  display: flex;
  justify-content: space-evenly;
  font-family: "Inter", sans-serif;
  min-height: 100vh;
  width: auto;
  padding: 50px;
}

.info-container {
  margin: 0 50px 50px 50px;
}

body {
  margin: 0;
  box-sizing: border-box;
  min-height: 100vh;
  background-color: #23252c;
}
</style>
