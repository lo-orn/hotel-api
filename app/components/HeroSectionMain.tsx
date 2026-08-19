import { Booking } from "../models/Booking";
import { BookingStats } from "./BookingStats";

type HeroSectionProps = {
  bookings: Booking[];
};

export function HeroSectionMain({ bookings }: HeroSectionProps) {
  const today = new Date().toLocaleDateString("sv-SE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="grid grid-cols-2 h-150 min-h-0 m-4 gap-2">
     <img className="object-cover w-full h-full min-h-0" src="https://images.unsplash.com/photo-1780917003144-b4ce735ee2bf?w=1000&h=900&fit=crop&auto=format" alt="image of a bed with a pillow and some books on a shelf"/>

      <div className="bg-black text-cream p-10 flex flex-col justify-between min-h-0">
        <div>
          <p className="text-xs uppercase tracking-wide text-stone">{today}</p>
          <h1 className="font-display text-5xl mt-4">
            {" "}
           Dagens bokningsöversikt
          </h1>
        </div>
        <BookingStats bookings={bookings} />
      </div>
    </div>
  );
}