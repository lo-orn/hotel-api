import { BookingDataForm } from "../models/Booking";
import { API_KEY, API_URL } from "./apiConfig";

export const getBookings = async () => {
  const response = await fetch(`${API_URL}/bookings`, {
    headers: {
      "X-API-Key": API_KEY,
    },
  });

  const data = await response.json();
  return data;
};

export const createBooking = async (newBooking: BookingDataForm) => {
  const response = await fetch(`${API_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "X-API-KEY": API_KEY,
    },
    body: JSON.stringify(newBooking),
  });

  const data = await response.json();
  return data;
};

export const deleteBooking = async (id: string) => {
  const response = await fetch(`${API_URL}/bookings/${id}`, {
    method: "Delete",
    headers: {
      "X-API-KEY": API_KEY,
    },
  });
  return response;
};

export const updateBooking = async (
  id: string,
  changeBooking: BookingDataForm,
) => {
  const response = await fetch(`${API_URL}/bookings/${id}`, {
    method: "Put",
    headers: {
      "content-type": "application/json",
      "X-API-KEY": API_KEY,
    },
    body: JSON.stringify(changeBooking),
  });

  const data = await response.json();
  return data;
};
