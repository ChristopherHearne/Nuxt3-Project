<template>
  <div>
    <div class="github-container">
      <button @click="getGithubURL()">
        <i class="fa-brands fa-github"></i>
        Connect to Github
      </button>
      <div class="github-message"></div>
    </div>
  </div>
</template>
<script setup>
const runTimeConfig = useRuntimeConfig();

const user = JSON.parse(localStorage.getItem("active_user"))
console.log(user);

const getGithubURL = () => {
  const rootURL = "https://github.com/login/oauth/authorize";
  const options = {
    client_id: runTimeConfig.public.GITHUB_OAUTH_CLIENT_ID,
    redirect_uri: runTimeConfig.public.GITHUB_OAUTH_REDIRECT,
    scope: "user:email",
    state: user.id, // Extremely bad way of passing the current user to assign token. FIX
  };

  const qs = new URLSearchParams(options);
  return window.location.assign(`${rootURL}?${qs.toString()}`);
};
</script>
<script>
export default {
  props: {
    activeUser: {},
  },
  methods: {
    // TODO: This needs to be figured out and refactored appropriately: 
    // 1: Get the access token by looking for the code query string in the api endpoint
    // 2: Use the response from the github API to return it to the client. Much more effective way of doing it
    // 3: Then we use the access token to post it to a specific Profile ID, here in the client by calling POST /tokens
    // 4: That means that when the token is validated and returned from the redirect URI, we can actually start appending the isAuthenticated boolean to the current user. 
    // 5: Trim the fat in the API by simple using it to return the access token, the saving of that specifik token is then handled by a separate endpoint
    // 6: Store the runtime config options in variables that can be concatenated in the <a> tag href.
    // 7: Use state option below to have a dynamic routing to use.
    // 8: If we proxy our server with our client, we don't run the risk of losing our access token in the local storage (Nuxt3 doesnt seem to have proxy-functionality?)
    async getGithubURL() {
      const rootURL = "https://github.com/login/oauth/authorize";
      const options = {
        client_id: runTimeConfig.public.GITHUB_OAUTH_CLIENT_ID,
        redirect_uri: runTimeConfig.public.GITHUB_OAUTH_REDIRECT,
        scope: "user:email",
        state: id, // Extremely bad way of passing the current user to assign token. FIX
      };

      const qs = new URLSearchParams(options);
      return window.location.assign(`${rootURL}?${qs.toString()}`); // Redundant and useless. Use a link that links directly to the github login authorize page in the button
    },
  },
};
</script>
<style scoped>
.github-container {
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
