<template>
	<div class="container" >
		<div class="step-container" :class="[activeClass, completedClass]">
			<div class="step-number">
				<span class="number">1</span>
				<i class="fa-solid fa-check"></i>
			</div>
			<span class="step-desc">Basic Info</span>
		</div>
		<div class="step-container">
			<div class="step-number">
				<span>2</span>
			</div>
			<span>Bio</span>
		</div>
		<div class="step-container">
			<div class="step-number">
				<span>3</span>
			</div>
			<span>Socials</span>
		</div>
		<div class="step-container">
			<div class="step-number">
				<span>4</span>
			</div>
			<span>Profile name</span>
		</div>
	</div>
</template>

<script setup>

</script>

<script>
export default {
	data(){
		return {
			isActive: true,
			isCompleted: false, 
			activeClass: 'active',
			completedClass: 'completed', 
		}
	}
}
</script>
<style scoped>
	.container{
		display: block; 
		margin: 0 auto; 
		width: 100%;
		height: auto;
	}
	.step-container{
		display: flex; 
		align-items: center;
		margin-bottom: 2em;
	}
	.step-number{
		text-align: center;
		width: 3em;
		height: 3em; 
		border-radius: 50%; 
		border: 2px solid #fff; 
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 1em; 
	}
	.active.step-container .step-number{
		font-weight: 700;
		border: 2px solid #f3bf99;
	}
	.active.step-container span{
		font-weight: 700; 
	}

	.completed.step-container .step-desc{
		opacity: 0.3;
		font-weight: 100;
	}

	.completed.step-container .step-number span{
		display: none; 
	}
	.completed.step-container .step-number .fa-check{
		display: block; 
	}
	.fa-check{
		display: none;
	}
	.completed.step-container .step-number{
		font-weight: 700;
		border: 0;
		background-color: aquamarine;
	}
</style>