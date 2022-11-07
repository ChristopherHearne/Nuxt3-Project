<template lang="">
	<div class="nav-sidebar">
	  <div class="nav-container">
		<nav class="navbar">
		  <ul>
			<li>
			  <nuxt-link to="/" class="link">Home</nuxt-link>
			</li>
			<li>
			  <nuxt-link to="/portfolios" class="link">Portfolios</nuxt-link>
			</li>
			<li>
			  <nuxt-link :to="portfolioRoute" class="link">My Portfolio</nuxt-link>
			</li>
			<li>
			  <nuxt-link :to="profileRoute" class="link">My Profile</nuxt-link>
			</li>
			<li>
			  <nuxt-link to="/create" class="link">Create Profile</nuxt-link>
			</li>
		  </ul>
		</nav>
	  </div>
	</div>
  </template>

<script>
import { getCookie } from '~~/tools/cookieHandler';
export default {
	data() {
		return {
			portfolioRoute: null,
			profileRoute: null, 

		}
	},
	async created() {
    if (process.client) {
      const userCookie = getCookie("active_user");
      if (userCookie) {
        const data = JSON.parse(userCookie);
		this.portfolioRoute = `/myportfolio/${data.profileName}`
		this.profileRoute = `/myprofile/${data.profileName}`
      }
    }
  },
}

</script>
  <style scoped>
  .nav-sidebar {
	background-color: #161619;
	min-height: 100vh;
	width: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;
	left: 0;
  }
  .nav-container .link {
	display: block;
	padding-bottom: 30px;
	text-align: center;
	text-decoration: none;
	color: #fff;
	font-weight: 100;
	color: #fff;
	font-size: 25px;
	letter-spacing: -0.08em;
	font-style: normal;
	line-height: 30px;
	text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
	margin-bottom: 0;
	font-family: "Inter", sans-serif;
	text-underline-offset: 0.4em;
	text-decoration: underline 0.05em transparent;
	transition: text-decoration-color 1.5s, text-underline-offset 1.5s, color 1s;
  }
  
  .nav-container .link:hover {
	text-decoration-color: #fff;
	text-underline-offset: 0.4em;
	color: #f3bf99;
	cursor: pointer;
  }
  
  .nav-container ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
  }
  </style>
  