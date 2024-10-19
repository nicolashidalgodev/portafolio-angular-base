import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipo, Info } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  cargada: boolean = false;

  info: Info = {};
  equipo: Equipo[] = [];

  constructor(
    private http: HttpClient, 
  ) {
    this.cargarInfo()
    this.cargarEquipo()
  }

  private cargarInfo(){
    this.http.get('/assets/data/data.json').subscribe(
      (resp:Info) => {
        this.cargada = true;
        this.info = resp;
        console.log(this.info)
      }
    )
  }

  private cargarEquipo(){
    this.http.get('https://portafolio-html-93234-default-rtdb.firebaseio.com/equipo.json').subscribe(
      (resp: any) => { 
        this.equipo = resp; 
        console.log(resp);
      }
    )
  }
}
