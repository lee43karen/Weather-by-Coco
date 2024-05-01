import {
  Alert,
  Backdrop,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Grid,
} from "@mui/material";
import { useState } from "react";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import DailyForecast from "../components/DailyForecast/DailyForecast";
import SearchBar from "../components/shared/SearchBar";
import WeatherCard from "../components/shared/WeatherCard";
import { fetchWeatherData } from "../utilities/api/Service";
import sky from "../assets/clouds-in-the-sky.jpg";

const WEATHER_ERROR = "We had trouble finding the weather for that location. Please contact support if the issue persists."

export default function Home() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function onSelectOption(location) {
    if (location) {
      setLocation(location);
      setLoading(true);
      fetchWeatherData(location.lat, location.lon, (response) => {
        setLoading(false);
        if (response.status === 200) {
          setError(false);
          setWeather(response.data);
        } else {
          setError(true);
        }
      });
    }
  }

  if (location && weather) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <WeatherCard>
            <CardMedia
              component="img"
              sx={{ height: 100 }}
              alt="Clouds in the sky"
              image={sky}
            />
            <CardHeader
              title={`Weather in ${location.name}`}
              titleTypographyProps={{
                variant: "h4",
                component: "h1",
              }}
            />
            <CardContent className="flex flex-col gap-2">
              <SearchBar onSelectOption={onSelectOption} />
              {error && (
                <Alert severity="error">
                  {WEATHER_ERROR}
                </Alert>
              )}
            </CardContent>
          </WeatherCard>
        </Grid>
        <Grid item xs={12}>
          <CurrentWeather data={weather.current} />
        </Grid>
        <Grid item xs={12}>
          <DailyForecast time={weather.current?.dt} data={weather.daily} />
        </Grid>
      </Grid>
    );
  }
  return (
    <WeatherCard>
      <CardMedia
        component="img"
        sx={{ height: 450 }}
        alt="Clouds in the sky"
        image={sky}
      />
      <CardHeader
        title="Weather by Coco"
        titleTypographyProps={{
          variant: "h4",
        }}
        subheader={"Get started with a location"}
      />
      <CardContent className="flex flex-col gap-2">
        <SearchBar onSelectOption={onSelectOption} />
        {error && (
          <Alert severity="error">
            {WEATHER_ERROR}
          </Alert>
        )}
      </CardContent>
      <Backdrop open={loading}>
        <CircularProgress />
      </Backdrop>
    </WeatherCard>
  );
}
