import { CardContent, CardHeader, Grid } from "@mui/material";
import WeatherCard from "../shared/WeatherCard";
import Day from "./Day";

const NUM_DAYS = 5;

export default function DailyForecast({ data }) {
  if (!data) {
    return false;
  }

  return (
    <WeatherCard>
      <CardHeader
        title="Daily Forecast"
        titleTypographyProps={{
          variant: "h4",
          component: "h2"
        }}
      />
      <CardContent>
        <Grid container spacing={2}>
          {data.slice(0, NUM_DAYS).map((day) => (
            <Day key={day.dt} data={day} />
          ))}
        </Grid>
      </CardContent>
    </WeatherCard>
  );
}
