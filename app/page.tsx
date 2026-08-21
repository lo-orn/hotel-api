import { Booking } from "./models/Booking";
import { getBookings, getCustomers } from "./services/hotelApi";
import { HeroSectionMain } from "./components/HeroSectionMain";
import QuickActionSection from "./components/QuickActionSection";
import HeroGuestSection from "./components/HeroGuestSection";
import { Customer } from "./models/Customer";
import { Hotel } from "./models/Hotel";
import { seedHotel } from "./lib/seedHotel";

const LADAN_HOTEL_ID = "16df1534-f9d7-4300-aa5e-e9b50b9b9516";

export default async function Home() {
  let bookings: Booking[] = [];
  let customers: Customer[] = [];
  let hotel: Hotel[] = []
  

  try {
    hotel = await seedHotel();
    bookings = await getBookings();
    customers = await getCustomers();

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
          <QuickActionSection customers={customers} bookings={bookings} hotelId={LADAN_HOTEL_ID} />
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
