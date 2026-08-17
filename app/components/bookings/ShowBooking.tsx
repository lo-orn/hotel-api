import { Booking } from "@/app/models/Booking"

type ShowBookingProps = {
    oneBooking: Booking;
}
export const ShowBooking = ( { oneBooking }: ShowBookingProps) => {

    return (
        <>
        {oneBooking.customerName}
        {oneBooking.checkInDate}
        {oneBooking.checkOutDate}
        <a href="#">Ändra</a>
        <a href="#">Avboka</a>
        </>
    )
}