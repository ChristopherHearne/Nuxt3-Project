<template>
  <div class="home-container">
    <div class="home-intro">
      <h1>Let your <br/> <span>Github Account</span> <br/> be <br/> <span>your portfolio</span></h1>
      <button>Get started</button>
    </div>
  </div>
</template>

<script setup>

</script>
<style scoped>
  .home-container{
    margin-left: 10%;
    display: flex; 
    align-items: left; 
    justify-content: left;
  }

  .home-intro{
    margin: 6em 10em;
  }
  
  h1{
    font-weight: 100;
    color: #fff;
    font-size: 76px;
    letter-spacing: -0.04em; 
  }
  span{
    font-weight: 400; 
    letter-spacing: -0.08em; 
  }
  
  button{
    color: #000; 
  }
</style>