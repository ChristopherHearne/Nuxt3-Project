<template>
	<div class="github-user-container">
		<div class="github-header">
			<h1>{{infoHeader}}<i class="fa-brands fa-github"></i></h1>
		</div>
		<div class="github-data">
			<h3>{{loginHeader}}</h3>
			<table>
				<thead>
					<tr>
						<th>Repos: </th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(repo, index) in repoData" :key="index">
						<td class="" >{{repo.name}}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<PortfolioNavigator />
	</div>
</template>

<script>

export default {
	props: {
		gitHubInfo: {},
		repoData: {}
	},
	data(){
		return {
			loginHeader: `Username:`, 
			repoHeader: 'Repos:',
			infoHeader: 'Your github data'
		}
	},
}

</script>
<style scoped>
	.github-header{
		display: flex; 
		margin: 0 auto; 
		align-items: center;
		justify-content: center;
	}
	.fa-github{
		font-size: 40px;
		margin-left: 20px; 
	}

	table{
		font-weight: 100; 
		color: #fff; 
	}
	th{
		text-align: left; 
		font-weight: 300; 
	}
</style>