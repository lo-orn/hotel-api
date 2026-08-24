import { Customers } from "../components/customers/Customers";
import GuestModalBtn from "../components/GuestModalBtn";
import { LADAN_HOTEL_ID } from "../services/apiConfig";
import { getBookings } from "../services/bookings";
import { getCustomers } from "../services/customerApi";

export default async function GuestsPage() {
    const customers = await getCustomers();
    const bookings = await getBookings();
    

    return (
        <main className="min-h-screen bg-[#F0EBE3] px-6 py-10 md:px-10 lg:px-14">
            <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="mb-2 [font-family:var(--font-body)] text-xs font-light uppercase tracking-[0.15em] text-[#303032]">REGISTER</p>
                    <h1 className="[font-family:var(--font-display)] text-[48px] font-light leading-[39.6px] tracking-[-0.36px] text-black">Gäster</h1>
                </div>

              <GuestModalBtn/>
            </div>

            <Customers customers={customers} />
        </main>
    );
}