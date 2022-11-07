<template>
  <div class="form-container">
    <ProfileSection :activeUser="activeUser" />
    <GitUserInfoSection :gitHubInfo="githubData" />
  </div>
</template>

<script setup>
const githubData = ref();
const activeUserData = ref();
const runTimeConfig = useRuntimeConfig();
const profileBaseURL = runTimeConfig.public.WEB_API_PROFILES_BASE_URL;
const tokenBaseURL = runTimeConfig.public.WEB_API_TOKENS_BASE_URL;
const route = useRoute();

const { data: activeUser } = await useFetch(
  `${profileBaseURL}/${route.params.id}`
);
const { data: gitHubInfo } = await useFetch(`${tokenBaseURL}/profile`, {
  params: { profileId: route.params.id },
});

const insertGitUsername = async (data) => {
  var form_data = new FormData();

  Object.keys(data).forEach((key) => form_data.append(key, data[key]));

  const response = await fetch(
    `${runTimeConfig.WEB_API_PROFILES_BASE_URL}/${route.params.id}`,
    {
      method: "PUT",
      body: form_data,
    }
  );
  if (response.ok) {
    console.log(`Github username was successfully inserted`);
  }
};

const getGitHubData = async (token) => {
  const response = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `${token.tokenType} ${token.accessToken}`,
      Accept: "application/json",
    },
  });
  const results = await response.json();
  githubData.value = results;
  return results;
};

watch(
  activeUser,
  async (data) => {
    if (data) {
      activeUserData.value = { ...data };
    }
  },
  {
    deep: true,
    immediate: true,
  }
);

watch(
  gitHubInfo,
  async (data) => {
    if (data) {
      const github = await getGitHubData({ ...data });
      const updatedData = { ...activeUserData.value };
      updatedData.githubUsername = github.login;
      await insertGitUsername(updatedData);
    }
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>

<style scoped>
.form-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 40%;
}
h1 {
  color: #fff;
  font-weight: 100;
}
</style>
