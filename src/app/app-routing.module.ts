import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { DetailsComponent } from './products/details/details.component';

const routes: Routes = [
  { path: '', component: ProductsComponent},
  { path: 'cart', component: CartComponent},
  { path: 'about', component: AboutComponent},
  { path: 'location', component: LocationComponent},   
  { path: 'product/:id', component: DetailsComponent}   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
