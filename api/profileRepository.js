export default () => (resource) => ({
	async index(){
		const response = await fetch(`${resource}/profiles`, {
			method: 'GET'
		})
		const results = await response.json()
		return results 
	},
	async create(payload){
		return await fetch(`${resource}`, payload, {
			method: 'POST'
		})
	},
	async show(id){
		return await fetch(`${resource}/${id}`, {
			method: 'GET'
		})
	},
	async showByName(profileName){
		const response = await fetch(`${resource}/profiles/${profileName}`)
		const results = await response.json()
		return results 
	}, 
	async update(payload, id){
		return await fetch(`${resource}/${id}`, payload, {
			method: 'PUT'
		})
	},
	async delete(id){
		return await fetch(`${resource}/${id}`, {
			method: 'DELETE'
		})
	}
})