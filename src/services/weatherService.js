const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const BASE_URL =
  "https://api.openweathermap.org/data/2.5/weather";

export async function getWeather(latitude, longitude) {
  const url =
    `${BASE_URL}?lat=${latitude}` +
    `&lon=${longitude}` +
    `&appid=${API_KEY}` +
    `&units=metric`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Weather API error: ${response.status}`);
  }

  return response.json();
}