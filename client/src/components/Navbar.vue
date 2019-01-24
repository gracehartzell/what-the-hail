<template>
  <div id="header">
    <div class="logo">
      <img src="../assets/hailLOGO.svg.png">
      <h1>What the Hail?</h1>
    </div>
    <div class="buttons">
      <button>Login</button>
      <button>Register</button>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login";
import Register from "@/components/Register";

export default {
  name: "Navbar",
  data: {
    isHidden: true
  }
};
</script>

<style>
#header {
  width: 100%;
  height: 75px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-right: 15px;
}
#header img {
  height: 75px;
  margin-left: -5px;
}
.logo {
  display: flex;
  align-items: flex-end;
}

.buttons {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>