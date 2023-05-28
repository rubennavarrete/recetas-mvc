import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from 'config/config';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  private URL_datosRecetas: string = config.URL_API_BASE + 'receta'

  constructor(private http:HttpClient) 
  { 
    
  }
  getRecetas()
  {
    return this.http.get<any>(this.URL_datosRecetas, {withCredentials:true})
  }
}

