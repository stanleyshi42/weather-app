export class WeatherService {
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
