interface OrderItem {
    name: string;
    price: number;
    quantity: number;
}
interface Customer {
    name: string;
    loyaltyMember: boolean;
}
interface Order {
    id: number;
    customer: Customer;
    items: OrderItem[];
}

const order1: Order = {
    id: 101,
    customer: {
        name: "Alice",
        loyaltyMember: true
    },
    items: [
        { name: "Book", price: 15.99, quantity: 2 },
        { name: "Pen", price: 2.50, quantity: 5 }
    ]
};

const order2: Order = {
    id: 102,
    customer: {
        name: "Bob",
        loyaltyMember: false
    },
    items: [
        { name: "Notebook", price: 7.25, quantity: 3 }
    ]
};