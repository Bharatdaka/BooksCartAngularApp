import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AboutComponent } from './components/about/about.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'home', component: BookListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'add-book', component: AddBookComponent},
  {path: 'book-details/:id', component: BookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
