<template lang="">
  <div class="input-container">
    <form @submit.prevent="handleSubmit" class="input-container">
      <div class="profile-name">
        <input
          :class="{error: error.set}"
          placeholder="Profile name..."
          type="text"
          v-model="profileInfo.profileName"
          required
        />
        <div class="error-msg" v-if="error.set">{{error.message}}</div>
      </div>
      <input
        placeholder="Firstname..."
        type="text"
        v-model="profileInfo.firstName"
      />
      <input
        placeholder="Lastname..."
        type="text"
        v-model="profileInfo.lastName"
      />
      <input placeholder="Title..." type="text" v-model="profileInfo.title" />
      <input placeholder="Email..." type="email" v-model="profileInfo.email" />
      <textarea
        placeholder="Tell us something about you..."
        v-model="profileInfo.about"
      ></textarea>
      <textarea
        placeholder="Tell us about your interests..."
        v-model="profileInfo.interests"
      ></textarea>
      <input placeholder="Avatar" type="file" @change="profileInfo.avatar" />
      <input
        placeholder="Link to Facebook..."
        type="url"
        v-model="profileInfo.facebook"
      />
      <input
        placeholder="Link to Instagram..."
        type="url"
        v-model="profileInfo.instagram"
      />
      <input
        placeholder="Link to Github..."
        type="url"
        v-model="profileInfo.github"
      />
      <input
        placeholder="Link to LinkedIn..."
        type="url"
        v-model="profileInfo.linkedin"
      />
      <input
        placeholder="Link to website/project..."
        type="url"
        v-model="profileInfo.website"
      />
      <button type="submit">Submit</button>
    </form>
    <button @click="getProfiles">Clear</button>
    <div class="github-container">
      <input placeholder="Your Github Username" v-model="gitHubUser" />
      <button @click="getRepos">Check for repos</button>
      <div class="github-message">{{ profiles }}</div>
    </div>
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
      profiles: [],
      error: {
        set: false,
        message: null
      } 
    };
  },
  methods: {
    async handleSubmit() {
      const profileData = { ...this.profileInfo };
      var form_data = new FormData();

      Object.keys(profileData).forEach((key) =>
        form_data.append(key, profileData[key])
      );

      const response = await fetch("http://localhost:10157/api/Profile", {
        method: "POST",
        body: form_data,
      }).catch(err => console.log(err));
      console.log(response)
      if(!response.ok){
        const request = await response.json()
        console.log(`Server responded with ${response.status}: ${request.Error[0]}`)
        this.error.message = request.Error[0]
        this.error.set = true
        console.log(this.error)
        return
      }

      const results = await response.json()
      console.log(`Success: User ${results.profileName} was created with a status of ${response.status}`)
      return results
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
      const response = await fetch("http://localhost:10157/api/Profile", {
        headers: {
          Accept: "application/json",
        },
      });
      const results = await response.json();
      console.log(results);
    },
  },
};
</script>
<style scoped>
*{
  font-family: 'Inter', sans-serif; 
}
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

input,
textarea,
button {
  font-family: "Inter", sans-serif;
  font-weight: 100;
}

input{
  margin-left: 0; 
}

.error-msg{
  color: red; 
  font-size: 15px; 
  font-weight: 400; 
}

.error{
  border-color: red; 
}

.profile-name{
  display: inline-block;
}
</style>
