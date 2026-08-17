export type Hotel = {
  id: string;
  createdAt: string;
  updatedAt: string;
  database: string;
  resource: string;
  data: HotelData;
};

export type HotelData = {
  id: string;
  name: string;
  address: string;
};