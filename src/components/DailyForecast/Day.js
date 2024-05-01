import { WaterDrop } from "@mui/icons-material";
import { CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { lightBlue } from "@mui/material/colors";
import {
  formatDate,
  formatTemp,
  formatDayFromToday,
  formatPercent,
} from "../../utilities/FormatUtils";
import WeatherCard from "../shared/WeatherCard";
import WeatherIcon from "../shared/WeatherIcon";

export default function Day({ data }) {
  if (!data) {
    return false;
  }
  
  return (
    <Grid item xs={12} lg={12 / 5}>
      <WeatherCard className="h-full">
        <CardHeader
          avatar={
            <WeatherIcon
              id={data.weather[0].icon}
              alt={data.weather[0].main}
              size="sm"
            />
          }
          title={formatDayFromToday(data.dt)}
          titleTypographyProps={{
            variant: "h6",
            component: "div",
          }}
          subheader={formatDate(data.dt)}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2} lg={12} justify="center" >
              <Box className="h-full flex justify-center items-center">
                <WaterDrop
                  sx={{
                    color: lightBlue[900],
                  }}
                  alt="Chance of precipitation"
                />
                <Typography>{formatPercent(data.pop)}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} lg={12}>
              <Box className="h-full flex items-center justify-center sm:justify-start lg:justify-center">
                <Box className="flex items-end gap-2">
                  <Typography variant="h4" component="div">{`${formatTemp(
                    data.temp.max
                  )}`}</Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      color: "text.secondary",
                    }}
                    noWrap
                  >
                    {`/ ${formatTemp(data.temp.min)}`}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} lg={12}>
              <Box className="h-full flex items-center">
              <Typography>{data.summary}</Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </WeatherCard>
    </Grid>
  );
}
