"use client";

import { useState } from "react";
import { Customer } from "../../models/Customer";
import { createBooking } from "../../services/bookings";
import {
  isFullyBooked,
  isInvalidDateRange,
  isPastDate,
} from "../../lib/validation";
import { Booking } from "../../models/Booking";
import { useRouter } from "next/navigation";

type BookingFormProps = {
  customers: Customer[];
  bookings: Booking[];
  hotelId: string;
  onSuccess: () => void;
};

export default function BookingForm({
  customers,
  bookings,
  hotelId,
  onSuccess,
}: BookingFormProps) {
  const router = useRouter();

  const [customerId, setCustomerId] = useState("");
  const [guests, setGuests] = useState(1);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [error, setError] = useState("");

  const hotelBookings = bookings.filter(
    (booking) => booking.data.hotelId === hotelId,
  );

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (isPastDate(checkInDate)) {
      setError("Du kan inte välja ett passerat datum.");
      return;
    }

    if (isInvalidDateRange(checkInDate, checkOutDate)) {
      setError("Utcheckning måste vara efter incheckning");
      return;
    }
    if (isFullyBooked(hotelBookings, checkInDate, checkOutDate)) {
      setError("Hotellet är fullbokat de valda datumen");
      return;
    }

    const newBooking = {
      id: "",
      hotelId: hotelId,
      customerId: customerId,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      guests: guests,
    };

    try {
      await createBooking(newBooking);
      router.refresh();
      onSuccess();
    } catch (error) {
      setError("Kunde inte skapa bokning");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-8">
      <div className="flex flex-col gap-2">
        <label
          className="text-xs uppercase tracking-widest text-charcoal"
          htmlFor="guest"
        >
          Gäst
        </label>

        <select
          className="mt-4 w-full border-b border-charcoal bg-transparent pb-2 focus:border-steel focus:outline-none"
          id="guest"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
        >
          <option value="">-välj registrerad gäst-</option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.data.firstName} {customer.data.lastName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          className="block text-xs uppercase tracking-widest text-charcoal"
          htmlFor="guestsAmount"
        >
          Antal gäster
        </label>
        <input
          id="guestsAmount"
          type="number"
          min="1"
          max="4"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="w-full border-b border-charcoal bg-transparent pb-2 focus:border-steel focus:outline-none"
        ></input>
      </div>

      <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
        <div>
          <label
            className="block text-xs uppercase tracking-widest text-charcoal"
            htmlFor="checkIn"
          >
            Incheckning
          </label>
          <input
            type="date"
            id="checkIn"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="w-full border-b border-charcoal bg-transparent pb-2 focus:border-steel focus:outline-none"
          />
        </div>
        <div>
          <label
            className="block text-xs uppercase tracking-widest text-charcoal"
            htmlFor="checkOut"
          >
            Utcheckning
          </label>
          <input
            type="date"
            id="checkOut"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className="w-full border-b border-charcoal bg-transparent pb-2 focus:border-steel focus:outline-none"
          />
        </div>
      </div>

      {error && (
        <p className="border-l-4 border-[#A4343A] bg-error p-4 text-sm">
          {error}
        </p>
      )}

      <div className="border-t border-charcoal/20 pt-6">
        <button
          className="min-h-11 w-full bg-black px-6 text-xs uppercase tracking-widest text-cream cursor-pointer"
          type="submit"
        >
          Registrera bokning
        </button>
      </div>
    </form>
  );
}
