"use client";

import { Customer } from "@/app/models/Customer";
import { useState } from "react";
import Modal from "../Modal";
import { EditGuestForm } from "./EditGuestForm";

type EditGuestModalBtnProps = {
    customer: Customer;
};

export const EditGuestModalBtn = ({ customer}: EditGuestModalBtnProps) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="cursor-pointer text-[#303032] underline underline-offset-2"
            >
                Redigera
            </button>

            {modalOpen && (
                <Modal
                    title="Redigera gäst"
                    onClose={() => setModalOpen(false)}
                >
                    <EditGuestForm customer={customer} />
                </Modal>
            )}
        </>
    );
};