import { Book } from './../../models/book';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Output() rateUpBtnClick = new EventEmitter();
  @Output() rateDownBtnClick = new EventEmitter();
  @Output() markSoldBtnClick = new EventEmitter();
  @Output() addCartBtnClick = new EventEmitter();
  today = new Date();
  constructor() { }

  ngOnInit() {
    // console.log(this.book._id);
  }

  handleRateUpBtnClick() {
    this.rateUpBtnClick.emit();
  }

  handleRateDownBtnClick() {
    this.rateDownBtnClick.emit();
  }

  handleMarkBtnClick() {
    this.markSoldBtnClick.emit();
  }

  handleAddCartBtnClick() {
    this.addCartBtnClick.emit();
  }

}
