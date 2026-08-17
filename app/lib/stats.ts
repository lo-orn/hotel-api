import { Booking } from "../models/Booking";
import { MAX_BOOKINGS_PER_DAY } from "./validation";

const isSameDay = (a: Date, b: Date) => {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
};

export const countCheckOutsToday = (bookings: Booking[]) => {
  const today = new Date();

  return bookings.filter((booking) =>
    isSameDay(new Date(booking.data.checkOutDate), today),
  ).length;
};

export const countCheckInsToday = (bookings: Booking[]) => {
  const today = new Date();

  return bookings.filter((booking) =>
    isSameDay(new Date(booking.data.checkInDate), today),
  ).length;
};

export const countCheckedInNow = (bookings: Booking[]) => {
  const today = new Date();

  return bookings.filter((booking) => {
    const checkIn = new Date(booking.data.checkInDate);
    const checkOut = new Date(booking.data.checkOutDate);

    return checkIn <= today && checkOut >= today;
  }).length;
};

export const countAvailableRooms = (bookings: Booking[]) => {
  return MAX_BOOKINGS_PER_DAY - countCheckedInNow(bookings);
};
