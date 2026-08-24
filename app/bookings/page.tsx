import { BookingPageContent } from "../components/bookings/BookingPageContent";
import { seedBooking } from "../lib/seedBooking";
import { Booking } from "../models/Booking";
import { Customer } from "../models/Customer";
import { getCustomers } from "../services/customerApi";
import { LADAN_HOTEL_ID } from "../services/apiConfig";

export default async function BookingsPage() {
  let allCustomers: Customer[] = await getCustomers();

  if (!Array.isArray(allCustomers)) {
    allCustomers = [];
  }

  const allBookings: Booking[] = await seedBooking(
    LADAN_HOTEL_ID,
    allCustomers,
  );

  return (
    <>
      <main>
        <section>
          <h1>BOKNINGAR</h1>
          <p>+ NY BOKNING</p>
        </section>

        <button>ALLA</button>

        <BookingPageContent
          allBookings={allBookings}
          allCustomers={allCustomers}
          hotelId={LADAN_HOTEL_ID}
        />
      </main>
    </>
  );
}