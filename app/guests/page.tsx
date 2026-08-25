import { Customers } from "../components/customers/Customers";
import GuestModalBtn from "../components/customers/GuestModalBtn";
import { getCustomers } from "../services/customerApi";
import Link from "next/link";

const PAGE_SIZE = 10;

type GuestsPageProps = {
    searchParams: Promise<{page?: string}>
};

export default async function GuestsPage({ searchParams }: GuestsPageProps) {
    const params = await searchParams;

    const page = Math.max(Number(params.page) || 1, 1);
    const offset = (page - 1) * PAGE_SIZE;

    const fetchedCustomers = await getCustomers(PAGE_SIZE + 1, offset);

    const hasNextPage = fetchedCustomers.length > PAGE_SIZE;
    const customers = fetchedCustomers.slice(0, PAGE_SIZE);
    
    return (
        <main className="min-h-screen bg-[#F0EBE3] px-6 py-10 md:px-10 lg:px-14">
            <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="mb-2 [font-family:var(--font-body)] text-xs font-light uppercase tracking-[0.15em] text-[#303032]">REGISTER</p>
                    <h1 className="[font-family:var(--font-display)] text-[48px] font-light leading-[39.6px] tracking-[-0.36px] text-black">Gäster</h1>
                </div>

                <GuestModalBtn />
            </div>

            <Customers customers={customers} />

            <div className="mt-8 flex items-center justify-between">
                {page > 1 ? (
                    <Link
                        href={`/guests?page=${page - 1}`}
                        className="text-sm underline underline-offset-2"
                    >
                        ← Föregående
                    </Link>
                ) : (
                    <span />
                )}

                <span className="text-sm">
                    Sida {page}
                </span>

                {hasNextPage ? (
                    <Link
                        href={`/guests?page=${page + 1}`}
                        className="text-sm underline underline-offset-2"
                    >
                        Nästa →
                    </Link>
                ) : (
                    <span />
                )}
            </div>
        </main>
  );
}
