import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: Info = {};
  cargada: boolean = false;

  constructor(
    private http: HttpClient
  ) {
    this.http.get('assets/data/data.json').subscribe(
      (resp:Info) => {
        this.cargada = true;
        this.info = resp;
        console.log(this.info)
      }
    )
   }
}
