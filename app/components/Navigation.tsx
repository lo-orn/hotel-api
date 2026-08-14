import Link from "next/link";

export default function Navigation() {
    return (
        <nav aria-label="Huvudnavigation">
            <Link href="/">Idag</Link>
            <Link href="/bookings">Bokningar</Link>
            <Link href="/guests">Gäster</Link>
            <Link href="/bookings/new">Ny bokning</Link>
        </nav>
    );
}