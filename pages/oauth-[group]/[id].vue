<template>
	<div class="form-container">
		<ProfileSection :activeUser="activeUser" />
		<GitUserInfoSection :gitHubInfo="gitHubInfo" /> 
	</div>
</template>

<script setup>
const runTimeConfig = useRuntimeConfig()
const profileBaseURL = runTimeConfig.public.WEB_API_PROFILES_BASE_URL
const tokenBaseURL = runTimeConfig.public.WEB_API_TOKENS_BASE_URL
const route = useRoute()

const { data: activeUser } = await useFetch(`${profileBaseURL}/${route.params.id}`)
const { data: gitHubInfo } = await useFetch(`${tokenBaseURL}/profile`, {
	params: {profileId: route.params.id} 
})
</script>

<style scoped>
	.form-container{
		margin: 0 auto; 
		display: inline-block; 
	}
	h1{ 
		color: #fff;
		font-weight: 100; 
	}
</style>