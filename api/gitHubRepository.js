export default () => (baseURL) => ({
	async getUserData(username){
		const gitHubUserReq = await fetch(`${baseURL}/${username}`);
  		const userResults = await gitHubUserReq.json();
		return userResults
	},
	async getRepoData(username){
		const gitHubUserReq = await fetch(`${baseURL}/${username}/repos`);
  		const repoResults = await gitHubUserReq.json();
		return repoResults
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
			const data = await popGitHubEndpoint(repo.languages_url);
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