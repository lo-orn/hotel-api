import { Booking, BookingDataForm } from "@/app/models/Booking";
import { ShowBooking } from "./ShowBooking";
import { Customer } from "@/app/models/Customer";

type BookingsProps = {
  allBookings: Booking[];
  allCustomers: Customer[];
  hotelId: string;
  removeBooking: (id: string) => void;
  saveBooking: (id: string, changedBooking: BookingDataForm) => void;
};

export const Bookings = ({ allBookings, allCustomers, removeBooking, saveBooking, hotelId }: BookingsProps) => {

  const hotelBookings = allBookings.filter((booking) => booking.data.hotelId === hotelId)
  
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
            {hotelBookings.map((oneBooking, index) => (
              <ShowBooking
                key={oneBooking.id}
                oneBooking={oneBooking}
                rowNumber={index + 1}
                allCustomers={allCustomers}
                removeBooking={removeBooking}
                saveBooking={saveBooking}
              />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};
