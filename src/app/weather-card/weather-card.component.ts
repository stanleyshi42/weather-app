import { Component, Input } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css',
})
export class WeatherCardComponent {
  @Input() index!: number;
  @Input() city!: string;
  @Input() deleteCity!: any;

  srv!: any;
  weatherInfo: any;
  cityName!: string;
  weather: any;

  // Inject service
  constructor(srv: WeatherService) {
    this.srv = srv;
  }

  // After component is created, call the service
  ngOnInit() {
    this.weatherInfo = this.srv.getWeatherInfo(this.city);
    this.cityName = this.weatherInfo[0].city;
    this.weather = this.weatherInfo[0].weather;
  }
}
