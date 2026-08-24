import { BookingPageContent } from "../components/bookings/BookingPageContent";
import { seedBooking } from "../lib/seedBooking";
import { Booking } from "../models/Booking";
import { Bookings } from "../components/bookings/Bookings";
import { Customer } from "../models/Customer";
import { getBookings } from "../services/bookings";
import { getCustomers } from "../services/customerApi";
import { LADAN_HOTEL_ID } from "../services/apiConfig";

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
        <Bookings allBookings={allBookings} allCustomers={allCustomers} hotelId={LADAN_HOTEL_ID} />
      </main>
    </>
  );
}