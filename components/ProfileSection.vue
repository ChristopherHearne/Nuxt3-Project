<template lang="">
  <div class="input-container">
    <h1>{{ welcomeMsg }}</h1>
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
      <button @click="updateProfile(activeUser)">Update</button>
      <button @click="signOut">Sign out</button>
    </form>
  </div>
</template>
<script setup>
import { setCookie, eraseCookie } from '~~/tools/cookieHandler';
const runTimeConfig = useRuntimeConfig();

const signOut = async () => {
  eraseCookie('active_user')
  await navigateTo("/");
};

const updateProfile = async (activeUser) => {
  var form_data = new FormData();

  Object.keys(activeUser).forEach((key) =>
    form_data.append(key, activeUser[key])
  );
  const response = await fetch(
    `${runTimeConfig.WEB_API_PROFILES_BASE_URL}/${activeUser.id}`,
    {
      method: "PUT",
      body: form_data,
    }
  );
  if (!response.ok) {
    console.log(
      `Server responded with a status of ${response.status}: ${response.statusText}`
    );
  }
  if (response.ok && response.status === 204) {
    console.log(`User ${activeUser.profileName} was successfully updated`);
    setCookie('active_user', JSON.stringify(activeUser), 1)
  }
};
</script>
<script>
export default {
  name: "Update",
  props: {
    activeUser: {},
  },
  data() {
    return {
      gitHubUser: null,
      welcomeMsg: `Welcome ${this.activeUser.profileName}`,
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

h1 {
  font-weight: 100;
  font-size: 45px;
  color: #fff;
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


</style>
