import { Customer } from "@/app/models/Customer";
import { ShowCustomer } from "./ShowCustomer";

type CustomersProps = {
  customers: Customer[];
};

export const Customers = ({ customers }: CustomersProps) => {


  return (
    <section className="mx-auto overflow-x-auto bg-secondary shadow-sm">
      <table className="w-full min-w-140 table-fixed border-collapse font-body md:min-w-0">
        <thead>
          <tr className="border-b border-stone">
            <th
              scope="col"
              className="w-[40%] px-4 py-4 md:px-8 text-left text-xs font-light uppercase tracking-[0.12em] text-charcoal"
            >
              Namn
            </th>

            <th
              scope="col"
              className="w-[40%] px-4 py-4 md:px-8 text-left text-xs font-light uppercase tracking-[0.12em] text-charcoal"
            >
              E-post
            </th>

            <th
              scope="col"
              className="w-[20%] px-4 py-4 md:px-8 text-left text-xs font-light uppercase tracking-[0.12em] text-charcoal"
            >
              Åtgärder
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-stone border-t border-stone">
          {customers.map((customer) => (
            <ShowCustomer key={customer.id} customer={customer} />
          ))}
        </tbody>
      </table>
    </section>
  );
};
