import { Customer } from "@/app/models/Customer";
import { EditGuestModalBtn } from "./EditGuestModalBtn";
import { DeleteGuestButton } from "./DeleteGuestButton";

type ShowCustomerProp = {
  customer: Customer;
};

export const ShowCustomer = ({ customer }: ShowCustomerProp) => {
  return (
    <tr className="border-b border-[#D2CEC8] last:border-b-0 odd:bg-[#F0EBE3] even:bg-[#E8E1D8]">
      <td className="px-8 py-8 text-sm text-black">
        {customer.data.firstName} {customer.data.lastName}
      </td>

      <td className="px-8 py-8 text-sm text-[#303032]">
        {customer.data.email}
      </td>

      {/* <td className="px-8 py-8 text-2xl font-light text-black">
        {customer.data.bookingCount}
      </td> */}

      <td className="px-8 py-8 text-sm">
        <div className="flex items-center gap-6">
           <EditGuestModalBtn customer={customer} />
           <DeleteGuestButton id={customer.id} name={`${customer.data.firstName} ${customer.data.lastName}`} />
        </div>
      </td>
    </tr>
  );
};
