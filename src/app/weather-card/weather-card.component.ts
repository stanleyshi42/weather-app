import { Component, Input } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css',
})
export class WeatherCardComponent {
  @Input() city!: string;
  srv!: any;
  weatherInfo: any;
  weather: any;

  constructor(srv: WeatherService) {
    this.srv = srv;
  }

  ngOnInit() {
    this.weatherInfo = this.srv.getWeatherInfo(this.city);
    this.weather = this.weatherInfo[0].weather;
  }
}
