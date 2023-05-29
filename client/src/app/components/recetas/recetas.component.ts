import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RecetasService } from 'src/app/core/service/recetas.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  private elDestructor$ = new Subject<any>()

  constructor(public srvRecetas: RecetasService)    //redirecciono al servicio
  { 

  }

  ngOnInit(): void      //al iniciar ejecuto el get
  {
    this.getReceta()
  }
  
  getReceta ()
  {
    this.srvRecetas.getRecetas().     //estoy diciendo que el get es una función del servicioRecetas
    pipe(takeUntil(this.elDestructor$)). //asignar la parte a destruir
    subscribe({       //es para usar la función
      //es como un try catch 
      next: (data:any) =>           //si hay datos y no hay errores
      {
          console.log("Llegaron los datos",data);
          this.srvRecetas.almacenadorD= data.body     //amacenadorD está en el servicio 
          console.log("datos del servicio : ", this.srvRecetas.almacenadorD);   //consulta para saber que datos hay
      },
      error: (errorsito) =>     //me dice el error del servidor
      {
          console.log(errorsito);
      }
    })
    
  }

}
