import { Card } from "@mui/material";

export default function WeatherCard({ className, children }) {
  return (
    <Card
      className={className}
      sx={{
        backgroundColor: "rgb(255, 255, 255, 0.65)",
        borderRadius: "16px",
      }}
    >
      {children}
    </Card>
  );
}
