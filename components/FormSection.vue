<template lang="">
	<div class="input-container">
		<span>Firstname</span> 
		<input placeholder="Firstname..." type="text">
		<span>Lastname</span> 
		<input placeholder="Lastname..." type="text">
		<span>Title</span> 
		<input placeholder="Title..." type="text">
		<span>Email</span> 
		<input placeholder="Email..." type="email">
		<span>About you</span> 
		<input placeholder="About..." type="text">
		<span> Your interests</span> 
		<input placeholder="Interests..." type="text">
		<span>Connect your Github Account</span>
		<div class="github-container">
			<input placeholder="Your Github Username">
			<button>Check for repos</button>
			<div class="github-message"></div>
		</div>
		<span>Your Facebook</span> 
		<input placeholder="Link to Facebook..." type="url">
		<span>Your Instagram</span> 
		<input placeholder="Link to Instagram..." type="url">
		<span>Your Github</span>
		<input placeholder="Link to Github..." type="url">
		<span>Your LinkedIn</span>
		<input placeholder="Link to LinkedIn..." type="url">
		<span>Your website</span>
		<input placeholder="Link to website/project..." type="url">
		<button>Submit</button>
		<button>Clear</button>
	</div>
</template>
<script>
export default {
	name: 'Update',
	
}
</script>
<style scoped>
	.input-container{
		width: 50%;
		padding: 15px; 
		height: auto; 
		display: flex; 
		align-items: center;
		justify-content: center; 
		margin: 0 auto; 
		flex-direction: column;
		font-family: 'Inter', sans-serif;
		color: #fff; 
		letter-spacing: -0.07em;
		font-weight: 100; 
	}

	.github-container{
		display: inline-block; 
	}

	.input-container input{
		margin: 5px; 
		font-family: 'Inter', sans-serif; 
		padding: 8px;
		width: 190px;  
	}
</style>