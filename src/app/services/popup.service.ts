import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  message: string;
  constructor() {

  }

  getMessage() {
    return this.message;
  }

  setMessage(message: string) {
    this.message = message;
  }
}
