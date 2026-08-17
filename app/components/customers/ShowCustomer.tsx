import { Customer } from "@/app/models/Customer";

type ShowCustomerProp = {
  customer: Customer;
};

export const ShowCustomer = ({ customer }: ShowCustomerProp) => {
  return (
    <>
      <tr>
        <td>
          {customer.firstName} {customer.lastName}
        </td>
        <td>{customer.email}</td>
        <td>{customer.bookingCount}</td>
      </tr>
    </>
  );
};
