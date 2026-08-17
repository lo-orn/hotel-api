import { Booking } from "@/app/models/Booking";
import { Customer } from "@/app/models/Customer";

type ShowBookingProps = {
  oneBooking: Booking;
  rowNumber: number;
  allCustomers: Customer[];
};

export const ShowBooking = ({
  oneBooking,
  rowNumber,
  allCustomers,
}: ShowBookingProps) => {
  const matchingCustomers = allCustomers.filter((oneCustomer) => {
    return oneCustomer.id === oneBooking.data.customerId;
  });

  const matchingCustomer = matchingCustomers[0];

  let customerName = oneBooking.data.customerId;

  if (matchingCustomer) {
    customerName = `${matchingCustomer.data.firstName} ${matchingCustomer.data.lastName}`;
  }
  return (
    <>
      <tr>
        <td>{rowNumber}</td>
        <td>{customerName}</td>
        <td>{oneBooking.data.checkInDate}</td>
        <td>{oneBooking.data.checkOutDate}</td>
        <td>{oneBooking.data.guests}</td>
        <td>
          <a href="#">Ändra</a>
          <a href="#">Avboka</a>
        </td>
      </tr>
    </>
  );
};
