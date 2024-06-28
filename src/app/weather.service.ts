export class WeatherService {
  getWeatherInfo(city: string) {
    if (city.charAt(0) == 'a') {
      return [
        {
          city: 'A Town',
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
          city: 'B City',
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
        city: 'Somewhere',
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
