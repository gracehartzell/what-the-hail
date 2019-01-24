<template>
  <div id="location-search">
    <input id="city" type="text" placeholder="City" v-model="city" required>
    <input id="state" type="text" placeholder="State" v-model="state" required>
    <button type="submit" @click="handleSubmit">Submit</button>
  </div>
</template>

<script>
export default {
  props: ["nextUrl"],
  data() {
    return {
      city: "",
      state: ""
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const options = {
        method: "get",
        headers: {
          Accept: "applications/json",
          "Content-Type": "application/json"
        }
      };

      const request = new Request(
        `https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/locations/v1/cities/search?apikey=3G82zFHhr6JnoMvvrcfscDsmO6bSzlWg&q=${this.city
          .charAt(0)
          .toUpperCase() + this.city.substr(1)}&alias=${this.state
          .charAt(0)
          .toUpperCase() + this.state.substr(1)}`,
        options
      );

      fetch(request)
        .then(res => {
          return res.json();
        })
        .then(res => {
          console.log(res[0].LocalizedName);
        });
    }
  }
};
</script>

<style scoped>
#location-search {
  border: 2px solid limegreen;
}
</style>
