"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/coaching", label: "Coaching" },
    { href: "/book", label: "Book me" },
    { href: "/faq", label: "FAQs" },
    { href: "/contact", label: "Contact me" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="shadow">
            <div className="container flex items-center justify-center p-6 mx-auto capitalize">
                <div className="flex items-center justify-start flex-1">
                    <Link href="/" className="flex items-center">
                        <Image src="/logo.png" alt="Logo" width={48} height={48} />
                    </Link>
                </div>
                {navLinks.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`transition-colors duration-300 transform mx-1.5 sm:mx-6 border-b-2 ${
                            pathname === href ? "navbar-border-active" : "navbar-border"
                        }`}
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}