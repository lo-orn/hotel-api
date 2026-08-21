import { CustomerDataForm } from "../models/Customer";
import { getCustomers, createCustomer } from "../services/customerApi";

const customersToSeed: CustomerDataForm[] = [
    {
        firstName: "Emma",
        lastName: "Johansson",
        email: "emma.johansson@example.com",
    },
    {
        firstName: "Maria",
        lastName: "Andersson",
        email: "maria.andersson@example.com",
    },
    {
        firstName: "Kalle",
        lastName: "Svensson",
        email: "kalle.svensson@example.com",
    },
    {
        firstName: "Erik",
        lastName: "Nilsson",
        email: "erik.nilsson@example.com"
    },
];

export const seedCustomers = async () => {
    const existingCustomers = await getCustomers();

    const existingEmails = existingCustomers.map((customer) => customer.data.email);

    for (const customer of customersToSeed) {
        if (!existingEmails.includes(customer.email)) {
            await createCustomer(customer);
        }
    }
};