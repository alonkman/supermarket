import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from '../app/pages/products/products.component';
import { DelveiriesComponent } from '../app/pages/delveiries/delveiries.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from '../app/pages/login/login.component';
import { SignupComponent } from '../app/pages/signup/signup.component';

const routes: Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'deliveries', component: DelveiriesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
