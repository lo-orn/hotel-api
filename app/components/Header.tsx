import { LADAN_HOTEL_NAME } from "../services/apiConfig";
import Navigation from "./Navigation";
import WeatherDisplay from "./weather/WeatherDisplay";

export default function Header() {
  return (
    <header className="flex flex-wrap items-center gap-x-8 gap-y-2 bg-secondary px-4 pt-3 md:flex-nowrap md:px-10 md:pt-0">
      <div className="flex items-center gap-6">
        <p className="font-display text-lg uppercase tracking-wide text-black">
          {LADAN_HOTEL_NAME}
        </p>
        <span className="hidden h-6 w-px bg-charcoal/30 sm:block" aria-hidden="true" />

        <p className="hidden text-xs uppercase tracking-widest text-charcoal sm:block">
          bokningssystem
        </p>
      </div>
      <Navigation />

      <div className="ml-auto">
        <WeatherDisplay />
      </div>
    </header>
  );
}
