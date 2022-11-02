<template>
	<div class="form-container">
		<ProfileSection :activeUser="activeUser" />
		<ConnectGitSection /> 
	</div>
</template>

<script setup>
	const activeUser = JSON.parse(localStorage.getItem("active_user"))
</script>

<style scoped>
	.form-container{
		margin: 0 auto; 
	}
	h1{ 
		color: #fff;
		font-weight: 100; 
	}
</style>