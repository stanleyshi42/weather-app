import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.css',
})
export class WeatherDisplayComponent {
  cityInput: string = '';
  cities: string[] = [];

  constructor() {
    this.getCities();
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
    this.cities = this.cities.splice(index, 1);
    console.log(this.cities);
  }
}
