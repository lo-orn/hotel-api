import { Customers } from "../components/customers/Customers";
import GuestModalBtn from "../components/customers/GuestModalBtn";
import { getCustomers } from "../services/customerApi";

export default async function GuestsPage() {
    const customers = await getCustomers();
    
    return (
        <main className="mx-auto min-h-screen bg-primary px-6 py-10 md:px-10 lg:px-14">

            <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="mb-2 font-body text-xs font-light uppercase tracking-[0.15em] text-charcoal">REGISTER</p>
                    <h1 className="font-display text-[48px] font-light leading-[39.6px] tracking-[-0.36px] text-black">Gäster</h1>
                </div>

                <GuestModalBtn />
            </div>

      <Customers customers={customers} />
    </main>
  );
}
