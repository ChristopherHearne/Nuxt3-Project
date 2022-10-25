export default defineNuxtConfig({
	  // Global CSS: https://go.nuxtjs.dev/config-css
	  css: ["~/assets/main.css"],
	
	  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	  plugins: [
	  ],
	  
	  runtimeConfig: {
		AUTH_TOKEN_KEY: process.env.AUTH_TOKEN
	  },
	  // Auto import components: https://go.nuxtjs.dev/config-components
	  components: true,
	
	  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	  buildModules: [
	  ],
	  
	  // Modules: https://go.nuxtjs.dev/config-modules
	  modules: [],
	
	  // Build Configuration: https://go.nuxtjs.dev/config-build
	  build: {
	  }, 
})
