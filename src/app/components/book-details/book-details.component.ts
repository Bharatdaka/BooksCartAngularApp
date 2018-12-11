import { Book } from './../../models/book';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('_id');
    let id = this.route.snapshot.params.id;
    this.bookService
      .getBook(id)
      // .subscribe(res => {let dd = (res.json());
      //             this.book =  JSON.parse(JSON.stringify(dd))[0];
      //             console.log(this.book);
      // });
      .subscribe(res => {this.book = res.json()[0];
        console.log(this.book)});
  }

}
