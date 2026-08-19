import { Hotel } from "../models/Hotel";
import { createHotel, getHotels } from "../services/hotels";

export const seedHotel = async (): Promise<Hotel[]> => {
  let hotels: Hotel[] = await getHotels();

  const ladanExists = hotels.some((h) => h.data.name === "Ladan");
  if (!ladanExists) {
    const result = await createHotel({
      name: "Ladan",
      address: "Kvarnbacken 7, 134 40 GustavsBerg",
    });
    console.log(result);

    hotels = await getHotels();
  }

  return hotels;
};
