<template>
  <div class="container">
    <div
      class="step-container"
      :class="[
        navigator.currentNavstate === 0 ? activeClass : '',
        navigator.currentNavstate > 0 ? completedClass : '',
      ]"
    >
      <div class="step-number">
        <span class="number">1</span>
        <i class="fa-solid fa-check"></i>
      </div>
      <span class="step-desc">Basic Info</span>
    </div>
    <div
      class="step-container"
      :class="[
        navigator.currentNavstate === 1 ? activeClass : '',
        navigator.currentNavstate > 1 ? completedClass : '',
      ]"
    >
	<div class="test">
		<div class="step-number">
		  <span>2</span>
		  <i class="fa-solid fa-check"></i>
	  </div>
	</div>
      <span class="step-desc">Bio</span>
    </div>
    <div
      class="step-container"
      :class="[
        navigator.currentNavstate === 2 ? activeClass : '',
        navigator.currentNavstate > 2 ? completedClass : '',
      ]"
    >
      <div class="step-number">
        <span>3</span>
        <i class="fa-solid fa-check"></i>
      </div>
      <span class="step-desc">Socials</span>
    </div>
    <div
      class="step-container"
      :class="[
        navigator.currentNavstate === 3 ? activeClass : '',
        navigator.currentNavstate > 3 ? completedClass : '',
      ]"
    >
      <div class="step-number">
        <span>4</span>
        <i class="fa-solid fa-check"></i>
      </div>
      <span class="step-desc">Profile name</span>
    </div>
  </div>
</template>

<script setup>
import { useNavigator } from "~~/stores/navigator";

const navigator = useNavigator();
const completedClass = "completed";
const activeClass = "active";
</script>

<script>
export default {
  data() {
    return {
      isActive: true,
      isCompleted: false,
    };
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  height: auto;
}
.step-container {
  display: flex;
  align-items: center;
  margin-bottom: 2em;
}

.step-number {
  text-align: center;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  border: 2px solid #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 1em;
}
.active.step-container .step-number {
  font-weight: 700;
  border: 2px solid #f3bf99;
}
.active.step-container span {
  font-weight: 700;
}

.completed.step-container .step-desc {
  opacity: 0.3;
  font-weight: 100;
}

.completed.step-container .step-number span {
  display: none;
}
.completed.step-container .step-number .fa-check {
  display: block;
}
.fa-check {
  display: none;
}
.completed.step-container .step-number {
  font-weight: 700;
  border: 0;
  background-color: aquamarine;
}
</style>
