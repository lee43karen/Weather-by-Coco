import { CardContent, CardHeader, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  formatDate,
  formatPercent,
  formatPressure,
  formatTemp,
  formatTime,
  formatVisibility,
  formatWind,
} from "../../utilities/FormatUtils";
import DetailsList from "../shared/DetailsList";
import WeatherCard from "../shared/WeatherCard";
import WeatherIcon from "../shared/WeatherIcon";

export default function CurrentWeather({ data }) {
  if (!data) {
    return false;
  }

  return (
    <WeatherCard>
      <CardHeader
        avatar={
          <WeatherIcon id={data.weather?.[0]?.icon} alt={data.weather?.[0]?.main} />
        }
        title="Current Weather"
        titleTypographyProps={{
          variant: "h4",
          component: "h2",
        }}
        subheader={`As of ${formatDate(data.dt)} ${formatTime(data.dt)}`}
      />
      <CardContent className="flex flex-col lg:flex-row items-center gap-4">
        <Box className="px-8 flex flex-col items-center">
          <Typography variant="h3" component="div">
            {formatTemp(data.temp)}
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: "text.secondary",
            }}
            noWrap
          >
            {`Feels like ${formatTemp(data.feels_like)}`}
          </Typography>
          <Typography className="capitalize">
            {data.weather?.[0]?.description}
          </Typography>
        </Box>
        <DetailsList
          details={[
            {
              key: "Sunrise / Sunset",
              value: `${formatTime(data.sunrise)} / ${formatTime(data.sunset)}`,
            },
            { key: "Cloud Cover", value: formatPercent(data.clouds / 100) },
            { key: "Humidity", value: formatPercent(data.humidity / 100) },
            { key: "Wind", value: formatWind(data.wind_speed, data.wind_deg) },
            { key: "Dewpoint", value: formatTemp(data.dew_point) },
            { key: "Visibility", value: formatVisibility(data.visibility) },
            { key: "Barometer", value: formatPressure(data.pressure) },
            { key: "UV Index", value: `${data.uvi} of 11` },
          ]}
        />
      </CardContent>
    </WeatherCard>
  );
}
