<template>
  <div class="profile-body">
    <div class="info-container">
      <InfoSection :profile="profile" />
      <AboutSection :profile="profile" />
      <FooterSection :profile="profile" />
    </div>
    <div class="github-container">
      <GitHubSection :githubRepos="repos" />
    </div>
  </div>
</template>

<script setup> // TODO: Here we'll display the data that we have assigned and created in ConnectGit
const repos = ref()
const runTimeConfig = useRuntimeConfig()
const authKey = `token ${runTimeConfig.AUTH_TOKEN_KEY}`


const popEndpoint = async (url) => {
  const results = await Promise.resolve(fetch(url, {
    method: 'GET',
    headers: {
      // 'Authorization': authKey
    }
  }).then(response => response.json()))
  return results
}

const { data: profile } = await useFetch(
  `http://localhost:10157/api/profile/${id}`
); // Figure out proxy for Nuxt3

console.log(runTimeConfig.GITHUB_OAUTH_CLIENT_ID)
const { data: gitHubRepos} = await useFetch(
  "https://api.github.com/users/ChristopherHearne/repos", {
    headers: {
      authorization: authKey
    }
  })
  
watch(
  gitHubRepos,
  async (newVal) => {
    if (newVal){
      repos.value = JSON.parse(JSON.stringify(newVal));
      repos.value.forEach(async (repo) => {
        const data = await popEndpoint(repo.languages_url)
        repo.total_lines = Object.values(data).reduce((a, b) => a + b, 0)
        repo.languages = Object.entries(data).map(item => {
          return {
            language: item[0],
            lines: item[1],
            percentage_of_lines: (item[1] / repo.total_lines * 100).toFixed(1)
          }
        })
      })
    }
  },
  {
    deep: true,
    immediate: true
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
