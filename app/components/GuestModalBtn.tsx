"use client";
import { useState } from "react";
import Modal from "./Modal";
import { ActionButton } from "./buttons/ActionButton";
import GuestForm from "./GuestForm";

export default function GuestModalBtn() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
     <ActionButton label="+ Ny gäst" onClick={() => setModalOpen(true)} />

      {modalOpen && (
        <Modal title="Gäst" onClose={() => setModalOpen(false)}>
         <GuestForm onSuccess={() => setModalOpen(false)}/>
        </Modal>
      )}
    </>
  );
}
