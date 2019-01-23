<template>
  <div id='app'>
    <Navbar />
    <Login />
    <Register />
  </div> 
</template>

<script>
  import Navbar from "@/components/Navbar";
  import Login from "@/components/Login";
  import Register from "@/components/Register";
  export default {
    name: "Home",
    components: {
      Navbar,
      Login,
      Register
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
