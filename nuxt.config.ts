export default defineNuxtConfig({
	  // Global CSS: https://go.nuxtjs.dev/config-css
	  css: ["~/assets/main.css", "~/assets/animations.css"],
	
	  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	  plugins: [
	  ],
	  
	  runtimeConfig: {
		public: {
			AUTH_TOKEN_KEY: process.env.AUTH_TOKEN,
			GITHUB_OAUTH_CLIENT_ID: process.env.GITHUB_OAUTH_CLIENT_ID,
			GITHUB_OAUTH_SECRET: process.env.GITHUB_OAUTH_SECRET,
			GITHUB_OAUTH_REDIRECT: process.env.GITHUB_OAUTH_REDIRECT_URI,
			WEB_API_PROFILES_BASE_URL: process.env.WEB_API_PROFILES_BASE_URL,
			WEB_API_TOKENS_BASE_URL: process.env.WEB_API_TOKENS_BASE_URL,
			GITHUB_API_BASE_URL: process.env.GITHUB_API_BASE_URL, 
		}
	  },
	  // Auto import components: https://go.nuxtjs.dev/config-components
	  components: true,
	
	  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	  buildModules: [],
	  
	  // Modules: https://go.nuxtjs.dev/config-modules
	  modules: [
	  ],
	
	  // Build Configuration: https://go.nuxtjs.dev/config-build
	  build: {
	  }, 
})
