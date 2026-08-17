import { Booking } from "@/app/models/Booking";
import { ShowBooking } from "./ShowBooking";
import { Customer } from "@/app/models/Customer";

type BookingsProps = {
  allBookings: Booking[];
  allCustomers: Customer[];
};

export const Bookings = ({ allBookings, allCustomers }: BookingsProps) => {
  return (
    <>
      <section>
        <table>
          <thead>
            <tr>
              <th>NR.</th>
              <th>GÄST</th>
              <th>INCHECKNING</th>
              <th>UTCHECKNING</th>
              <th>NÄTTER</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {allBookings.map((oneBooking, index) => (
              <ShowBooking
                key={oneBooking.id}
                oneBooking={oneBooking}
                rowNumber={index + 1}
                allCustomers={allCustomers}
              />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};
