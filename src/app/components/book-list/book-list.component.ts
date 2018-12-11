import { CartService } from './../../services/cart.service';
import { BookService } from './../../services/book.service';
import { Cart, Item } from './../../models/cart';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  cart: Cart;

  constructor(
    private bookService: BookService,
    private cartService: CartService,
    private http: Http
  ) {

  }

  ngOnInit() {
    this.bookService
      .getBooks()
      .subscribe(res => this.books = res.json());
      // .subscribe(res=> console.log(res.json()));
  }


  rateUp(book: Book) {
    this.bookService.rateUp(book).subscribe();
  }

  rateDown(book: Book) {
    this.bookService.rateDown(book).subscribe();
  }

  toggleSold(book: Book) {
    this.bookService.toggleSold(book).subscribe();
  }

  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }

}
