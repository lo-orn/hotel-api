import { Booking } from "../models/Booking";
import { Customer } from "../models/Customer";
import { createBooking, getBookings } from "../services/bookings";

export const seedBooking = async (
  hotelId: string,
  customers: Customer[],
): Promise<Booking[]> => {
  let bookings: Booking[] = await getBookings();

  if (!Array.isArray(bookings)) {
    return [];
  }

  if (!Array.isArray(customers)) {
    return bookings;
  }

  const bookingsForHotel = bookings.filter((oneBooking) => {
    return oneBooking.data.hotelId === hotelId;
  });

  if (bookingsForHotel.length < 1 && customers.length >= 1) {
    await createBooking({
      id: "",
      hotelId: hotelId,
      customerId: customers[0].id,
      checkInDate: "2038-08-25",
      checkOutDate: "2038-08-26",
      guests: 1,
    });
  }

  if (bookingsForHotel.length < 2 && customers.length >= 2) {
    await createBooking({
      id: "",
      hotelId: hotelId,
      customerId: customers[1].id,
      checkInDate: "2038-08-27",
      checkOutDate: "2038-08-29",
      guests: 2,
    });
  }

  if (bookingsForHotel.length < 3 && customers.length >= 3) {
    await createBooking({
      id: "",
      hotelId: hotelId,
      customerId: customers[2].id,
      checkInDate: "2038-08-30",
      checkOutDate: "2038-09-02",
      guests: 1,
    });
  }

  if (bookingsForHotel.length < 4 && customers.length >= 4) {
    await createBooking({
      id: "",
      hotelId: hotelId,
      customerId: customers[3].id,
      checkInDate: "2038-09-03",
      checkOutDate: "2038-09-04",
      guests: 4,
    });
  }

  if (bookingsForHotel.length < 4) {
    bookings = await getBookings();

    if (!Array.isArray(bookings)) {
      return [];
    }
  }

  return bookings;
};