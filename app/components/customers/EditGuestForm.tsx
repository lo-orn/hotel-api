"use client";

import { updateCustomerAction } from "@/app/actions/customerActions";
import { Customer } from "@/app/models/Customer";

type EditGuestFormProps = {
    customer: Customer;
    onSuccess: () => void;
};

export const EditGuestForm = ({ customer, onSuccess }: EditGuestFormProps) => {
    const handleSubmit = async (formData: FormData) => {
        await updateCustomerAction(customer.id, formData);

        onSuccess();
    };

    return (
        <form
            action={handleSubmit}
            className="mt-8 space-y-8"
        >
            <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
                <div className="flex flex-col gap-2">

                    <label
                        htmlFor="editFirstName"
                        className="text-xs uppercase tracking-[0.1em]"
                    >
                        Förnamn
                    </label>

                    <input
                        type="text"
                        id="editFirstName"
                        name="firstName"
                        defaultValue={customer.data.firstName}
                        className="border-b border-charcoal/20 bg-transparent py-2 outline-none focus:border-black"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">

                    <label
                        htmlFor="editLastName"
                        className="text-xs uppercase tracking-[0.1em]"
                    >
                        Efternamn
                    </label>

                    <input 
                        type="text"
                        id="editLastName"
                        name="lastName"
                        defaultValue={customer.data.lastName}
                        className="border-b border-charcoal/20 bg-transparent py-2 outline-none focus:border-black"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">

                    <label
                        htmlFor="editEmail"
                        className="text-xs uppercase tracking-[0.1em]"
                    >
                        Email
                    </label>

                    <input 
                        type="email"
                        id="editEmail"
                        name="email"
                        defaultValue={customer.data.email}
                        className="border-b border-charcoal/20 bg-transparent py-2 outline-none focus:border-black"
                        required
                    />
                </div>
            </div>

            <div className="border-t border-charcoal/20 pt-6">
                <button
                    type="submit"
                    className="min-h-11 w-full cursor-pointer bg-black px-6 text-xs uppercase tracking-[0.1em] text-cream"
                >
                    Spara ändringarna
                </button>
            </div>
        </form>
    );
};