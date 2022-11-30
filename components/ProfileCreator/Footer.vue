<template>
	<div class="btn-container">
		<button @click.prevent="navigator.previousNavstate">Previous Step</button>
		<button @click.prevent="navigator.nextNavstate">Next -></button>
		<button @click.prevent="navigator.resetNavstate">Reset</button>
	</div>
</template>
<script setup>
	import { useNavigator } from '~~/stores/navigator';

	const navigator = useNavigator()
</script>
<style scoped>
	
</style>