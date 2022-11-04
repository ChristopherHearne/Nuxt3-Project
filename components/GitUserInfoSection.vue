<template>
	<div class="github-user-container">
		{{userData}}
	</div>
</template>
<script>
import consolaGlobalInstance from 'consola'

export default {
	props: {
		gitHubInfo: {}
	},
	data(){
		return {
			userData: {}
		}
	},
	async created(){
		const token = {...this.gitHubInfo}
		console.log(token)
		const response = await fetch("https://api.github.com/user", {
			headers: {
				'Authorization': `${token.tokenType} ${token.accessToken}`,
				'Accept': "application/json",
			}
		})
		const results = await response.json()
		this.userData = results
		console.log({...this.userData})
		console.log(typeof this.userData)
	}
}

</script>
<style scoped>
	
</style>