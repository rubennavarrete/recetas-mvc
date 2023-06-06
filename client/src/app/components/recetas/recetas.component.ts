import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RecetasService } from 'src/app/core/service/recetas.service';
import { SesionService } from 'src/app/core/service/sesion.service';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css'],
})
export class RecetasComponent implements OnInit {
  showModal: boolean = false;

  mostarAciones!: boolean;

  private elDestructor$ = new Subject<any>();

  constructor(
    public srvRecetas: RecetasService,
    public srvSesion: SesionService,
    private router: Router //redirecciono al servicio
  ) {}

  ngOnInit(): void {
    //al iniciar ejecuto el get
    this.getReceta();

    this.srvSesion.selectSesion$.pipe(takeUntil(this.elDestructor$)).subscribe({
      next: (data: any) => {
        console.log('Sesion: ', data);
        this.mostarAciones = data;
      },
    });
  }

  getReceta() {
    this.srvRecetas
      .getRecetas() //estoy diciendo que el get es una función del servicioRecetas
      .pipe(takeUntil(this.elDestructor$)) //asignar la parte a destruir
      .subscribe({
        //es para usar la función
        //es como un try catch
        next: (
          data: any //si hay datos y no hay errores
        ) => {
          console.log('Llegaron los datos', data);
          this.srvRecetas.almacenadorD = data.body; //amacenadorD está en el servicio
          console.log('datos del servicio : ', this.srvRecetas.almacenadorD); //consulta para saber que datos hay
        },
        error: (
          errorsito //me dice el error del servidor
        ) => {
          console.log(errorsito);
        },
      });
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  //Función ppara obtener el Id de una receta
  modificarReceta(idReceta: number) {
    console.log('Id de la receta a modificar: ', idReceta);
    //this.router.navigate(['/modal'])
    //const modal = this.ModalComponent.open();
  }
}
