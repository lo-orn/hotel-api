//import { Hotel } from "../models/Hotel";
//import { createHotel, getHotels } from "../services/hotels";

//export const seedHotel = async (): Promise<Hotel[]> => {
//  let hotels: Hotel[] = await getHotels();

//  const ladanExists = hotels.some((h) => h.data.name === "Ladan");
// if (!ladanExists) {
//    const result = await createHotel({
//      name: "Ladan",
//      address: "Kvarnbacken 7, 134 40 GustavsBerg",
//    });
//    console.log(result);

//    hotels = await getHotels();
//  }

//  return hotels;
//};

import { Hotel } from "../models/Hotel";
import { createHotel, getHotels } from "../services/hotels";

export const seedHotel = async (): Promise<Hotel[]> => {
  let hotels: Hotel[] = await getHotels();

  if (!Array.isArray(hotels)) {
    return [];
  }

  const ladanExists = hotels.some((oneHotel) => {
    return oneHotel.data.name === "Ladan";
  });

  if (!ladanExists) {
    await createHotel({
      name: "Ladan",
      address: "Kvarnbacken 7, 134 40 GustavsBerg",
    });

    hotels = await getHotels();

    if (!Array.isArray(hotels)) {
      return [];
    }
  }

  return hotels;
};
