export default () => (baseURL) => ({
	async index(){
		const {data: profiles} = await useFetch(`${baseURL}/profiles`, {
			method: 'GET',
		})
		return profiles
	},
	async getAuthenticatedProfiles(){
		const response = await fetch(`${baseURL}/profiles/authenticated`)
		const results = await response.json()
		return results
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
	async showByName(profileName){
		const {data: profile} = await useFetch(`${baseURL}/profiles/${profileName}`, {method: 'get', initialCache: false})
		return profile
	}, 
	async update(payload, id){
		return await fetch(`${baseURL}/${id}`, payload, {
			method: 'PUT'
		})
	},
	async delete(id){
		return await fetch(`${baseURL}/${id}`, {
			method: 'DELETE'
		})
	}
})