import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RecetasService } from 'src/app/core/service/recetas.service';

@Component({
  selector: 'app-nueva-receta',
  templateUrl: './nueva-receta.component.html',
  styleUrls: ['./nueva-receta.component.css']
})
export class NuevaRecetaComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<any>();
  file!:any 

  constructor(
    public srvRecetas: RecetasService 
  ) { }

  ngOnInit(): void {
    
  }

  send(){
    this.srvRecetas.postRecetas(this.file).pipe(takeUntil(this.destroy$))
    .subscribe({
      next:(res) =>{
        console.log('consume el servicio');        
      },
      error:(err) =>{
        console.log('error ->', err);
      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }

}
