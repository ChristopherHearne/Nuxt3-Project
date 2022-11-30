<template>
  <div class="form-container">
    <!-- <div class="state">
			<ProfileCreatorStateNavigator />
		</div> -->
    <div class="inputs">
      <ProfileCreatorBasicInfo />
      <ProfileCreatorBio />
      <ProfileCreatorSocialLinks />
      <ProfileCreatorProfilename />
      <ProfileCreatorFooter />
    </div>
  </div>
</template>

<script setup></script>

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
