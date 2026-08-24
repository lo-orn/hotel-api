import { Booking } from "../models/Booking";
import { Bookings } from "../components/bookings/Bookings";
import { Customer } from "../models/Customer";
import { getBookings } from "../services/bookings";
import { getCustomers } from "../services/customerApi";
import { LADAN_HOTEL_ID } from "../services/apiConfig";

export default async function BookingsPage() {
  const allBookings: Booking[] = await getBookings();
  const allCustomers: Customer[] = await getCustomers();
//console.log("Antal bokningar:", allBookings.length);
//console.log("Alla bokningar:", allBookings);
  return (
    <>
      <main>
        <section>
          <h1>BOKNINGAR</h1>
          <p>+ NY BOKNING</p>
        </section>

        <button>ALLA</button>
        <Bookings allBookings={allBookings} allCustomers={allCustomers} hotelId={LADAN_HOTEL_ID} />
      </main>
    </>
  );
}
