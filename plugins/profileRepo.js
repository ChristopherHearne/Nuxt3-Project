import createRepository from '../api/profileRepository'

export default defineNuxtPlugin( () => {
	const runTimeConfig = useRuntimeConfig()
	const baseURL = runTimeConfig.public.WEB_API_PROFILES_BASE_URL
	const profileRepo = createRepository()
	return {
		provide: {
			profileRepository: profileRepo(`${baseURL}`)
		}
	}
})