import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from 'config/config';

@Injectable({
  providedIn: 'root',
})
export class SesionService {
  private urlSesion: string = config.URL_API_BASE + 'usuario';

  sesion!: boolean;

  constructor(private http: HttpClient) {}

  valSesion(data: any) {
    return this.http.post<any>(
      this.urlSesion,
      { data },
      { withCredentials: true }
    );
  }
}
