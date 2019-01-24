<template>
  <div id="app">
    <Navbar />
    <Weather />
    To save your information and join us again, either login or register below! <AuthPage />
  </div> 
</template>

<script>
import Navbar from "@/components/Navbar";
import Weather from "@/components/Weather";
import AuthPage from "@/components/AuthPage";


export default {
  name: "Home",
  components: {
    Navbar,
    Weather,
    AuthPage
  }
};
</script>
