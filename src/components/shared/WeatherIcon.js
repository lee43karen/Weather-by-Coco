import { Box } from "@mui/system";

const SIZES = {
  sm: 50,
  lg: 100,
};

export default function WeatherIcon({ alt, id, size = "lg" }) {
  if (!id) {
    return false;
  }
  return (
    <Box
      component="img"
      alt={alt}
      src={`https://openweathermap.org/img/wn/${id}@2x.png`}
      sx={{
        height: SIZES[size],
      }}
    />
  );
}
