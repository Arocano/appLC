import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';

const routes: Routes = [
  {path:'',component:PageLoginComponent},
  {path:'inicio', loadChildren:() => import('./inicio/inicio.module').then(m => m.InicioModule)},
  {path:'busqueda', loadChildren:() => import('./busqueda/busqueda.module').then(m => m.BusquedaModule)},
  {path:'carro', loadChildren:() => import('./carro/carro.module').then(m => m.CarroModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
