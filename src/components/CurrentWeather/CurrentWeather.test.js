import React from "react";
import { render, screen } from "@testing-library/react";
import CurrentWeather from "./CurrentWeather";

describe("CurrentWeather", () => {
  const mockData = {
    "dt": 1714527640,
    "sunrise": 1714470992,
    "sunset": 1714521174,
    "temp": 13.92,
    "feels_like": 13.64,
    "pressure": 1012,
    "humidity": 87,
    "dew_point": 11.79,
    "uvi": 0,
    "clouds": 100,
    "visibility": 10000,
    "wind_speed": 4.12,
    "wind_deg": 70,
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }
    ],
    "rain": {
      "1h": 0.49
    }
  };

  it("renders current weather data", () => {
    render(<CurrentWeather data={mockData} />);

    expect(screen.getByText("Current Weather")).toBeInTheDocument();
    expect(screen.getByText("57°F")).toBeInTheDocument();
    expect(screen.getByText("Feels like 57°F")).toBeInTheDocument();
    expect(screen.getByText("light rain")).toBeInTheDocument();

    expect(screen.getByText("Sunrise / Sunset")).toBeInTheDocument();
    expect(screen.getByText("5:56 AM / 7:52 PM")).toBeInTheDocument();
    expect(screen.getByText("Cloud Cover")).toBeInTheDocument();
    expect(screen.getByText("100%")).toBeInTheDocument();
    expect(screen.getByText("Humidity")).toBeInTheDocument();
    expect(screen.getByText("87%")).toBeInTheDocument();
    expect(screen.getByText("Wind")).toBeInTheDocument();
    expect(screen.getByText("E 4.12 mph")).toBeInTheDocument();
    expect(screen.getByText("Dewpoint")).toBeInTheDocument();
    expect(screen.getByText("53°F")).toBeInTheDocument();
    expect(screen.getByText("Visibility")).toBeInTheDocument();
    expect(screen.getByText("6.22 mi")).toBeInTheDocument();
    expect(screen.getByText("Barometer")).toBeInTheDocument();
    expect(screen.getByText("29.88 in")).toBeInTheDocument();
    expect(screen.getByText("UV Index")).toBeInTheDocument();
    expect(screen.getByText("0 of 11")).toBeInTheDocument();

  });

  it("returns nothing if no data present", () => {
    render(<CurrentWeather />);
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });
});
