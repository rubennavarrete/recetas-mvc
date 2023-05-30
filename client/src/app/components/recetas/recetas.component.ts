import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RecetasService } from 'src/app/core/service/recetas.service';
import { SesionService } from 'src/app/core/service/sesion.service';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css'],
})
export class RecetasComponent implements OnInit {
  showModal: boolean = false;

  verRecetaModal: boolean = false;

  mostarAciones!: boolean;

  idReceta!: number;

  private elDestructor$ = new Subject<any>();

  myForm!: FormGroup;

  dataReceta!: any;

  constructor(
    public fb: FormBuilder,
    public srvRecetas: RecetasService,
    public srvSesion: SesionService,
    private router: Router //redirecciono al servicio
  ) {
    this.myForm = this.fb.group({
      str_receta_nombre: ['', [Validators.required]],
      str_autor_nombre: ['', [Validators.required]],
      str_autor_telefono: ['', [Validators.required]],
      str_autor_correo: ['', [Validators.required]],
      str_receta_dificultad: ['', [Validators.required]],
      str_receta_image: ['', [Validators.required]],
      str_receta_preparacion: ['', [Validators.required]],
    });
  }

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

  toggleModal2() {
    this.verRecetaModal = !this.verRecetaModal;
  }

  editarModal(id: number) {
    this.idReceta = id;
    this.dataReceta = this.srvRecetas.almacenadorD[id - 1];
    this.myForm = this.fb.group({
      str_receta_nombre: [
        this.dataReceta.str_receta_nombre,
        [Validators.required],
      ],
      str_autor_nombre: [
        this.dataReceta.str_autor_nombre,
        [Validators.required],
      ],
      str_autor_telefono: [
        this.dataReceta.str_autor_telefono,
        [Validators.required],
      ],
      str_autor_correo: [
        this.dataReceta.str_autor_correo,
        [Validators.required],
      ],
      str_receta_dificultad: [
        this.dataReceta.str_receta_dificultad,
        [Validators.required],
      ],
      str_receta_image: [
        this.dataReceta.str_receta_image,
        [Validators.required],
      ],
      str_receta_preparacion: [
        this.dataReceta.str_receta_preparacion,
        [Validators.required],
      ],
    });
    this.showModal = !this.showModal;
  }

  //Función ppara obtener el Id de una receta
  actulizarReceta() {
    console.log('receta modificada: ', this.myForm.value);
    this.srvRecetas.putRecetas(this.idReceta, this.myForm.value).subscribe({
      next: (data: any) => {
        console.log('Receta modificada', data);
        this.getReceta();
        this.myForm.reset();
      },
    });
  }

  verReceta(id: number) {
    this.verRecetaModal = !this.verRecetaModal;

    this.dataReceta = this.srvRecetas.almacenadorD[id - 1];
  }

  ngOnDestroy(): void {
    this.elDestructor$.next(true);
    this.elDestructor$.unsubscribe();
  }
}
