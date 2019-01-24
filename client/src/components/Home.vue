<template>
  <div id="app">
    <Navbar />
    <Weather />
    <AuthPage />

    <!-- <Login /> -->
    <!-- <Register /> -->
  </div> 
</template>

<script>
import Navbar from "@/components/Navbar";
import Weather from "@/components/Weather";
// import Login from "@/components/Login";
// import Register from "@/components/Register";
import AuthPage from "@/components/AuthPage"

export default {
  name: "Home",
  components: {
    Navbar,
    Weather,
    // Login,
    // Register,
    AuthPage
  }
};
</script>
