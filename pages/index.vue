<template>
  <div class="home-container">
    <div class="home-intro">
      <div>
        <h1>Let your <br/> <span>Github Account</span> <br/> be <br/> <span>your portfolio</span></h1>
        <button @click="navigateTo('/create')">Get started</button>
      </div>
      <div class="home-git-icons">
        <i class="fa-brands fa-github"></i>
      </div>
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
    justify-content: space-between;
  }

  .home-intro{
    margin: 6em 0 6em 6em;
    display: flex; 
    justify-content: space-around;
    align-items: center;
    animation: fadeInFromBottom 1.5s ease-in-out; 
  }

  .home-intro div{
    margin-right: 10em;
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
    color: #fff;
    font-weight: 300;
  }

  .fa-github {
    color: #918e9b; 
    font-size: 40em;
  }

  @keyframes fadeInFromBottom{
  0%{
    margin: 12em 0 6em 6em;
    opacity: 0;
  }

  1%{
    margin: 12em 0 6em 6em; 
    opacity: 0;
  }

  100%{
    margin: 6em 0 6em 6em; 
    opacity: 1; 
  }
}
</style>