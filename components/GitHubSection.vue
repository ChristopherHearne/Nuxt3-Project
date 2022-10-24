<template lang="">
  <div class="repos-container">
    <div v-for="repo in githubRepos" class="repo-item">
      <div class="header-info">
        <h2>{{ repo.name }}</h2>
        <span
          class="language-title"
          v-for="lang in repo.languages"
          @mouseover="
            {
              hover: hover;
            }
          "
        >
          <span class="dot" :style="dotStyles(lang.language)"></span>
          {{ lang.language }}
          <span class="language-percent" v-if="hover">
            {{ lang.percentage_of_lines }}
          </span>
        </span>
      </div>
      <h3>{{ repo.description }}</h3>
      <a :href="repo.html_url" target="_blank"
        ><i class="fa-brands fa-github"></i>Link to repo</a
      >
      <p>{{ `Starred by: ${repo.stargazers_count}` }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GitHubSection",
  data() {
    return {
      hover: false,
    };
  },
  props: {
    githubRepos: {
      type: Array,
      validator: (data) => {
        return Array.isArray(Array(data));
      },
    },
  },
  methods: {
    dotStyles(lang) {
      if (lang === "JavaScript") return { backgroundColor: "#f7df1e" };
      if (lang === "Vue") return { backgroundColor: "#41b883" };
      if (lang === "HTML") return { backgroundColor: "#e34c26" };
      if (lang === "CSS") return { backgroundColor: "#563d7c" };
      if (lang === "TypeScript") return { backgroundColor: "#3178c6" };
      if (lang === "C#") return { backgroundColor: "#9b4993" };
    },
  },
};
</script>
<style>
.repos-container {
  display: flex;
  max-height: 100vh;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
}

.repo-item {
  background-color: #1a1b21;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
}

.repo-item h2 {
  color: #fff;
  letter-spacing: -0.05em;
  font-size: 35px;
  margin: 0;
}

.repo-item h3 {
  font-size: 20px;
  color: #f3bf99;
  letter-spacing: -0.08em;
  font-weight: 100;
}

.repo-item p {
  font-size: 15px;
  letter-spacing: -0.08em;
  color: #f3bf99;
  font-weight: 100;
}

.repo-item a {
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  letter-spacing: -0.04em;
  font-weight: 200;
}
.fa-github {
  font-size: 20px;
  margin-right: 10px;
}

.repo-item span {
  color: #fff;
  border-radius: 30px;
}

.header-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
}
.header-info h2 {
  margin-right: auto;
}
.language-title {
  margin: 0 20px 0 0;
  padding: 5px;
  color: #fff;
  letter-spacing: -0.05em;
  font-weight: 100;
  position: relative;
  cursor: default; 
}
.language-title:hover {
  animation: slide-left 2s;
}
.dot {
  background-color: cyan;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  display: inline-block;
}

.hover{
  margin: 0 10px 0 0;
  padding: 5px;
  color: #fff;
  letter-spacing: -0.05em;
  font-weight: 100;
  animation: slide-left 1s;
}

.language-percent {
  width: 100%;
  height: auto;
  position: relative;
  animation: slide-left 1s;
}

@keyframes slide-left {
  0% {
    right: 0px;
  }
  100% {
    right: 20px;
  }
}
</style>
