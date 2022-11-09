<template>
  <div class="form-container">
    <ProfileSection :activeUser="activeUser" />
    <ConnectGitSection :activeUser="activeUser" v-if="needsGithubAuth" />
    <GitUserInfoSection v-if="hasGithubData" :gitHubInfo="githubData" :repoData="repoData" />
  </div>
</template>

<script setup>
const route = useRoute();
const githubData = ref();
const repoData = ref()
const runTimeConfig = useRuntimeConfig();
definePageMeta({
  layout: "signedin",
});

let needsGithubAuth = true;
let hasGithubData = false; 

const { data: activeUser } = await useFetch(
  `${runTimeConfig.public.WEB_API_PROFILES_BASE_URL}/profiles/${route.params.profile}`
);


const getGitHubData = async (token) => {
  const response = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `${token.tokenType} ${token.accessToken}`,
      Accept: "application/json",
    },
  });
  const results = await response.json();
  githubData.value = results;
  return results;
};

const getAccessToken = async (profileId) => {
  const response = await fetch(encodeURI(
    `${runTimeConfig.public.WEB_API_TOKENS_BASE_URL}/profile?profileId=${profileId}`)
  );
  return await response.json();
};

const getRepos = async (repo_url) => {
  const response = await fetch(repo_url)
  const results = await response.json()
  return results
}


watch(activeUser, async (data) => {
  if (data) {
    const userData = { ...data };
    if (userData.githubUsername != null) {
      hasGithubData = true;
      needsGithubAuth = false
      const accessToken = await getAccessToken(userData.id);
      const dataEnt = await getGitHubData(accessToken);
      repoData.value = await getRepos(dataEnt.repos_url)
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
