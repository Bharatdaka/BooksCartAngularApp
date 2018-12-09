import { Book } from './../models/book';
import { Cart, Item } from './../models/cart';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart;
  
  constructor() { 
    this.cart = new Cart([], 0);
  }

  getCart() : Cart {
    return this.cart;
  }

  addToCart(book: Book) {
    let item = this.cart.items.find(function(i) {
      return i.name == book.title; 
    });

    if(item) {
      item.qty++;
    } else {
      item = new Item(book.title,1, book.price);
      this.cart.items.push(item);
    }
    
    this.cart.totalPrice += book.price;
  }

}
