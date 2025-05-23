/* 
This is the PizzaTable component for the pizza dashboard.
It displays a table of pizza orders with their details such as order ID, customer name, pizza type, quantity, order date, and status. It uses mock data for demonstration purposes and includes the StatusBadge component to visually represent the order status. 
The table is sortable by order ID or date and can be filtered by order status (e.g., Pending, Delivered).
*/

"use client";

import StatusBadge from "@/components/StatusBadge";
import { mockOrders } from "@/lib/data/mock-orders";

const PizzaTable = ({
    sortKey,
    statusFilter,
}: {
    sortKey: "id" | "date";
    statusFilter: string;
}) => {
    const filteredOrders = mockOrders
        .filter((order) => (statusFilter ? order.status === statusFilter : true))
        .sort((a, b) => {
            if (sortKey === "id") return a.id.localeCompare(b.id);
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-md">
                <thead>
                    <tr className="bg-gray-100 text-left text-sm uppercase tracking-wider">
                        <th className="p-3 text-center">Order ID</th>
                        <th className="p-3 text-center">Customer Name</th>
                        <th className="p-3 text-center">Pizza Type</th>
                        <th className="p-3 text-center">Quantity</th>
                        <th className="p-3 text-center">Order Date</th>
                        <th className="p-3 text-center">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOrders.map((order) => (
                        <tr key={order.id} className="border-t border-gray-200 hover:bg-gray-50">
                            <td className="p-3 text-center">{order.id}</td>
                            <td className="p-3 text-center">{order.customer}</td>
                            <td className="p-3 text-center">{order.type}</td>
                            <td className="p-3 text-center">{order.quantity}</td>
                            <td className="p-3 text-center">{order.date}</td>
                            {order.status === "Out for Delivery" ? (
                                <td className="p-6 text-center">
                                    <StatusBadge status={order.status} />
                                </td>
                            ) : (
                                <td className="p-3 text-center">
                                    <StatusBadge status={order.status} />
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PizzaTable;