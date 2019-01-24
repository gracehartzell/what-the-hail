<template id="modal-template">
    <transition name="modal">
        <div class="modal-mask" v-show="show">
            <div class="modal-container">
                <div class="modal-header">
                    <h3>Login</h3>
                </div>
                <div class="modal-body">
                  <Login />
                </div>
            </div>
        </div>
    </transition>
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

<style>
#auth-page {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 35%;
  flex-wrap: wrap;
}
</style>

