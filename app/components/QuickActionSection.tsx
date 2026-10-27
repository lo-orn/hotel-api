import { Booking } from "../models/Booking";
import { Customer } from "../models/Customer";
import BookingModalBtn from "./bookings/BookningModalBtn";

import GuestModalBtn from "./customers/GuestModalBtn";

  type QuickActionSectionProps = {
  customers: Customer[];
  bookings: Booking[];
  hotelId: string;
};

export default function QuickActionSection({customers, bookings, hotelId}: QuickActionSectionProps) {


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:h-96 gap-2 m-4">
      <div className="bg-stone p-6 md:p-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <BookingModalBtn customers={customers} bookings={bookings} hotelId={hotelId}  />
        <GuestModalBtn />
      </div>

      <img
        className="object-cover w-full h-56 md:h-full min-h-0"
        src="https://images.unsplash.com/photo-1782300601315-4b81ddba9b79?q=80&w=2666&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="närfotad bild av säng och fönster i varmt ljus"
      ></img>
    </div>
  );
}
