<template>
	<div class="form-container">
	  <div class="state">
			  <ProfileCreatorStateNavigator />
		  </div>
	  <div class="inputs">
		<component :store="profileStore" :is="stateComponents[navigator.currentNavstate]"></component>
		<div class="steps">
			<ProfileCreatorPreviousStep v-if="navigator.currentNavstate < 4"/>
			<ProfileCreatorNextStep v-if="navigator.currentNavstate < 3" />
		</div>
	  </div>
	</div>
  </template>
  
  <script setup>
  import { useNavigator } from '~~/stores/navigator';
  import { useProfileData } from '~~/stores/profiledata';
  const navigator = useNavigator()
  const profileStore = useProfileData()
  
  const stateComponents = [
	  'BasicInfoVue',
	  'BioVue',
	  'SocialLinksVue',
	  'ProfilenameVue',
	  'ConnectGitSectionVue'
  ]
  
  </script>
  <script>
  import BasicInfoVue from '~~/components/ProfileCreator/BasicInfo.vue';
  import BioVue from '~~/components/ProfileCreator/Bio.vue';
  import SocialLinksVue from '~~/components/ProfileCreator/SocialLinks.vue';
  import ProfilenameVue from '~~/components/ProfileCreator/Profilename.vue';
  import ConnectGitSectionVue from '~~/components/ConnectGitSection.vue';
  import { useProfileData } from '~~/stores/profiledata';
  export default{
	  components: {
		  BasicInfoVue, BioVue, SocialLinksVue, ProfilenameVue, ConnectGitSectionVue
	  }
  }
  </script>
  <style scoped>
.form-container {
	margin-left: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 90%;
}

.steps{
	display: flex; 
	width: 100%;
	height: auto;
	align-items: center;
	justify-content: space-between;
}
.state, .inputs{
	animation: fadeInFromBottom 1s ease-in-out;
}

.inputs{
	width: 30%;
}

  @keyframes fadeInFromBottom{
  0%{
    margin: 12em 0 6em 0;
    opacity: 0;
  }

  1%{
    margin: 12em 0 6em 0; 
    opacity: 0;
  }

  100%{
    margin: 6em 0 6em 0; 
    opacity: 1; 
  }
}
  </style>
  