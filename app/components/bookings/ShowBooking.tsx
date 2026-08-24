"use client";
import { useState } from "react";

import { Booking, BookingDataForm } from "@/app/models/Booking";
import { Customer } from "@/app/models/Customer";

type ShowBookingProps = {
  oneBooking: Booking;
  rowNumber: number;
  allCustomers: Customer[];
  removeBooking: (id: string) => void;
  saveBooking: (id: string, changedBooking: BookingDataForm) => void;
};

export const ShowBooking = ({
  oneBooking,
  rowNumber,
  allCustomers,
  removeBooking,
  saveBooking,
}: ShowBookingProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const [changedBooking, setChangedBooking] = useState<BookingDataForm>({
    id: oneBooking.data.id,
    hotelId: oneBooking.data.hotelId,
    customerId: oneBooking.data.customerId,
    checkInDate: oneBooking.data.checkInDate,
    checkOutDate: oneBooking.data.checkOutDate,
    guests: oneBooking.data.guests,
  });

  const matchingCustomers = allCustomers.filter((oneCustomer) => {
    return oneCustomer.id === oneBooking.data.customerId;
  });

  const matchingCustomer = matchingCustomers[0];

  //let customerName = oneBooking.data.customerId;
  let customerName = "Okänd gäst!";

  if (matchingCustomer) {
    customerName = `${matchingCustomer.data.firstName} ${matchingCustomer.data.lastName}`;
  }

  if (isEditing) {
    return (
      <tr>
        <td>{rowNumber}</td>
        <td>
          <select
            value={changedBooking.customerId}
            onChange={(e) =>
              setChangedBooking({
                ...changedBooking,
                customerId: e.target.value,
              })
            }
          >
            {allCustomers.map((oneCustomer) => (
              <option key={oneCustomer.id} value={oneCustomer.id}>
                {oneCustomer.data.firstName} {oneCustomer.data.lastName}
              </option>
            ))}
          </select>
        </td>
        <td>
          <input
            type="date"
            value={changedBooking.checkInDate}
            onChange={(e) =>
              setChangedBooking({
                ...changedBooking,
                checkInDate: e.target.value,
              })
            }
          />
        </td>

        <td>
          <input
            type="date"
            value={changedBooking.checkOutDate}
            onChange={(e) =>
              setChangedBooking({
                ...changedBooking,
                checkOutDate: e.target.value,
              })
            }
          />
        </td>

        <td>
          <input
            type="number"
            min={1}
            max={4}
            value={changedBooking.guests}
            onChange={(e) =>
              setChangedBooking({
                ...changedBooking,
                guests: Number(e.target.value),
              })
            }
          />
        </td>

        <td>
          <button
            type="button"
            onClick={() => {
              if (changedBooking.guests > 4) {
                alert("Max 4 gäster per bokning");
                return;
              }
              saveBooking(oneBooking.id, changedBooking);
            }}
          >
            spara
          </button>

          <button type="button" onClick={() => setIsEditing(false)}>
            Ångra
          </button>
        </td>
      </tr>
    );
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
          <button type="button" onClick={() => setIsEditing(true)}>
            Ändra
          </button>

          <button
            type="button"
            onClick={() => {
              removeBooking(oneBooking.id);
            }}
          >
            Avboka
          </button>
        </td>
      </tr>
    </>
  );
};
