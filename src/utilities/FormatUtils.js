import { DAYS, DIRECTIONS, MONTHS } from "./Constants";

function convertDate(timestamp) {
  return new Date(timestamp * 1000);
}

export function formatTemp(temp, unit = "imperial") {
  if (unit === "metric") {
    return `${Math.round(temp)}°C`;
  }
  return `${Math.round((temp * 9) / 5 + 32)}°F`;
}

export function formatDate(timestamp) {
  const date = convertDate(timestamp);
  return `${MONTHS[date.getMonth()]} ${date.getDate()}`;
}

export function formatTime(timestamp) {
  const date = convertDate(timestamp);
  const militaryHours = date.getHours();
  let hours = militaryHours;
  if (militaryHours === 0) {
    hours = 12;
  } else if (militaryHours > 12) {
    hours = militaryHours - 12;
  }
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const period = militaryHours <= 11 ? "AM" : "PM";
  return `${hours}:${minutes} ${period}`;
}

export function formatDayFromToday(timestamp) {
  const today = new Date();
  const date = convertDate(timestamp);
  const diff = Math.ceil((date - today) / (60 * 60 * 24 * 1000));
  switch (true) {
    case diff === 0:
      return "Today";
    case diff === 1:
      return "Tomorrow";
    default:
      return DAYS[date.getDay()];
  }
}

export function formatWind(speed, degrees) {
  const direction =
    speed === 0 ? "" : DIRECTIONS[Math.round((degrees * 8) / 360) % 8] + " ";
  return `${direction}${speed} mph`;
}

export function formatPercent(percent) {
  return `${Math.round(percent * 100)}%`;
}

export function formatVisibility(meters, unit = "imperial") {
  if (unit === "metric") {
    return `${meters} m`;
  }
  return `${(meters / 1609).toFixed(2)} mi`;
}

export function formatPressure(hpa) {
  return `${(hpa / 33.863886666667).toFixed(2)} in`;
}

export function formatCity(city, state, country) {
  return [city, state, country].filter(Boolean).join(", ");
}
