import { Customers } from "../components/customers/Customers";
import { getCustomers } from "../services/hotelApi";

export default async function GuestsPage() {
    const customers = await getCustomers();

    return (
        <main>
            <div>
                <p>REGISTER</p>
                <h1>Gäster</h1>

                <button>+ REGISTRERA GÄST</button>
            </div>

            <Customers customers={customers} />
        </main>
    );
}