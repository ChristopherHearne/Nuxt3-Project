<template>
  <div class="profile-body">
    <div class="info-container">
      <InfoSection :profile="profile" />
      <AboutSection :profile="profile" />
      <FooterSection :profile="profile" />
    </div>
    <div class="github-container">
      <GitHubSection :githubRepos="repos" :languages="languagesPerRepo" />
    </div>
  </div>
</template>

<script setup>
const urls = ref()
const languagesPerRepo = ref()
const repos = ref()
const runTimeConfig = useRuntimeConfig()

const populateEndpoint = async (urls) => {
  const results = await Promise.all(urls.map((url) => fetch(url).then(response => response.json())))
  return results
};

const popEndpoint = async (url) => {
  const results = await Promise.resolve(fetch(url, {
    headers: {
      authorization: `token${runTimeConfig.AUTH_TOKEN_KEY}`
    }
  }).then(response => response.json()))
  return results
}

const id = 1;

const { data: profile } = await useFetch(
  `http://localhost:11019/api/profileinfo/${id}`
); // Figure out proxy for Nuxt3

const { data: gitHubRepos} = await useFetch(
  "https://api.github.com/users/ChristopherHearne/repos", {
    headers: {
      authorization: `token${runTimeConfig.AUTH_TOKEN_KEY}`
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

watch;
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
