export type Booking = {
  id: number;
  hotelId: number;
  hotelName: string;
  customerId: number;
  customerName: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
};


export type BookingDataForm = {
  hotelId: number;
  customerId: number;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
};
