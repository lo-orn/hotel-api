import {
  countAvailableRooms,
  countNights,
  getCheckInsToday,
  getComingWeek,
} from "../lib/stats";
import { Booking } from "../models/Booking";

type GuestStatsProps = {
  bookings: Booking[];
  hotelId: number;
};

export default function HeroGuestSection({
  bookings,
  hotelId,
}: GuestStatsProps) {
  const hotelBookings = bookings.filter(
    (booking) => booking.hotelId === hotelId,
  );

  const availableRooms = countAvailableRooms(bookings);
  const checkIns = getCheckInsToday(hotelBookings);
  const comingWeek = getComingWeek(hotelBookings);

  return (
    <div className="grid grid-cols-3 gap-2 m-4">
      <div className="col-span-2 bg-primary p-8">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg">Incheckningar idag</h2>
          <span className="text-xs uppercase tracking-wide text-charcoal/60">
            {checkIns.length} gäster
          </span>
        </div>

        <div className="mt-6 divide-y divide-charcoal/10">
          {checkIns.map((booking) => (
            <div key={booking.id} className="py-4">
              <p className="text-lg"> {booking.customerName}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-charcoal">
                {countNights(booking.checkInDate, booking.checkOutDate)} nätter
                - utcheckning {booking.checkOutDate}
              </p>
            </div>
          ))}

          <div className="py-4">
            <p className="text-lg">Placeholder Namn</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-charcoal/50">
              1 natt utcheckning 2026-08-13
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-1 flex flex-col gap-6 bg-primary">
        <div className="bg-secondary p-8">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg">Kommande vecka</h2>
            <a href="#" className="text-xs underline">
              Visa alla
            </a>
          </div>

          <div className="mt-6 divide-y divide-charcoal/10">
            {comingWeek.map((booking) => (
              <div key={booking.id} className="py-4">
                <p className="text-lg">{booking.customerName}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-charcoal/50">
                  {countNights(booking.checkInDate, booking.checkOutDate)}{" "}
                  nätter in {booking.checkInDate}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-l-4 border-warning bg-warning/20 p-4 text-sm">
          Max <strong>3 bokningar per dag</strong>. Idag: {availableRooms} rum{" "}
          {availableRooms <= 1 ? "ledigt" : "lediga"}.
        </div>
      </div>
    </div>
  );
}
