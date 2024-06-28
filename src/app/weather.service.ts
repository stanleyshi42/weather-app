import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherInfo } from './weather-info.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiurl = 'http://localhost:3000/weatherInfo';

  constructor(private http: HttpClient) {}

  getWeather(): Observable<WeatherInfo[]> {
    return this.http.get<WeatherInfo[]>(this.apiurl);
  }

  // Static JSON data array
  getWeatherInfo(c: string) {
    let city = c.toLowerCase();
    if (city.charAt(0) == 'a') {
      return [
        {
          city: city,
          weather: [
            [1, 1],
            [1, 1],
            [1, 1],
            [1, 1],
            [1, 1],
            [1, 1],
            [1, 1],
          ],
        },
      ];
    }
    if (city.charAt(0) == 'b') {
      return [
        {
          city: city,
          weather: [
            [2, 2],
            [2, 2],
            [2, 2],
            [2, 2],
            [2, 2],
            [2, 2],
            [2, 2],
          ],
        },
      ];
    }
    return [
      {
        city: city,
        weather: [
          [3, 3],
          [3, 3],
          [3, 3],
          [3, 3],
          [3, 3],
          [3, 3],
          [3, 3],
        ],
      },
    ];
  }
}
