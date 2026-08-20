import { BookingDataForm } from "../models/Booking";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";

export const createBooking = async (newBooking: BookingDataForm) => {
  const response = await fetch(`${API_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY,
    },
    body: JSON.stringify(newBooking),
  });

  const data = await response.json();
  return data;
};

export const deleteBooking = async (id: string) => {
  const response = await fetch(`${API_URL}/bookings/${id}`, {
    method: "DELETE",
    headers: {
      "X-API-Key": API_KEY,
    },
  });
  return response;
};

export const updateBooking = async (
  id: string,
  changedBooking: BookingDataForm,
) => {
  const response = await fetch(`${API_URL}/bookings/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY,
    },
    body: JSON.stringify(changedBooking),
  });

  const data = await response.json();
  return data;
};
