import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { SesionService } from 'src/app/core/service/sesion.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css'],
})
export class SesionComponent implements OnInit, OnDestroy {
  myForm!: FormGroup;
  private destroy$ = new Subject<any>();
  claveInc: boolean = true;
  message: string = '';

  constructor(public fb: FormBuilder, public srvSesion: SesionService) {
    this.myForm = this.fb.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  IniciarSesion() {
    console.log(this.myForm.value);
    this.srvSesion
      .valSesion(this.myForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: any) => {
          console.log(data.status);
          this.srvSesion.sesion = data.status;
          this.claveInc = data.status;
          this.message = data.message;

          if (this.srvSesion.sesion == true) {
            window.location.href = '/recetas';
          }
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
