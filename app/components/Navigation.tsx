"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Idag" },
    { href: "/bookings", label: "Bokningar" },
    { href: "/guests", label: "Gäster" },
];

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav aria-label="Huvudnavigation" className="order-last flex h-12 w-full items-stretch md:order-none md:h-16 md:w-auto">
            {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                    <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`
                        flex flex-1 items-center justify-center
                        border-b-2 
                        px-4 
                        md:flex-none 
                        md:px-6 
                        text-sm 
                        transition-colors 
                        duration-200
                        ${isActive ? "border-black bg-primary text-black" : "border-transparent text-charcoal hover:bg-primary"
                        }
                    `}
                >
                    {link.label}
                </Link>
                );    
            })}
        </nav>
    );
}