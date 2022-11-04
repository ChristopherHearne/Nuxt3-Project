<template>
	<div class="form-container">
		<ProfileSection :activeUser="activeUser" />
		<ConnectGitSection :activeUser="activeUser" /> 
	</div>
</template>

<script setup>
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