import { Customers } from "../components/customers/Customers";
import { getCustomers } from "../services/hotelApi";

export default async function GuestsPage() {
    const customers = await getCustomers();

    return (
        <main className="min-h-screen bg-[#F0EBE3] px-6 py-10 md:px-10 lg:px-14">
            <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="mb-2 [font-family:var(--font-body)] text-xs font-light uppercase tracking-[0.15em] text-[#303032]">REGISTER</p>
                    <h1 className="[font-family:var(--font-display)] text-[48px] font-light leading-[39.6px] tracking-[-0.36px] text-black">Gäster</h1>
                </div>

                <button
                type="button"
                className="min-h-11 self-start border border-black px-7 py-3 [font-family:var(--font-body)] text-xs uppercase tracking-[0.1em] transition-colors hover:bg-black hover:text-white sm:self-auto"
                >
                    + REGISTRERA GÄST
                </button>
            </div>

            <Customers customers={customers} />
        </main>
    );
}