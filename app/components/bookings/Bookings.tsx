import { Booking, BookingDataForm } from "@/app/models/Booking";
import { ShowBooking } from "./ShowBooking";
import { Customer } from "@/app/models/Customer";
import Link from "next/link";

type BookingsProps = {
  allBookings: Booking[];
  allCustomers: Customer[];
  hotelId: string;
  removeBooking: (id: string) => void;
  saveBooking: (id: string, changedBooking: BookingDataForm) => void;
  page: number;
};

export const Bookings = ({
  allBookings,
  allCustomers,
  removeBooking,
  saveBooking,
  hotelId,
  page,
}: BookingsProps) => {
  const hotelBookings = allBookings.filter(
    (booking) => booking.data.hotelId === hotelId,
  );

  const bookingsPerPage = 20;

  const firstBookingIndex = (page - 1) * bookingsPerPage;
  const lastBookingIndex = firstBookingIndex + bookingsPerPage;

  const bookingsToShow = hotelBookings.slice(
    firstBookingIndex,
    lastBookingIndex,
  );

  let numberOfPages = Math.ceil(hotelBookings.length / bookingsPerPage);

  if (numberOfPages === 0) {
    numberOfPages = 1;
  }

  return (
    <>
      <section className="overflow-x-auto bg-secondary shadow-sm">
        <table className="w-full table-fixed border-collapse font-body">
          <thead>
            <tr className="border-b border-stone">
              <th
                scope="col"
                className="w-[8%] px-8 py-4 text-left text-xs font-light uppercase tracking-[0.12em] text-charcoal"
              >
                NR.
              </th>
              <th
                scope="col"
                className="w-[24%] px-8 py-4 text-left text-xs font-light uppercase tracking-[0.12em] text-charcoal"
              >
                GÄST
              </th>
              <th
                scope="col"
                className="w-[18%] px-8 py-4 text-left text-xs font-light uppercase tracking-[0.12em] text-charcoal"
              >
                INCHECKNING
              </th>
              <th
                scope="col"
                className="w-[18%] px-8 py-4 text-left text-xs font-light uppercase tracking-[0.12em] text-charcoal"
              >
                UTCHECKNING
              </th>
              <th
                scope="col"
                className="w-[12%] px-8 py-4 text-left text-xs font-light uppercase tracking-[0.12em] text-charcoal"
              >
                NÄTTER
              </th>
              <th
                scope="col"
                className="w-[20%] px-8 py-4 text-left text-xs font-light uppercase tracking-[0.12em] text-charcoal"
              ></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-stone border-t border-stone">
            {bookingsToShow.map((oneBooking, index) => (
              <ShowBooking
                key={oneBooking.id}
                oneBooking={oneBooking}
                rowNumber={firstBookingIndex + index + 1}
                allCustomers={allCustomers}
                removeBooking={removeBooking}
                saveBooking={saveBooking}
              />
            ))}
          </tbody>
        </table>
      </section>
      <div className="mt-6 flex items-center justify-center gap-4 font-body text-sm">
        {page > 1 && (
          <Link href={`/bookings?page=${page - 1}`} className="underline">
            Föregående
          </Link>
        )}

        <span>
          Sida {page} av {numberOfPages}
        </span>

        {page < numberOfPages && (
          <Link href={`/bookings?page=${page + 1}`} className="underline">
            Nästa
          </Link>
        )}
      </div>
    </>
  );
};
