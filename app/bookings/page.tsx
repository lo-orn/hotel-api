import { BookingPageContent } from "../components/bookings/BookingPageContent";
import { seedBooking } from "../lib/seedBooking";
import { Booking } from "../models/Booking";
import { Customer } from "../models/Customer";
import { getCustomers } from "../services/customerApi";
import { LADAN_HOTEL_ID } from "../services/apiConfig";
import BookingModalBtn from "../components/bookings/BookningModalBtn";

type BookingsPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function BookingsPage({
  searchParams,
}: BookingsPageProps) {
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;

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
      <main className="min-h-screen bg-primary px-6 py-10 md:px-10 lg:px-14">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-body text-xs font-light uppercase tracking-[0.15em] text-charcoal">
              HANTERING
            </p>

            <h1 className="font-display text-4xl md:text-5xl mt-4 tracking-tight">
              Bokningar
            </h1>
          </div>

          <BookingModalBtn
            customers={allCustomers}
            bookings={allBookings}
            hotelId={LADAN_HOTEL_ID}
          />
        </div>

        <BookingPageContent
          allBookings={allBookings}
          allCustomers={allCustomers}
          hotelId={LADAN_HOTEL_ID}
          page={page}
        />
      </main>
    </>
  );
}
