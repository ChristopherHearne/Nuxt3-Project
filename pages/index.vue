<template>
  <div>
    {{data}}
  </div>
</template>

<script setup>
const app = useNuxtApp()
const data = await app.$profileRepository.index()

</script>
<style scoped>
  *{
    background-color: #23252c;
  }
</style>