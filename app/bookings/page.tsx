import { BookingPageContent } from "../components/bookings/BookingPageContent";
import { seedBooking } from "../lib/seedBooking";
import { Booking } from "../models/Booking";
import { getBookings, getCustomers } from "../services/hotelApi";
import { Bookings } from "../components/bookings/Bookings";
import { Customer } from "../models/Customer";
import { getCustomers } from "../services/hotelApi";

export default async function BookingsPage() {
  let allCustomers: Customer[] = await getCustomers();

  if (!Array.isArray(allCustomers)) {
    allCustomers = [];
  }

  const ladanHotelId = "59fb7db7-bf26-42f4-8bc2-f17c76186cbf";

  const allBookings: Booking[] = await seedBooking(ladanHotelId, allCustomers);

  const ladanBookings = allBookings.filter((oneBooking) => {
    return oneBooking.data.hotelId === ladanHotelId;
  });

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