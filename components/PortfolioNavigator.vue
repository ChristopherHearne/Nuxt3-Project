<template>
	<button @click="navigateToPortfolio">Go to portfolio</button>
</template>
<script>
import { getCookie } from '~~/tools/cookieHandler';
export default {
	methods: {
		navigateToPortfolio(){
			const userCookie = getCookie('active_user')
			const profileName = JSON.parse(userCookie).profileName
			navigateTo(`/myportfolio/${profileName}`)
		}
	}
}
</script>
<style>
	
</style>