"use client";
import { Booking } from "@/app/models/Booking";
import { Customer } from "@/app/models/Customer";
import { useState } from "react";
import { ActionButton } from "../buttons/ActionButton";
import Modal from "../Modal";
import BookingForm from "./BookingForm";

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
