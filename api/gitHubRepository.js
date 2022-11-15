export default () => (baseURL) => ({
	async getUserData(username){
		const response = await fetch(`${baseURL}/${username}`);
  		const results = await response.json();
		return results
	},
	async getRepoData(username){
		const response = await fetch(`${baseURL}/${username}/repos`);
  		const results = await response.json();
		return results
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
			const data = await this.popGitHubEndpoint(repo.languages_url);
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