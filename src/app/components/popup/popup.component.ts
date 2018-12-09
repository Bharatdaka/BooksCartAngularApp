import { PopupService } from './../../services/popup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  message: string;
  constructor(private popupService: PopupService) {
    
   }

  ngOnInit() {
    this.message = this.popupService.getMessage();
  }

}
