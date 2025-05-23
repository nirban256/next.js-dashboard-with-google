// This is the Navbar component for the pizza dashboard application.
// It includes links to the home page and pizza orders page, as well as a logout button.

"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    useEffect(() => {
        document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    }, [sidebarOpen]);

    return (
        <>
            {/* Top Navbar */}
            <nav className="bg-violet-600 shadow-md px-6 py-4 flex justify-between items-center md:hidden">
                <div className="text-xl font-bold text-white">🍕 Pizza Dashboard</div>
                <button onClick={toggleSidebar}>
                    {sidebarOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
                </button>
            </nav>

            {/* Sidebar for mobile */}
            {sidebarOpen && (
                <div className="md:hidden fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-50 p-6 space-y-4">
                    <div className="text-xl font-bold text-violet-500 mb-4">🍕 Pizza Dashboard</div>
                    <Link href="/" onClick={toggleSidebar} className="block text-violet-500 hover:text-gray-300">
                        Home
                    </Link>
                    <Link href="/dashboard/orders" onClick={toggleSidebar} className="block text-violet-500 hover:text-gray-300">
                        Pizza Orders
                    </Link>
                    <button
                        onClick={() => {
                            signOut();
                            toggleSidebar();
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-4 w-full"
                    >
                        Logout
                    </button>
                </div>
            )}

            {/* Desktop Navbar */}
            <nav className="hidden md:flex bg-violet-600 text-white shadow-md px-6 py-4 justify-between items-center">
                <div className="text-xl font-bold text-white">🍕 Pizza Dashboard</div>
                <div className="flex space-x-4 items-center">
                    <Link href="/" className="hover:text-gray-300 font-medium">
                        Home
                    </Link>
                    <Link href="/dashboard/orders" className="hover:text-gray-300 font-medium">
                        Pizza Orders
                    </Link>
                    <button
                        onClick={() => signOut()}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                    >
                        Logout
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
