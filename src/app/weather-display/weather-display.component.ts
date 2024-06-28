import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.css',
})
export class WeatherDisplayComponent {
  cityInput: string = '';
  cities: string[] = [];

  addCity() {
    // Input validation
    if (!this.cities.includes(this.cityInput.trim()) && this.cityInput != '') {
      this.cities.push(this.cityInput.trim());
      this.cityInput = '';
    }
  }

  deleteAllCities() {
    this.cities = [];
  }

  deleteCity(index: number) {
    console.log('deleting city: ', index);

    this.cities = this.cities.splice(index, 1);
    console.log(this.cities);
  }
}
