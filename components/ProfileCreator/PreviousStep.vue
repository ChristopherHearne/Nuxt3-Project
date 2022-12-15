<template>
	<div class="btn-container">
		<button @click.prevent="navigator.previousNavstate">Previous Step</button>
	</div>
</template>
<script setup>
	import { useNavigator } from '~~/stores/navigator';

	const navigator = useNavigator()
</script>
<style scoped>
	
</style>