export type Booking = {
  id: string;
  createdAt: string;
  updatedAt: string;
  database: string;
  resource: string;
  data: BookingData;
};

export type BookingData = {
  id: string;
  hotelId: string;
  customerId: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
};

export type BookingDataForm = {
  id: string;
  hotelId: string;
  customerId: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
};