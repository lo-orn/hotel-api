import { Booking } from "./models/Booking";
import { getBookings } from "./services/hotelApi";
import { HeroSectionMain } from "./components/HeroSectionMain";
import QuickActionSection from "./components/QuickActionSection";

export default async function Home() {
  let bookings: Booking[] = [];
  try {
    bookings = await getBookings();
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <main>
        <section>
          <HeroSectionMain bookings={bookings} />
        </section>
        <section>
          <QuickActionSection/>
        </section>
      </main>
    </>
  );
}
