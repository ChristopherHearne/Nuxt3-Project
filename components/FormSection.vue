<template lang="">
  <div class="input-container">
    <span>Firstname</span>
    <input
      placeholder="Firstname..."
      type="text"
      v-model="profileInfo.firstName"
    />
    <span>Lastname</span>
    <input
      placeholder="Lastname..."
      type="text"
      v-model="profileInfo.lastName"
    />
    <span>Title</span>
    <input placeholder="Title..." type="text" v-model="profileInfo.title" />
    <span>Email</span>
    <input placeholder="Email..." type="email" v-model="profileInfo.email" />
    <span>About you</span>
    <input placeholder="About..." type="text" v-model="profileInfo.about" />
    <span> Your interests</span>
    <input
      placeholder="Interests..."
      type="text"
      v-model="profileInfo.interests"
    />
    <span> Avatar </span>
    <input placeholder="Avatar" type="text" v-model="profileInfo.avatar" />
    <span>Connect your Github Account</span>
    <div class="github-container">
      <input placeholder="Your Github Username" v-model="gitHubUser" />
      <button @click="getRepos">Check for repos</button>
      <div class="github-message"></div>
    </div>
    <span>Your Facebook</span>
    <input
      placeholder="Link to Facebook..."
      type="url"
      v-model="profileInfo.facebook"
    />
    <span>Your Instagram</span>
    <input
      placeholder="Link to Instagram..."
      type="url"
      v-model="profileInfo.instagram"
    />
    <span>Your Github</span>
    <input
      placeholder="Link to Github..."
      type="url"
      v-model="profileInfo.github"
    />
    <span>Your LinkedIn</span>
    <input
      placeholder="Link to LinkedIn..."
      type="url"
      v-model="profileInfo.linkedin"
    />
    <span>Your website</span>
    <input
      placeholder="Link to website/project..."
      type="url"
      v-model="profileInfo.website"
    />
    <button @click="postProfile">Submit</button>
    <button>Clear</button>
  </div>
</template>
<script>
export default {
  name: "Update",
  data() {
    return {
      profileInfo: {},
      gitHubUser: null,
      repos: [],
    };
  },
  methods: {
    async postProfile() {
      const profileData = { ...this.profileInfo };
      var form_data = new FormData();
      Object.keys(profileData).forEach((key) =>
        form_data.append(key, profileData[key])
      );
      return await fetch("http://localhost:10157/api/Profile", {
        method: "POST",
        mode: "no-cors",
        body: form_data,
      })
    },
    async getRepos() {
      const response = await fetch(
        `https://api.github.com/users/${this.gitHubUser}/repos`
      ).catch((err) => alert(err));
      if (!response.ok) {
        const request = await response.json();
        alert(
          `Server responded with ${response.status}: ${request.message} for user ${this.gitHubUser}`
        );
      }
      const results = await response.json();
      this.repos = results;
    },
  },
};
</script>
<style scoped>
.input-container {
  width: 50%;
  padding: 15px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
  font-family: "Inter", sans-serif;
  color: #fff;
  letter-spacing: -0.07em;
  font-weight: 100;
}

.github-container {
  display: inline-block;
}

.input-container input {
  margin: 5px;
  font-family: "Inter", sans-serif;
  padding: 8px;
  width: 190px;
}
</style>
