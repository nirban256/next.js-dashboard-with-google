import React from "react";

type Status = "Pending" | "Preparing" | "Out for Delivery" | "Delivered" | "Cancelled";

const statusColors: Record<Status, string> = {
    Pending: "bg-yellow-400 text-black",
    Preparing: "bg-blue-400 text-white",
    "Out for Delivery": "bg-orange-500 text-white",
    Delivered: "bg-green-500 text-white",
    Cancelled: "bg-red-500 text-white",
};

const StatusBadge = ({ status }: { status: Status }) => {
    return (
        <span className={`px-3 py-1 text-sm rounded-full ${statusColors[status]}`}>
            {status}
        </span>
    );
}


export default StatusBadge