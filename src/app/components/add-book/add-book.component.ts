import { UserdataService } from './../../services/userdata.service';
import { PopupService } from './../../services/popup.service';
import { BookService } from './../../services/book.service';
import { Book } from './../../models/book';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Output() addBookFormSubmit = new EventEmitter();
  newBook: Book;

  constructor(private bookService: BookService,
    private router: Router,
    private popupService: PopupService,
    private userSerivce: UserdataService ) { }

  ngOnInit() {
    // console.log(this.userSerivce.getUserLoggedIn());
    if(!this.userSerivce.getUserLoggedIn()){
      return this.router.navigate(['/user/signin']);
    } else {
      this.newBook = new Book(null, null, null, null);
    }
  }


  addBook(book: Book) {
    this.popupService.setMessage('Are you sure?');
    this.bookService
      .addBook(this.newBook)
      .subscribe(res => this.router.navigate(['/home']));
  }

}
