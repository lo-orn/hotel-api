import { Customer } from "../models/Customer";

export const findCustomerName = (customers: Customer[], customerId: string) => {
  const customer = customers.find((c) => c.id === customerId);
  return customer
    ? `${customer.data.firstName} ${customer.data.lastName}`
    : `Okänd gäst`;
};
