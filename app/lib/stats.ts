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

export const getCheckInsToday = (bookings: Booking[]) => {
  const today = new Date();

  return bookings.filter((booking) =>
    isSameDay(new Date(booking.data.checkInDate), today),
  );
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


export const getComingWeek = (bookings: Booking[]) => {
  const today = new Date();
  const weekFromNow = new Date();
  weekFromNow.setDate(today.getDate() + 7)

  return bookings.filter((booking) => {
    const checkIn = new Date(booking.data.checkInDate)
    return checkIn >= today && checkIn <= weekFromNow
  });
};

export const countNights = (checkInDate: string, checkOutDate: string) => {

  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);

  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round((checkOut.getTime() -checkIn.getTime()) /msPerDay)
}