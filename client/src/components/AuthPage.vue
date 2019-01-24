<template>
  <div>
    <b-progress class="fixed-top" v-show="asyncState" :value="100" variant="primary" striped animated></b-progress>
    <b-container v-if="!signedIn">
      <b-row align-v="center" style="min-height: 100vh;">
          <b-col>
            <auth-page @sign-in="signedIn = true" @async-start="asyncState = true" @async-end="asyncState = false"/>
          </b-col>
      </b-row>
    </b-container>
    <main-page v-else @sign-out="signedIn = false" @async-start="asyncState = true" @async-end="asyncState = false"/>
  </div>
</template>


<script>
import Login from "@/components/Login";
import Register from "@/components/Register";

export default {
  data() {
    return {
      asyncState: false,
      signedIn: user || false
    };
  },
  components: {
    Login,
    Register
  }
};
</script>
