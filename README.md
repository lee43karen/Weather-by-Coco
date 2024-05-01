# Weather by Coco

Weather by Coco is a simple React app that displays basic weather information for a city. It is built with Material UI and styled with Tailwind CSS.

![image](https://github.com/lee43karen/Weather-by-Coco/assets/43963227/278cfb5c-6866-4a33-89e9-7fd9122b31aa)


## Features

- Search for a location by city name or zip code
- Get weather for your current location via geolocation
- View details about the current weather
- View a 5 day forecast for your area

## How to use
- Install `Node.js` and `npm` on your system.
- Clone the repository.
- Get an API key from [OpenWeatherMap](https://openweathermap.org/api) and subscribe to their free [One Call API](https://openweathermap.org/api/one-call-3).
- Navigate to `src/api` and create a file called `Keys.js`
- Add the following line into `Keys.js` replacing `YOUR_API_KEY` with your OpenWeatherMap API key:
```
export const WEATHER_KEY = "YOUR_API_KEY"
```
- Install the packages using `npm install`, and run the application using `npm start`.

## Future Improvements
- Routing and support for additional pages
- More unit testing
- Display additional weather details such as hourly forecasts, weather alerts, etc.
- Convert project to TypeScript
- Imperial vs. metric conversions, language settings
- Store weather icons in `src/assets`
- Dark/light mode
- Robust code documentation
