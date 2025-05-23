/* 
This page allows users to view and filter pizza orders. It includes a navbar and a table that displays the orders.
The user can sort the orders by ID or date and filter them by status (e.g., Pending, Delivered).
*/

"use client";

import { useState } from "react";
import PizzaTable from "@/components/PizzaTable";
import Navbar from "@/components/Navbar";

const OrdersPage = () => {
    const [sortKey, setSortKey] = useState<"id" | "date">("id");
    const [statusFilter, setStatusFilter] = useState<string>("");

    return (
        <>
            <Navbar />
            <div className="p-6">
                <h1 className="text-2xl font-semibold mb-4">Pizza Orders</h1>

                {/* Filter & Sort */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                        <label className="mr-2 text-gray-200 font-medium">Sort by:</label>
                        <select
                            className="border rounded px-2 py-1"
                            value={sortKey}
                            onChange={(e) => setSortKey(e.target.value as any)}
                        >
                            <option value="id">Order ID</option>
                            <option value="date">Order Date</option>
                        </select>
                    </div>

                    <div>
                        <label className="mr-2 text-gray-200 font-medium">Filter by status:</label>
                        <select
                            className="border rounded px-2 py-1"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="Pending">Pending</option>
                            <option value="Preparing">Preparing</option>
                            <option value="Out for Delivery">Out for Delivery</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                    </div>
                </div>

                <PizzaTable sortKey={sortKey} statusFilter={statusFilter} />
            </div>
        </>
    );
}

export default OrdersPage;