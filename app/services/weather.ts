export type Weather = {
  temperature: number;
  weatherCode: number;
};

export const getWeather = async (): Promise<Weather> => {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=59.33&longitude=18.07&current=temperature_2m,weather_code",
    { next: { revalidate: 1800 } },
  );

  if (!response.ok) {
    throw new Error("could not fetch weather");
  }
  const data = await response.json();

  return {
    temperature: Math.round(data.current.temperature_2m),
    weatherCode: data.current.weather_code,
  };
};
