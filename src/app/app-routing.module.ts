import { UserComponent } from './components/user/user.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AboutComponent } from './components/about/about.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/user/signin/signin.component';
import { SignupComponent } from './components/user/signup/signup.component';


const routes: Routes = [
  {path: 'home', component: BookListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'add-book', component: AddBookComponent},
  {path: 'book-details/:id', component: BookDetailsComponent},
  {path: 'user', component:UserComponent},
  {path: 'user/signin', component:SigninComponent},
  {path: 'user/signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
