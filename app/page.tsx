import { Booking } from "./models/Booking";
import { getBookings, getCustomers } from "./services/hotelApi";
import { HeroSectionMain } from "./components/HeroSectionMain";
import QuickActionSection from "./components/QuickActionSection";
import HeroGuestSection from "./components/HeroGuestSection";
import { Customer } from "./models/Customer";

const GARDEN_HOTEL_ID = "06504f9d-9f6f-43b0-a7e4-9229ef981bcc";

export default async function Home() {
  let bookings: Booking[] = [];
  let customers: Customer[] = [];

  try {
    bookings = await getBookings();
    customers = await getCustomers();
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <main>
        <section>
          <HeroSectionMain bookings={bookings} hotelId={GARDEN_HOTEL_ID}/>
        </section>
        <section>
          <QuickActionSection />
        </section>
        <HeroGuestSection bookings={bookings} customers={customers}
          hotelId={GARDEN_HOTEL_ID}/>
      </main>
    </>
  );
}
