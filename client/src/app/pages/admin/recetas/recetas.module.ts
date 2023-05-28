import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecetasRoutingModule } from './recetas-routing.module';
import { RecetasComponent } from './recetas.component';


@NgModule({
  declarations: [
    RecetasComponent,
  ],
  imports: [
    CommonModule,
    RecetasRoutingModule
  ],
  exports: [
    RecetasComponent
  ]
})
export class RecetasModule { }
