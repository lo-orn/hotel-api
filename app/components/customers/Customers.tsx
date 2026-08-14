import { Customer } from "@/app/models/Customer";
import { ShowCustomer } from "./ShowCustomer";

type CustomersProps = {
  customers: Customer[];
};

export const Customers = ({ customers }: CustomersProps) => {
  return (
    <>
      <section>
        <h2>Gäster</h2>
        <table>
          <thead>
            <tr>
              <th>Namn</th>
              <th>Epost</th>
              <th>Antal</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <ShowCustomer key={customer.id} customer={customer} />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};
