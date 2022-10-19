<template lang="">
	<div class="repos-container">
		<div v-for="repo in githubRepos" class="repo-item">
			<div class="header-info">
				<h2>{{repo.name}}</h2>
				<span v-for="languages in getLanguagesForRepo(repo.owner.login, repo.name)">
					{{languages}}
				</span>
			</div>
			<h3>{{repo.description}}</h3>
			<a :href="repo.html_url">Link to repo</a>
			<p>{{`Starred by: ${repo.stargazers_count}`}}</p>
		</div>
	</div>
</template>
<script>
export default{
	name: 'GitHubSection',
	props: {
		githubRepos: []
	},
	methods: {
		async getLanguagesForRepo(userName, repoName){
			const results = await fetch(`https://api.github.com/repos/${userName}/${repoName}/languages`)
			const languages = await results.json()
			return Object.keys(languages)
		}
	}
}
</script>
<style>
	.repos-container{
		display: flex;
		max-height: 100vh;
		justify-content: center; 
		flex-direction: column;
		overflow: auto;
	}

	.repo-item{
		background-color: #1a1b21;
		border-radius: 20px; 
		padding: 20px;
		margin-bottom: 20px; 
	}

	.repo-item h2{
		color: #fff;
		letter-spacing: -0.05em; 
		font-size: 35px; 
		margin: 0; 
	}

	.repo-item h3{
		font-size: 15px;
		color: #F3BF99;
		letter-spacing: -0.08em; 
	}

	.repo-item p{
		font-size: 12px; 
		letter-spacing: -0.08em; 
		color: #F3BF99;
	}

	.repo-item a{
		cursor: pointer;
		text-decoration: none;
		color: #fff;
	}
</style>