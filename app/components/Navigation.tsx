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
        <nav aria-label="Huvudnavigation" className="flex h-16 items-stretch">
            {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                    <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`
                        flex items-center 
                        border-b-2 
                        px-6 
                        text-sm 
                        transition-colors 
                        ${isActive ? "border-black bg-[#F0EBE3] text-black" : "border-transparent text-[#303032] hover:bg-[#F0EBE3]"
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