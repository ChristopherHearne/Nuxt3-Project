export default () => (baseURL) => ({
	async index(){
		const {data: profiles} = await useFetch(`${baseURL}`, {
			method: 'GET',
		})
		return profiles
	},
	async create(payload){
		return await fetch(`${baseURL}`, payload, {
			method: 'POST'
		})
	},
	async show(id){
		return await fetch(`${baseURL}/${id}`, {
			method: 'GET'
		})
	},
	async showByProfileId(profileId){
		const response = await fetch(encodeURI(
			`${baseURL}/profile?profileId=${profileId}`)
		  );
		  return await response.json();
	}, 
	async delete(id){
		return await fetch(`${baseURL}/delete/${id}`, {
			method: 'DELETE'
		})
	}
})