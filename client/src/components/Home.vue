<template>
  <div id="app">
    <Navbar />
    <Weather />
    <AuthPage />

  </div> 
</template>

<script>
import Navbar from "@/components/Navbar";
import Weather from "@/components/Weather";
import AuthPage from "@/components/AuthPage"

export default {
  name: "Home",
  components: {
    Navbar,
    Weather,
    AuthPage
  }
};
</script>
