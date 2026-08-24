import { Customer } from "@/app/models/Customer";
import { ShowCustomer } from "./ShowCustomer";
import { Booking } from "@/app/models/Booking";

type CustomersProps = {
  customers: Customer[];
  bookings: Booking[];
  hotelId: string;
};

export const Customers = ({ customers, bookings, hotelId }: CustomersProps) => {
  const customerIdAsHotel = bookings
    .filter((booking) => booking.data.hotelId === hotelId)
    .map((booking) => booking.data.customerId);

  const hotelCustomers = customers.filter((customer) =>
    customerIdAsHotel.includes(customer.id),
  );

  return (
    <section className="overflow-x-auto bg-[#E8E1D8] shadow-sm">
      <table className="w-full table-fixed border-collapse [font-family:var(--font-body)]">
        <thead>
          <tr className="border-b border-[#DFDDDA]">
            <th
              scope="col"
              className="w-[30%] px-8 py-4 text-left text-xs font-light uppercase tracking-[0.12em] text-[#303032]"
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
              className="w-[15%] px-8 py-4 text-left text-xs font-light uppercase tracking-[0.12em] text-[#303032]"
            >
              Vistelser
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-[#DFDDDA] border-t border-[#DFDDDA]">
          {hotelCustomers.map((customer) => (
            <ShowCustomer key={customer.id} customer={customer} />
          ))}
        </tbody>
      </table>
    </section>
  );
};
