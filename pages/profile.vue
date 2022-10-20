<template>
  <div class="profile-body">
    <div class="info-container">
      <InfoSection :profile="profile" />
      <AboutSection :profile="profile" />
      <FooterSection :profile="profile" />
    </div>
    <div class="github-container">
      <GitHubSection :githubRepos="gitHubRepos" :languages="languagesPerRepo" />
    </div>
  </div>
</template>

<script async setup>
import { getAllDependencies } from 'vue-bundle-renderer/runtime';


const getLanguages = async (req) => {
  const {data: response} = await useFetch(req)
  console.log(response)
  return response
};

let languagesPerRepo = []

const id = 1;

const { data: profile } = await useFetch(
  `http://localhost:11019/api/profileinfo/${id}`
); // Figure out proxy for Nuxt3

const { data: gitHubRepos } = await useFetch(
  "https://api.github.com/users/ChristopherHearne/repos",
  {
    onResponse({ request, response }) {
      return response._data;
    },
  }
);

watch(
  gitHubRepos,
  async (newVal) => {
    if (newVal){
      const data = JSON.parse(JSON.stringify(newVal));
      let results = data.map((e) => useFetch(e.languages_url))
      console.log(results)
      const datas = await Promise.all(results)
      languagesPerRepo = datas
      console.log(languagesPerRepo)
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
