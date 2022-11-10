import createRepository from '../api/gitHubRepository'

export default defineNuxtPlugin( () => {
	const runTimeConfig = useRuntimeConfig()
	const baseURL = runTimeConfig.public.GITHUB_API_BASE_URL
	const githubRepo = createRepository()
	return {
		provide: {
			githubRepository: githubRepo(`${baseURL}`)
		}
	}
})