"use server";

import { CustomerDataForm } from "../models/Customer";
import { createCustomer } from "../services/customerApi";
import { revalidatePath } from "next/cache";

export const registerCustomerAction = async (formData: FormData) => {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;

    if (!firstName || !lastName || !email) {
        throw new Error("Missing required fields");
    }

    const customer: CustomerDataForm = {
        firstName,
        lastName,
        email,
    };

    await createCustomer(customer);

    revalidatePath("/guests");
}