import { Booking } from "../models/Booking";
import { getBookings, getCustomers } from "../services/hotelApi";
import { Bookings } from "../components/bookings/Bookings";
import { Customer } from "../models/Customer";

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
        <Bookings allBookings={allBookings} allCustomers={allCustomers} />
      </main>
    </>
  );
}
