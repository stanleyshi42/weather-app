export class WeatherService {
  getWeatherInfo(city: string) {
    console.log(city);
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
    if (city.charAt(0) == 'B City') {
      return [
        {
          city: 'b',
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
