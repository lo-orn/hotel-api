import { Customer } from "@/app/models/Customer";

type ShowCustomerProp = {
  customer: Customer;
};

export const ShowCustomer = ({ customer }: ShowCustomerProp) => {
  return (
    <>
      <tr>
        <td>
          {customer.data.firstName} {customer.data.lastName}
        </td>
        <td>{customer.data.email}</td>
      </tr>
    </>
  );
};
