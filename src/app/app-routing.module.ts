import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';

const routes: Routes = [
  {path:'',component:PageLoginComponent},
  {path:'buscar', loadChildren:() => import('./buscar/buscar.module').then(m => m.BuscarModule)},
  {path:'productos', loadChildren:() => import('./productos/productos.module').then(m => m.ProductosModule)},
  {path:'carrito', loadChildren:() => import('./carrito/carrito.module').then(m => m.CarritoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
