<template>
	<div class="github-user-container">
		{{gitHubInfo}}
		<PortfolioNavigator />
	</div>
</template>

<script>

export default {
	props: {
		gitHubInfo: {}
	},
	data(){
		return {
			userData: {}
		}
	},
}

</script>
<style scoped>
	
</style>