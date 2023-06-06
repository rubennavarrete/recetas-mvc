import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from 'config/config';

@Injectable({
  providedIn: 'root',
})
export class RecetasService {
  private URL_datosRecetas: string = config.URL_API_BASE + 'receta';


  almacenadorD!: any[];

  constructor(private http: HttpClient) {}
  getRecetas() {
    return this.http.get<any>(this.URL_datosRecetas, { withCredentials: true });
  }

  putRecetas(id: number, data: any) {
    return this.http.put<any>(this.URL_datosRecetas + '/' + id, data, {
      withCredentials: true,
    });
  }

  getRecetaId(id: number) {
    return this.http.get<any>(`${this.URL_datosRecetas}/${id}`, {
      withCredentials: true,
    })
  }

  deleteRecetas(id: number) {
    console.log(id);
    /*return this.http.delete<any>(
      `${this.URL_datosRecetas}/${id}`,
      { 
        withCredentials: true 
      }
    );*/

  }
}
