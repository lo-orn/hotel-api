import { Booking } from "../models/Booking";

export const MAX_BOOKINGS_PER_DAY  = 3;

export const isFullyBooked = (bookings: Booking[], checkInDate: string, checkOutDate: string) => {
    const overlappingBookings = bookings.filter((booking) =>{
        return (
            booking.data.checkInDate < checkOutDate &&
            booking.data.checkOutDate > checkInDate
        )
    })

    return overlappingBookings.length >= MAX_BOOKINGS_PER_DAY
}

export const isPastDate = (date: string) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(date) < today;
};

export const isInvalidDateRange = (checkIn: string, checkOut: string) => {
    return checkOut <= checkIn;
}