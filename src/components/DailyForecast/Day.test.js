import React from 'react';
import { render, screen } from '@testing-library/react';
import Day from './Day';

describe('Day', () => {
  const mockData = {
    "dt": 1714492800,
    "sunrise": 1714470992,
    "sunset": 1714521174,
    "moonrise": 1714456500,
    "moonset": 1714489020,
    "moon_phase": 0.72,
    "summary": "Expect a day of partly cloudy with rain",
    "temp": {
      "day": 21.27,
      "min": 13.3,
      "max": 24.23,
      "night": 14.33,
      "eve": 20.86,
      "morn": 13.3
    },
    "feels_like": {
      "day": 20.97,
      "night": 14.12,
      "eve": 20.57,
      "morn": 13.24
    },
    "pressure": 1012,
    "humidity": 58,
    "dew_point": 12.42,
    "wind_speed": 3.05,
    "wind_deg": 129,
    "wind_gust": 6.17,
    "weather": [
      {
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10d"
      }
    ],
    "clouds": 98,
    "pop": 1,
    "rain": 4.15,
    "uvi": 6.14
  }

  it('renders day with appropriate data', () => {
    render(<Day data={mockData} />);
    
    expect(screen.getByText("April 30")).toBeInTheDocument();
    expect(screen.getByText("100%")).toBeInTheDocument();
    expect(screen.getByText("76°F")).toBeInTheDocument();
    expect(screen.getByText("/ 56°F")).toBeInTheDocument();
    expect(screen.getByText("Expect a day of partly cloudy with rain")).toBeInTheDocument();
  });

  it("returns nothing if no data present", () => {
    render(<Day />);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });
});
