import createRepository from '../api/profileRepository'

export default defineNuxtPlugin( () => {
	const runTimeConfig = useRuntimeConfig()
	const profileRepo = createRepository(runTimeConfig.public.WEB_API_PROFILES_BASE_URL)
	return {
		provide: {
			profileRepository: profileRepo
		}
	}
})