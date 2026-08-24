"use client";

import { Booking, BookingDataForm } from "@/app/models/Booking";
import { Customer } from "@/app/models/Customer";
import { Bookings } from "./Bookings";
import { deleteBooking, updateBooking } from "@/app/services/bookings";

type BookingPageProps = {
  allBookings: Booking[];
  allCustomers: Customer[];
  hotelId: string;
};

export const BookingPageContent = ({ allBookings, allCustomers, hotelId }: BookingPageProps) => {
  const removeBooking = async (id: string) => {
    await deleteBooking(id);
    window.location.reload();
  };

  const saveBooking = async (id: string, changedBooking: BookingDataForm) => {
    const bookingForLadan = {
      ...changedBooking,
      hotelId: hotelId,
    };

    await updateBooking(id, bookingForLadan);
    window.location.reload();
  };

  return (
    <Bookings
      allBookings={allBookings}
      allCustomers={allCustomers}
      removeBooking={removeBooking}
      saveBooking={saveBooking}
      hotelId={hotelId}
    />
  );
};
