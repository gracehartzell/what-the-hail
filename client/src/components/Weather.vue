<template>
  <div id="location-search">
    <input id="city" type="text" placeholder="City" v-model="city" required>
    <input id="state" type="text" placeholder="State" v-model="state" required>
    <button type="submit" @click="handleSubmit">Submit</button>

    <div id="weather-display">
      <h2>{{this.temp}} {{this.unit}}<br><sub>{{this.tempC}} {{this.unitC}}</sub></h2>
      <h4>{{ this.text }}</h4>
      <h4>{{this.precip}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["nextUrl"],
  data() {
    return {
      city: "",
      state: "",
      temp: "",
      unit: "",
      tempC: "",
      unitC: "",
      background: "",
      text: "",
      precip: ""
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
        `https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/locations/v1/cities/search?apikey=0JqpVWnvICAal1ryn9I0T7zP99oQCvA4&q=${this.city
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
          let key = res[0].Key;
          const request2 = new Request(
            `https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=0JqpVWnvICAal1ryn9I0T7zP99oQCvA4`,
            options
          );
          fetch(request2)
            .then(res => {
              return res.json();
            })
            .then(res => {
              console.log(res[0]);
              this.temp =res[0].Temperature.Imperial.Value;
              this.unit = " °" + res[0].Temperature.Imperial.Unit;
              this.tempC =res[0].Temperature.Metric.Value;
              this.unitC = " °" + res[0].Temperature.Metric.Unit;
              this.text =
                "It's nice and " +
                res[0].WeatherText.toLowerCase() +
                " outside";
              this.precip =
                "Forecast calls for " +
                (res[0].HasPrecipitation === true ? "" : "no") +
                " rain today";
              this.background = res[0].WeatherIcon;
            });
        });
    }
  }
};
</script>

<style scoped>
.location-search {
  display: flex;
  align-items: baseline;
  vertical-align: top;
  margin-left: 15px;
}
input {
  width: 20%;
  background-color: rgba(255, 255, 255, 0.438)
}

#weather-display {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 100px auto;
}

#weather-display h2 {
  font-weight: 500;
  font-size: 2.5rem;
  text-align: center;
  padding: 40px;
}
</style>
