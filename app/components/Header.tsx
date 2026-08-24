import { LADAN_HOTEL_NAME } from "../services/apiConfig";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="flex items-center gap-8 bg-secondary px-10">
      <div className="flex items-center gap-6">
        <p className="font-display text-lg uppercase tracking-wide text-black">
          {LADAN_HOTEL_NAME}
        </p>
        <span className="h-6 w-px bg-charcoal/30" aria-hidden="true" />

        <p className="text-xs uppercase tracking-widest text-charcoal">
          bokningssystem
        </p>
        <Navigation />
      </div>
    </header>
  );
}
