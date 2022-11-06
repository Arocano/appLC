import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarroRoutingModule } from './carro-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    CarroRoutingModule,
    ShareModule 
  ]
})
export class CarroModule { }
