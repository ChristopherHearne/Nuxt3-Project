export default () => (resource) => ({
	async index(){
		return await fetch(`${resource}`, {
			method: 'GET'
		})
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