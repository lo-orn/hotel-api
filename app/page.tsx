"use client";
import { useEffect, useState } from "react";

import { Hotel } from "./models/Hotel";
import { Customer } from "./models/Customer";
import { Booking } from "./models/Booking";
import { getBookings, getCustomers, getHotels } from "./services/hotelApi";
import { Customers } from "./components/customers/Customers";
import { HeroSectionMain } from "./components/HeroSectionMain";

export default function Home() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);

  const loadData = async () => {
    try {
      const hotelData = await getHotels();
      const bookingData = await getBookings();
      const customerData = await getCustomers();

      setHotels(hotelData);
      setCustomers(customerData);
      setBookings(bookingData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <main>
        <h1>Välkomna till hotellbokning</h1>
        <p>Hoteller: {hotels.length}</p>
        <p>Gäster: {customers.length}</p>
        <p>Bokningar: {bookings.length}</p>
      </main>
      <section>
        <Customers customers={customers} />
      </section>
         <section>
          <HeroSectionMain bookings={bookings}/>
        </section>
    </>
  );
}
