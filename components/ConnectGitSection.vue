<template>
  <div>
    <div class="github-container">
      <button @click="getGithubURL(from)">
        <i class="fa-brands fa-github"></i>
        Connect to Github
      </button>
      <div class="github-message"></div>
    </div>
  </div>
</template>
<script setup>
const runTimeConfig = useRuntimeConfig();

const from = "/";

const getGithubURL = (from) => {
  const rootURL = "https://github.com/login/oauth/authorize";
  const options = {
    client_id: runTimeConfig.public.GITHUB_OAUTH_CLIENT_ID,
    redirect_uri: runTimeConfig.public.GITHUB_OAUTH_REDIRECT,
    scope: "user:email",
    state: from,
  };

  const qs = new URLSearchParams(options);
  return window.location.assign(`${rootURL}?${qs.toString()}`);
};
</script>
<script>
export default {
  props: {
    activeUser: {}
  }
}
</script>
<style scoped>
.github-container{
	display: flex;
	align-items: center; 
	justify-content: center;
	margin: 0 auto;
}
/* CSS */
button {
  align-items: center;
  background-clip: padding-box;
  background-color: #f3bf99;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 200;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

button:hover,
button:focus {
  background-color: #f3bf99;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

button:hover {
  transform: translateY(-1px);
}

button:active {
  background-color: #c85000;
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  transform: translateY(0);
}
</style>
