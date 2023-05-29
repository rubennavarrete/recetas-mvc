import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RecetasComponent } from './components/recetas/recetas.component';

import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { ModificarRecetaComponent } from './components/modificar-receta/modificar-receta.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    RecetasComponent,
    InicioComponent,
    AcercaComponent,
    SesionComponent,
    ModificarRecetaComponent,
    ModalComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
