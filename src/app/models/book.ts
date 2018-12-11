export class Book {
    _id: number;
    title: string;
    author: string;
    price: number;
    rating: number;
    sold: boolean;

    constructor(title: string, 
        author : string, 
        price: number, 
        rating: number) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.rating = rating;
        this.sold = false;
    }
}