<template>
  <div>
    
  </div>
</template>

<script>
import { getCookie } from "~~/tools/cookieHandler";
let layoutChecker = getCookie('active_user') != null ? 'signedin' : 'default'
definePageMeta({
  layout: layoutChecker
})
console.log(layoutChecker)
</script>
<style scoped>
  *{
    background-color: #23252c;
  }
</style>