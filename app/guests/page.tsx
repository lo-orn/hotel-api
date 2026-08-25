import { Customers } from "../components/customers/Customers";
import GuestModalBtn from "../components/customers/GuestModalBtn";
import { getCustomers } from "../services/customerApi";
import Link from "next/link";

const PAGE_SIZE = 10;

type GuestsPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function GuestsPage({ searchParams }: GuestsPageProps) {
  const params = await searchParams;

  const allCustomers = await getCustomers();

  const totalCustomers = allCustomers.length;

  const totalPages = Math.max(Math.ceil(totalCustomers / PAGE_SIZE), 1);

  const requestedPage = Math.max(Number(params.page) || 1, 1);

  const page = Math.min(requestedPage, totalPages);

  const offset = (page - 1) * PAGE_SIZE;

  const customers = await getCustomers(PAGE_SIZE, offset);

  const hasNextPage = page < totalPages;

  return (
    <main className="mx-auto min-h-screen bg-primary px-6 py-10 md:px-10 lg:px-14">
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 font-body text-xs font-light uppercase tracking-[0.15em] text-charcoal">
            REGISTER
          </p>
          <h1 className="font-display text-5xl mt-4 tracking-tight">Gäster</h1>
        </div>

        <GuestModalBtn />
      </div>

      <Customers customers={customers} />

      <div className="mt-8 flex items-center justify-between pt-6 font-body">
        {page > 1 ? (
          <Link
            href={`/guests?page=${page - 1}`}
            className="flex min-h-11 items-center px-4 text-xs uppercase tracking-widest transition-colors hover:bg-black hover:text-white"
          >
            ← Föregående
          </Link>
        ) : (
          <span className="min-h-11 min-w-11" />
        )}

        <span className="text-xs uppercase tracking-widest text-charcoal">
          Sida {page} av {totalPages}
        </span>

        {hasNextPage ? (
          <Link
            href={`/guests?page=${page + 1}`}
            className="flex min-h-11 items-center px-4 text-xs uppercase tracking-widest transition-colors hover:bg-black hover:text-white"
          >
            Nästa →
          </Link>
        ) : (
          <span className="min-h-11 min-w-11" />
        )}
      </div>
    </main>
  );
}
