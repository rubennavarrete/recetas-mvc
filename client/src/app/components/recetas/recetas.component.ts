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

  constructor(private srvRecetas: RecetasService) 
  { 

  }

  ngOnInit(): void 
  {

  }
  
  getReceta ()
  {
    this.srvRecetas.getRecetas().
    pipe(takeUntil(this.elDestructor$)).
    subscribe({
      next: (data) =>
      {
          console.log("Llegaron los datos",data);
      },
      error: (errorsito) =>
      {
          console.log(errorsito);
      }
    })
    
  }

}
