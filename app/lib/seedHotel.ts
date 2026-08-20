import { Hotel } from "../models/Hotel";
import { createHotel, getHotels } from "../services/hotels";

let hasSeeded = false;

export const seedHotel = async (): Promise<Hotel[]> => {
  if(hasSeeded) {
    return await getHotels();
  }
  let hotels: Hotel[] = await getHotels();
  console.log(hotels)

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
    console.log(result);
    hotels = await getHotels();
  
  } else {
  console.log("Hotellet med namn Ladan finns redan, hoppar över seed");
}
  hasSeeded = true
  return hotels;
};
