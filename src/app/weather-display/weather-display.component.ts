import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherInfo } from '../weather-info.model';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.css',
})
export class WeatherDisplayComponent {
  cityInput: string = '';
  cities: string[] = [];
  weatherInfo!: WeatherInfo[];

  constructor(private weatherService: WeatherService) {
    this.getCities();
  }

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe((data) => {
      console.log(data);
      this.weatherInfo = data;
    });
  }

  // Gets cities from local storage; creates an empty array if 'cities' key doesn't exist yet
  getCities() {
    this.cities = JSON.parse(localStorage.getItem('cities') || '[]');
  }

  addCity() {
    // Input validation
    if (this.cities.includes(this.cityInput.trim()) || this.cityInput == '')
      return;

    this.getCities();
    this.cities.push(this.cityInput.trim());
    localStorage.setItem('cities', JSON.stringify(this.cities));
    this.cityInput = '';
  }

  deleteAllCities() {
    localStorage.removeItem('cities');
    this.getCities();
  }

  deleteCity(index: number) {
    this.getCities();
    if (index > -1) {
      this.cities.splice(index, 1);
      localStorage.setItem('cities', JSON.stringify(this.cities));
    }
  }
}
