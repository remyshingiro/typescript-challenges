interface OrderItem {
    name: string;
    price: number;
    quantity: number;
}
interface Customer {
    name: string;
    loyaltyMember: boolean;
}
interface User {
    id: number;
    customer: Customer;
    items: OrderItem[];
}