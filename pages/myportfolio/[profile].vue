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
const route = useRoute();
const repos = ref();
const avatarURL = ref()
const runTimeConfig = useRuntimeConfig();

const popEndpoint = async (url) => {
  const results = await Promise.resolve(
    fetch(url, {
      method: "GET",
    }).then((response) => response.json())
  );
  return results;
};

const setGitHubAvatar = async (username) => {
  const gitHubUserReq = await fetch(`https://api.github.com/users/${username}`)
  const userResults = await gitHubUserReq.json()
  avatarURL.value = userResults.avatar_url
} 

const setGitHubRepos = async (username) => {
  const githubRepoReq = await fetch(`https://api.github.com/users/${username}/repos`)
   const results = await githubRepoReq.json()
   repos.value = results
   populateGitHubRepos(repos.value)
}

const populateGitHubRepos = async (repos) => {
  repos.forEach(async (repo) => {
        const data = await popEndpoint(repo.languages_url);
        repo.total_lines = Object.values(data).reduce((a, b) => a + b, 0);
        repo.languages = Object.entries(data).map((item) => {
          return {
            language: item[0],
            lines: item[1],
            percentage_of_lines: ((item[1] / repo.total_lines) * 100).toFixed(
              1
            ),
          };
        });
      });
}

const { data: profile } = await useFetch(
  `${runTimeConfig.public.WEB_API_PROFILES_BASE_URL}/profiles/${route.params.profile}`
);

watch(
  profile,
  async (data) => {
    const profile = {...data}
    setGitHubAvatar(profile.githubUsername)
    setGitHubRepos(profile.githubUsername)
  },
  {
    deep: true,
    immediate: true,
  }
)
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
