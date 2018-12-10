import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { TitlecasePipe } from './pipes/titlecase.pipe';
import { AboutComponent } from './components/about/about.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import {MatCardModule} from '@angular/material/card';
import { PopupComponent } from './components/popup/popup.component';
import { TitlecaseDirective } from './titlecase.directive';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookItemComponent,
    AddBookComponent,
    ShoppingCartComponent,
    TitlecasePipe,
    AboutComponent,
    BookDetailsComponent,
    PopupComponent,
    TitlecaseDirective,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
