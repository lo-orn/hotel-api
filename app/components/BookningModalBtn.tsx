"use client";
import { useState } from "react";
import Modal from "./Modal";
import { ActionButton } from "./buttons/ActionButton";

export default function BookingModalBtn() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
     <ActionButton label="+ Ny bokning" onClick={() => setModalOpen(true)} />

      {modalOpen && (
        <Modal title="Bokning" onClose={() => setModalOpen(false)}>
          <p>test</p>
        </Modal>
      )}
    </>
  );
}
