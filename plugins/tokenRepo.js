import createRepository from '../api/tokenRepository'

export default defineNuxtPlugin( () => {
	const runTimeConfig = useRuntimeConfig()
	const baseURL = runTimeConfig.public.WEB_API_TOKENS_BASE_URL
	const tokenRepo = createRepository()
	return {
		provide: {
			tokenRepository: tokenRepo(`${baseURL}`)
		}
	}
})