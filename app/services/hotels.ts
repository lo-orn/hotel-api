import { HotelData } from "../models/Hotel";
import { API_KEY, API_URL } from "./apiConfig";

export const getHotels = async () => {
  const response = await fetch(`${API_URL}/hotels`, {
    headers: {
      "X-API-Key": API_KEY,
    },
  });

  const data = await response.json();
  return data;
};


export const createHotel = async (data: HotelData) => {
  const response = await fetch(`${API_URL}/hotels`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY,
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
