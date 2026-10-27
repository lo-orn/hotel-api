import { Customer } from "@/app/models/Customer";
import { EditGuestModalBtn } from "./EditGuestModalBtn";
import { DeleteGuestButton } from "./DeleteGuestButton";

type ShowCustomerProp = {
  customer: Customer;
};

export const ShowCustomer = ({ customer }: ShowCustomerProp) => {
  return (
    <tr className="border-b border-[#D2CEC8] last:border-b-0 odd:bg-primary even:bg-secondary transition-colors duration-200 hover:bg-black/3">
      <td className="px-4 py-4 md:px-8 text-sm text-black">
        {customer.data.firstName} {customer.data.lastName}
      </td>

      <td className="px-4 py-4 md:px-8 text-sm text-charcoal">{customer.data.email}</td>

      <td className="px-4 py-4 md:px-8 text-sm">
        <div className="flex items-center gap-6">
          <EditGuestModalBtn customer={customer} />
          <DeleteGuestButton
            id={customer.id}
            name={`${customer.data.firstName} ${customer.data.lastName}`}
          />
        </div>
      </td>
    </tr>
  );
};
