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
	'ProfilenameVue'
]
</script>
<script>
import BasicInfoVue from '~~/components/ProfileCreator/BasicInfo.vue';
import BioVue from '~~/components/ProfileCreator/Bio.vue';
import SocialLinksVue from '~~/components/ProfileCreator/SocialLinks.vue';
import ProfilenameVue from '~~/components/ProfileCreator/Profilename.vue';
export default{
	components: {
		BasicInfoVue, BioVue, SocialLinksVue, ProfilenameVue 
	}
}
</script>
<style scoped>
.form-container {
  margin-left: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 90%;
}
</style>
