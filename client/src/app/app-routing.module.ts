import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetasComponent } from './components/recetas/recetas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { ModificarRecetaComponent } from './components/modificar-receta/modificar-receta.component';
import { ModalComponent } from './components/modal/modal.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'recetas',
    component: RecetasComponent,
  },
  {
    path: 'acerca-de',
    component: AcercaComponent,
  },
  {
    path: 'sesion',
    component: SesionComponent,
  },
  {
    path: 'modal',
    component: ModalComponent,
  }
  // {
  //   path: '',
  //   redirectTo: '/photos',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
