"use client";

import { deleteCustomerAction } from "@/app/actions/customerActions";

type DeleteGuestButtonProps = {
    id: string;
    name: string;
};

export const DeleteGuestButton = ({ id, name }: DeleteGuestButtonProps) => {
    const handleDelete = async () => {
        const confirmed = window.confirm(`Är du säker på att du vill ta bort ${name}?`);

        if (!confirmed) {
            return;
        }

        try {
            await deleteCustomerAction(id);
            alert(`${name} har tagits bort.`);
        } catch (error) {
            console.error("Error deleting customer:", error);
            alert(`Kunde inte ta bort ${name}.`);
        }
    };

    return (
        <button
            type="button"
            onClick={handleDelete}
            className="cursor-pointer text-[#303032] underline underline-offset-2"
        >
            Ta bort
        </button>
    );
};