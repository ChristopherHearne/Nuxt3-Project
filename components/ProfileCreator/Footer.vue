<template>
	<div class="btn-container">
		<button @click="handleBack">Previous Step</button>
		<button @click="handleNext">Next -></button>
	</div>
</template>
<script>
export default {
	methods: {
		handleBack(){
			// TODO: Implement backbutton where the state is decremented by -1 
		},
		handleNext(){
			// TODO: Implement next step where the state is decremented by +1
		}
	}
}
</script>
<style scoped>
	
</style>