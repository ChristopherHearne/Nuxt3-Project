<template lang="">
  <div class="about--container">
    <div class="text--container">
      <h3>About</h3>
      <p>
        {{profile.about}}
      </p>
      <h3>Interests</h3>
      <p>
        {{profile.interests}}
      </p>
      <p></p>
    </div>
  </div>
</template>
<script>
export default {
  name: "InfoSection",
  props: {
    profile: {}
  }
};
</script>
<style>
.about--container {
  color: #dcdcdc;
  width: 317px;
  margin: 0 auto;
  background: #1a1b21;
  position: relative;
  display: block;
}

.about--container h3 {
  margin: 0;
  color: #f5f5f5;
  line-height: 24px;
  font-size: 16px;
  font-weight: 700;
}

.about--container p {
  font-size: 10.24px;
  font-weight: 400;
  line-height: 15.36px;
  color: #dcdcdc;
}

.text--container {
  padding: 20px 40px 40px 40px;
}
</style>
