"use client";
import { useState } from "react";
import Modal from "./Modal";
import { ActionButton } from "./buttons/ActionButton";
import { Customer } from "../models/Customer";
import { Booking } from "../models/Booking";
import BookingForm from "./bookings/BookingForm";

type BookingModalBtnProps = {
  customers: Customer[];
  bookings: Booking[];
  hotelId: string;
}

export default function BookingModalBtn({customers, bookings, hotelId}: BookingModalBtnProps) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
     <ActionButton label="+ Ny bokning" onClick={() => setModalOpen(true)} />

      {modalOpen && (
        <Modal title="Bokning" onClose={() => setModalOpen(false)}>
          <BookingForm customers={customers} bookings={bookings} hotelId={hotelId} onSuccess={() =>setModalOpen(false)}/>
        </Modal>
      )}
    </>
  );
}
