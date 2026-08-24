import { getWeather } from "@/app/services/weather";
import { Cloud, CloudFog, CloudLightning, CloudRain, Snowflake, Sun } from "lucide-react";

const getWeatherIcons =(code: number) => {
    if (code <= 1) return Sun;
    if (code <= 3) return Cloud;
    if (code <= 48) return CloudFog;
    if (code <= 67) return CloudRain;
    if (code <= 77) return Snowflake 
    if(code <= 86) return CloudRain
    return CloudLightning
}

export default async function WeatherDisplay(){

    try {
    const weather = await getWeather();
    const Icon = getWeatherIcons(weather.weatherCode)

    return (
        <div className="flex items-center gap-2 text-sm text-charcoal">
            <Icon size={16} strokeWidth={1.5} aria-hidden="true"/>
            <span> Stockholm · {weather.temperature}°C</span>
        </div>
    )
}catch {
    return null
}

}