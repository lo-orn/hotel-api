"use client";
import { useState } from "react";

import { Booking, BookingDataForm } from "@/app/models/Booking";
import { Customer } from "@/app/models/Customer";
import { countNights } from "@/app/lib/stats";

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
  const nights = countNights(
    oneBooking.data.checkInDate,
    oneBooking.data.checkOutDate,
  );

  if (isEditing) {
    return (
      <tr className="border-b border-[#D2CEC8] bg-[#F0EBE3]">
        <td className="px-8 py-6 text-sm text-[#303032]">{rowNumber}</td>
        <td className="px-8 py-6 text-sm text-[#303032]">
          <select
            className="w-full border border-[#D2CEC8] bg-white px-3 py-2 text-sm text-[#303032]"
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
        <td className="px-8 py-6 text-sm">
          <input
            className="w-full border border-[#D2CEC8] bg-white px-3 py-2 text-sm text-[#303032]"
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

        <td className="px-8 py-6 text-sm">
          <input
            className="w-full border border-[#D2CEC8] bg-white px-3 py-2 text-sm text-[#303032]"
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

        <td className="px-8 py-6 text-sm text-[#303032]">
          {countNights(changedBooking.checkInDate, changedBooking.checkOutDate)}
        </td>

        <td className="px-8 py-6 text-sm">
          <button
            type="button"
            onClick={() => {
              saveBooking(oneBooking.id, changedBooking);
            }}
            className="mr-4 bg-black px-4 py-2 text-xs uppercase tracking-[0.1em] text-white"
          >
            Spara
          </button>

          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="text-[#303032] underline underline-offset-2"
          >
            Ångra
          </button>
        </td>
      </tr>
    );
  }

  return (
    <>
      <tr className="border-b border-[#D2CEC8] last:border-b-0 odd:bg-[#F0EBE3] even:bg-[#E8E1D8]">
        <td className="px-8 py-8 text-sm text-[#303032]">{rowNumber}</td>
        <td className="px-8 py-8 text-sm text-black">{customerName}</td>
        <td className="px-8 py-8 text-sm text-[#303032]">
          {oneBooking.data.checkInDate}
        </td>
        <td className="px-8 py-8 text-sm text-[#303032]">
          {oneBooking.data.checkOutDate}
        </td>
        <td className="px-8 py-8 text-sm text-[#303032]">{nights}</td>

        <td className="px-8 py-8 text-sm">
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="mr-4 text-[#303032] underline underline-offset-2"
          >
            Ändra
          </button>

          <button
            type="button"
            onClick={() => {
              removeBooking(oneBooking.id);
            }}
            className="text-[#303032] underline underline-offset-2"
          >
            Avboka
          </button>
        </td>
      </tr>
    </>
  );
};
