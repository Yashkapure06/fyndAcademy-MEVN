<template>
    <div>
        
        
        <center>
    <div class="input-group mb-3" style="width:20%" >
        <input type="text" class="form-control"  v-model="location" placeholder="Enter location" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <span class="input-group-text" id="basic-addon2">Location</span>
    </div>
    <button class="btn btn-primary" @click="getWeather">Get Weather</button>
        <div class="card" style="width: 18rem;margin-top: 15px;">
            <img class="card-img-top" v-if="weather.icon" :src="`http://openweathermap.org/img/wn/${weather.icon}@2x.png`" alt="weather icon">
            <div class="card-body">
                <h1>{{ this.location }}</h1>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Temperature</strong>: {{ weather.temperature }}°C</li>
                <li class="list-group-item"><strong>Date</strong>: {{ weather.date }}</li>
                <li class="list-group-item"><strong>Humidity</strong>: {{ weather.humidity }}%</li>
                <li class="list-group-item"><strong>Sky</strong>: {{ weather.clearSky }}</li>
                <li class="list-group-item"><strong>Breeze</strong>: {{ weather.breeze }}m/s </li>
                <li class="list-group-item"><strong>Season</strong>: {{ weather.season }}</li>
                <li class="list-group-item">{{ weather.isDay ? 'Day' : 'Night' }}</li>
                
            </ul>
        </div>
    </center>
        

</div>
</template>

<script>
export default {
    data() {
      return {
        location: '',
        weather: {
          temperature: null,
          humidity: null,
          date: null,
          clearSky: null,
          breeze: null,
          season: null,
          isDay: null,
          icon: null
        },
        error: null
      };
    },
    methods: {
      async getWeather() {
        try {
          const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=c4f86ece00bc8aa272652ac9065af12d`);
          const data = await response.json();
          this.weather.temperature = (data.main.temp - 273.15).toFixed(2);//google kiya toFixed()
          this.weather.time = new Date(data.dt * 1000).toLocaleTimeString();
          this.weather.date = new Date(data.dt * 1000).toLocaleDateString();
        this.weather.humidity = data.main.humidity;
        this.weather.clearSky = data.weather[0].description;
        this.weather.breeze = data.wind.speed;
        
          const month = new Date(data.dt * 1000).getMonth();
          if (month >= 2 && month <= 4) {
            this.weather.season = 'Spring';
          } else if (month >= 5 && month <= 7) {
            this.weather.season = 'Summer';
          } else if (month >= 8 && month <= 10) {
            this.weather.season = 'Autumn';
          } else {
            this.weather.season = 'Winter';
          }
  
          const sunset = data.sys.sunset * 1000;
          const sunrise = data.sys.sunrise * 1000;
          const currentTime = new Date().getTime();
          this.weather.isDay = currentTime > sunrise && currentTime < sunset;
  
          this.weather.icon = data.weather[0].icon;
        } catch (error) {
          console.error(error);
          this.error = error;
        }
      }
    }
  };
  </script>