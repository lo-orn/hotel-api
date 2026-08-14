import { Customer } from "@/app/models/Customer";

type ShowCustomerProp = {
  customer: Customer;
};

export const ShowCustomer = ({ customer }: ShowCustomerProp) => {
  return (
    <>
      <p>
        {customer.firstName} {customer.lastName}
      </p>
      <p>
        {customer.email}
      </p>
      <p>{customer.bookingCount}</p>
    </>
  );
};