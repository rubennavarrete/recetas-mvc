import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: 'receta', 
        loadChildren: () =>
        import ('./recetas/recetas.module').then(
          (m) => m.RecetasModule
        )
      }
    ]
  }
]


@NgModule({
  declarations: [
    
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
  ], 
  exports: [
    RouterModule,
    AdminComponent
  ]
})
export class AdminModule { }
