<template>
  <div id="header">
    <img src="../assets/hailLOGO.svg.png">
    <h1>What the Hail?</h1>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
#header {
  border: 1px solid red;
  width: 100%;
  height: 75px;
  display: flex;
}

h1 {
  font-weight: normal;
}
img {
  height: 75px;
}
</style>