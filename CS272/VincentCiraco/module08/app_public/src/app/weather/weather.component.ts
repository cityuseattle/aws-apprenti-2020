import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  WeatherData:any;
  constructor() { }
 
  ngOnInit(): void {
    this.getWeatherData();
    console.log(this.WeatherData)
  }
getWeatherData(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=seattle&appid=14924554211f72c80c808e65ab2a7df5')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})
    //let data = JSON.parse('{"coord":{"lon":-122.33,"lat":47.61},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":295.52,"feels_like":293.43,"temp_min":294.26,"temp_max":296.48,"pressure":1012,"humidity":38},"visibility":10000,"wind":{"speed":2.1,"deg":230},"clouds":{"all":90},"dt":1597195545,"sys":{"type":1,"id":3417,"country":"US","sunrise":1597150842,"sunset":1597202897},"timezone":-25200,"id":5809844,"name":"Seattle","cod":200}');
    //this.setWeatherData(data);
  }
  setWeatherData(data){
    this.WeatherData = data;
    //unix utc timestamp
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = false;//(currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_f = ((this.WeatherData.main.temp - 273.15)*1.8+32).toFixed(0);
    this.WeatherData.temp_feels_like = ((this.WeatherData.main.feels_like - 273.15)*1.8+32).toFixed(0);
    this.WeatherData.isRaining=true//this.WeatherData.weather.main;
  }
 
}