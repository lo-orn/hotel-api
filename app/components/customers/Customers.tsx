import { Customer } from "@/app/models/Customer";
import { ShowCustomer } from "./ShowCustomer";

type CustomersProps = {
  customers: Customer[];
};

export const Customers = ({ customers }: CustomersProps) => {


  return (
    <section className="overflow-x-auto bg-[#E8E1D8] shadow-sm">
      <table className="w-full table-fixed border-collapse [font-family:var(--font-body)]">
        <thead>
          <tr className="border-b border-[#DFDDDA]">
            <th
              scope="col"
              className="w-[35%] px-8 py-4 text-left text-xs font-light uppercase tracking-[0.12em] text-[#303032]"
            >
              Namn
            </th>

            <th
              scope="col"
              className="w-[40%] px-8 py-4 text-left text-xs font-light uppercase tracking-[0.12em] text-[#303032]"
            >
              E-post
            </th>

            <th
              scope="col"
              className="w-[25%] px-8 py-4 text-left text-xs font-light uppercase tracking-[0.12em] text-[#303032]"
            >
              Åtgärder
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-[#DFDDDA] border-t border-[#DFDDDA]">
          {customers.map((customer) => (
            <ShowCustomer key={customer.id} customer={customer} />
          ))}
        </tbody>
      </table>
    </section>
  );
};
