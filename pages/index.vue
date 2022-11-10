<template>
  <div>
    {{data}}
  </div>
</template>

<script setup>
  const data = await this.$profileRepository.index()
</script>
<style scoped>
  *{
    background-color: #23252c;
  }
</style>