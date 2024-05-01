import { WEATHER_KEY } from "./Keys";
import axios from "axios"

const GEO_URL = 'http://api.openweathermap.org/geo/1.0';
const GEO_LIMIT = 5;
const WEATHER_URL = 'https://api.openweathermap.org/data/3.0';

export async function fetchWeatherData(lat, lon, callback) {
  try {
    const response = await axios.get(`${WEATHER_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_KEY}`)
    callback(response)
  } catch(error) {
    console.error("Error fetching weather data:", error);
    callback(error)
  }
}

async function fetchByString(input) {
  try {
    const response = await axios.get(
      `${GEO_URL}/direct?q=${input}&limit=${GEO_LIMIT}&appid=${WEATHER_KEY}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching cities by name:", error);
    return error;
  }
}

async function fetchByZip(input) {
  try {
    const response = await axios.get(
      `${GEO_URL}/zip?zip=${input}&limit=${GEO_LIMIT}&appid=${WEATHER_KEY}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching cities by zip:", error);
    return error;
  }
}

export async function fetchLocations(input, callback) {
  const response = /^\d+$/.test(input) ? await fetchByZip(input) : await fetchByString(input)
  callback(response)
}

export async function fetchLocationsByCoords(lat, lon, callback) {
  try {
    const response = await axios.get(
      `${GEO_URL}/reverse?lat=${lat}&lon=${lon}&limit=${GEO_LIMIT}&appid=${WEATHER_KEY}`
    );
    callback(response)
  } catch (error) {
    console.error("Error fetching locations by coordinates:", error);
    callback(error)
  }
}