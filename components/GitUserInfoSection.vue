<template>
	<div class="github-user-container">
		{{gitHubInfo}}
		<button>Go to portfolio</button>
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