
<template>
  <div id="app">
    <h1>What the hail??</h1>
    <Login></Login>
    <Register></Register>
  </div>
</template>

<script>
import Login from "@/components/Login";
import Register from "@/components/Register";
export default {
  name: "Home",
  components: {
    Login,
    Register
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
