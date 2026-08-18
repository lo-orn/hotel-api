import { Customer } from "@/app/models/Customer";

type ShowCustomerProp = {
  customer: Customer;
};

export const ShowCustomer = ({ customer }: ShowCustomerProp) => {
  return (
    <tr className="border-b border-[#D2CEC8] last:border-b-0 odd:bg-[#F0EBE3] even:bg-[#E8E1D8]">
      <td className="px-8 py-8 text-sm text-black">
        {customer.firstName} {customer.lastName}
      </td>

      <td className="px-8 py-8 text-sm text-[#303032]">
        {customer.email}
      </td>

      <td className="px-8 py-8 text-2xl font-light text-black">
        {customer.bookingCount}
      </td>

      <td className="px-8 py-8 text-sm">
        <span className="text-[#303032] underline underline-offset-2">
          Redigera
        </span>
      </td>
    </tr>
  );
};