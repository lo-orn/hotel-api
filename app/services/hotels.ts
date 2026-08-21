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
  const headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY,
  };

  const createResponse = await fetch(`${API_URL}/hotels`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      name: data.name,
      address: data.address,
      id: 0,
    }),
  });

  if (!createResponse.ok) {
    throw new Error("Could not create hotel");
  }

  const createdHotel = await createResponse.json();

  const patchResponse = await fetch(`${API_URL}/hotels/${createdHotel.id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({
      id: createdHotel.id,
    }),
  });

  if (!patchResponse.ok) {
    throw new Error("Could not update hotel ID");
  }

  return createdHotel;
};
