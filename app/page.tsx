import { Booking } from "./models/Booking";
import { HeroSectionMain } from "./components/HeroSectionMain";
import QuickActionSection from "./components/QuickActionSection";
import HeroGuestSection from "./components/HeroGuestSection";
import { Customer } from "./models/Customer";
import { Hotel } from "./models/Hotel";
import { seedHotel } from "./lib/seedHotel";
import { getBookings } from "./services/bookings";
import { getCustomers } from "./services/customerApi";
import { LADAN_HOTEL_ID } from "./services/apiConfig";

export default async function Home() {
  let bookings: Booking[] = [];
  let customers: Customer[] = [];
  let hotel: Hotel[] = [];

  // try {
  //   hotels = await seedHotel();
  //   bookings = await getBookings();
  //   customers = await getCustomers();

  // } catch (error) {
  //   console.error(error);
  // }

  try {
    hotel = await seedHotel();
    bookings = await getBookings();
    customers = await getCustomers();

    if (!Array.isArray(bookings)) {
      bookings = [];
    }

    if (!Array.isArray(customers)) {
      customers = [];
    }

    if (!Array.isArray(hotel)) {
      hotel = [];
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <main>
        <section>
          <HeroSectionMain bookings={bookings} hotelId={LADAN_HOTEL_ID} />
        </section>
        <section>
          <QuickActionSection
            customers={customers}
            bookings={bookings}
            hotelId={LADAN_HOTEL_ID}
          />
        </section>
        <HeroGuestSection
          bookings={bookings}
          customers={customers}
          hotelId={LADAN_HOTEL_ID}
        />
      </main>
    </>
  );
}
