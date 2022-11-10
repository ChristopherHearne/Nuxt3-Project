export default (baseURL) => ({
	async getUserData(username){
		const {data: gitHubData} = await useFetch(`${baseURL}/${username}`)
		return gitHubData
	},
	async getRepoData(username){
		const {data: repoData} = await useFetch(`${baseURL}/${username}/repos`)
		return repoData
	},
	async popGitHubEndpoint(url){
		const results = await Promise.resolve(
			fetch(url, {
			  method: "GET",
			}).then((response) => response.json())
		  );
		  return results;
	}, 
	async populateGitHubRepos(repos){
		repos.forEach(async (repo) => {
			const data = await popEndpoint(repo.languages_url);
			repo.total_lines = Object.values(data).reduce((a, b) => a + b, 0);
			repo.languages = Object.entries(data).map((item) => {
			  return {
				language: item[0],
				lines: item[1],
				percentage_of_lines: ((item[1] / repo.total_lines) * 100).toFixed(1),
			  };
			});
		  });
	}
}) 