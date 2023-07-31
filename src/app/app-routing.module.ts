import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { AuthGuard } from './Services/auth.guard';



const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'products/description/:id', component: ProductDescriptionComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
