<template>
  <div class="form-container">
    <div class="state">
			<ProfileCreatorStateNavigator />
		</div>
    <div class="inputs">
      <component :is="stateComponents[navigator.currentNavstate]"></component>
      <ProfileCreatorFooter />
    </div>
  </div>
</template>

<script setup>
import { useNavigator } from '~~/stores/navigator';

const navigator = useNavigator()
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
</style>
