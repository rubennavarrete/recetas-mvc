import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleLayoutComponent } from './simple-layout/simple-layout.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../pages/home/home.module';



@NgModule({
  declarations: [
    SimpleLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    SimpleLayoutComponent
  ]
})
export class LayoutModule { }
