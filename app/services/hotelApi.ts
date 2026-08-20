import { BookingDataForm } from "../models/Booking";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";

export const getHotels = async () => {
  const response = await fetch(`${API_URL}/hotels`, {
    headers: {
      "X-API-Key": API_KEY,
    },
  });

  const data = await response.json();
  return data;
};

export const getCustomers = async () => {
  const response = await fetch(`${API_URL}/customers`, {
    headers: {
      "X-API-Key": API_KEY,
    },
  });

  const data = await response.json();
  return data;
};

export const getBookings = async () => {
  const response = await fetch(`${API_URL}/bookings`, {
    headers: {
      "X-API-Key": API_KEY,
    },
  });

  const data = await response.json();
  return data;
};
