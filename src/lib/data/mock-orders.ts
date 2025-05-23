// This mock data is used to populate the pizza orders table in the dashboard.
// The mockOrders object array includes fields for order ID, customer name, pizza type, quantity, order date, and status.

type PizzaOrder = {
    id: string;
    customer: string;
    type: string;
    quantity: number;
    date: string;
    status: "Pending" | "Preparing" | "Out for Delivery" | "Delivered" | "Cancelled";
};

export const mockOrders: PizzaOrder[] = [
    {
        id: "PZA001",
        customer: "Nirban Chakraborty",
        type: "BBQ Chicken",
        quantity: 1,
        date: "2025-05-22 14:30",
        status: "Delivered",
    },
    {
        id: "PZA002",
        customer: "Sumi De",
        type: "Pepperoni",
        quantity: 2,
        date: "2025-05-21 12:45",
        status: "Pending",
    },
    {
        id: "PZA003",
        customer: "Avijeet Gorai",
        type: "Margarita",
        quantity: 1,
        date: "2025-05-22 15:00",
        status: "Preparing",
    },
    {
        id: "PZA004",
        customer: "Jagat Sharma",
        type: "Veggie Supreme",
        quantity: 1,
        date: "2025-05-22 15:00",
        status: "Out for Delivery",
    },
    {
        id: "PZA005",
        customer: "Tushar Kanti Patra",
        type: "Veggie Supreme",
        quantity: 1,
        date: "2025-05-22 15:00",
        status: "Cancelled",
    },
    {
        id: "PZA006",
        customer: "Saurabh Das",
        type: "Farmhouse",
        quantity: 2,
        date: "2025-05-23 11:20",
        status: "Pending",
    },
    {
        id: "PZA007",
        customer: "Rahul Mula",
        type: "Chicken Tikka",
        quantity: 3,
        date: "2025-05-23 13:10",
        status: "Preparing",
    },
    {
        id: "PZA008",
        customer: "Sneha Reddy",
        type: "Cheese Burst",
        quantity: 1,
        date: "2025-05-23 16:45",
        status: "Delivered",
    },
    {
        id: "PZA009",
        customer: "Amitabha Banerjee",
        type: "Pepperoni",
        quantity: 2,
        date: "2025-05-24 10:30",
        status: "Out for Delivery",
    },
    {
        id: "PZA010",
        customer: "Chiranjit Mallick",
        type: "BBQ Chicken",
        quantity: 1,
        date: "2025-05-24 12:00",
        status: "Cancelled",
    },
];