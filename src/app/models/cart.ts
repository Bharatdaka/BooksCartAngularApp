export class Cart {
    items: Item[];
    totalPrice: number;
    constructor(items: Item[], totalPrice: number) {
        this.items = items;
        this.totalPrice = totalPrice;
    }
}

export class Item {
    name: string;
    qty: number;
    price: number;
    constructor(name: string, qty: number, price: number) {
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
}