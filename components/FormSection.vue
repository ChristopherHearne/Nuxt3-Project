<template lang="">
  <div class="input-container">
    <form @submit.prevent="handleSubmit" class="input-container">
      <div class="profile-name">
        <input
          :class="{ error: error.set }"
          placeholder="Profile name..."
          type="text"
          v-model="activeUser.profileName"
          required
        />
        <div class="error-msg" v-if="error.set">{{ error.message }}</div>
      </div>
      <input
        placeholder="Firstname..."
        type="text"
        v-model="activeUser.firstName"
      />
      <input
        placeholder="Lastname..."
        type="text"
        v-model="activeUser.lastName"
      />
      <input placeholder="Title..." type="text" v-model="activeUser.title" />
      <input placeholder="Email..." type="email" v-model="activeUser.email" />
      <textarea
        placeholder="Tell us something about you..."
        v-model="activeUser.about"
      ></textarea>
      <textarea
        placeholder="Tell us about your interests..."
        v-model="activeUser.interests"
      ></textarea>
      <input
        placeholder="Link to Facebook..."
        type="url"
        v-model="activeUser.facebook"
      />
      <input
        placeholder="Link to Instagram..."
        type="url"
        v-model="activeUser.instagram"
      />
      <input
        placeholder="Link to Github..."
        type="url"
        v-model="activeUser.github"
      />
      <input
        placeholder="Link to LinkedIn..."
        type="url"
        v-model="activeUser.linkedin"
      />
      <input
        placeholder="Link to website/project..."
        type="url"
        v-model="activeUser.website"
      />
      <button type="submit">Create Profile</button>
      <div v-if="post.success" class="success-msg">{{ post.message }}</div>
    </form>
    <button @click="getProfiles">Clear Inputs</button>
  </div>
</template>

<script>
import { setCookie, getCookie } from '../tools/cookieHandler'

export default {
  name: "Update",
  data() {
    return {
      activeUser: {},
      gitHubUser: null,
      repos: [],
      profiles: [],
      error: {
        set: false,
        message: null,
      },
      post: {
        success: false,
        message: null,
      },
    };
  },
  methods: {
    async handleSubmit() {
      const profileData = { ...this.activeUser };
      var form_data = new FormData();

      Object.keys(profileData).forEach((key) =>
        form_data.append(key, profileData[key])
      );

      const response = await fetch("http://localhost:9362/api/Profile", {
        method: "POST",
        body: form_data,
      }).catch((err) => console.log(err));

      if (!response.ok) {
        const request = await response.json();
        console.log(
          `Server responded with ${response.status}: ${request.Error[0]}`
        );
        this.error.message = request.Error[0];
        this.error.set = true;
        console.log(this.error);
        return;
      }

      const results = await response.json();
      console.log(
        `Success: User ${results.profileName} was created with a status of ${response.status}`
      );
      this.post.success = true;
      this.post.message = `${results.profileName} was created and added to the database successfully`;
      setCookie('active_user', JSON.stringify(results), 1)
      await navigateTo('/myprofile/info')
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
    async getProfiles() {
      const response = await fetch("http://localhost:9362/api/Profile");
      const results = await response.json();
      console.log(results);
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
  margin: 5px 5px 5px 0;
  font-family: "Inter", sans-serif;
  padding: 8px;
  width: 190px;
}

input,
textarea,
button {
  font-family: "Inter", sans-serif;
  font-weight: 100;
}

button {
  cursor: pointer;
}

.error-msg {
  color: red;
  font-size: 15px;
  font-weight: 400;
}

.error {
  border-color: red;
}

.profile-name {
  display: inline-block;
}

.success-msg {
  font-weight: 100;
  font-size: 1.5em;
  color: lightgreen;
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
