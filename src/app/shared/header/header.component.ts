import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private router: Router,
    public servicio: InfoPaginaService
  ){}

  buscarProducto( e: any, search:string): void{
    e.preventDefault();
    if(search.length < 1) return;
    this.router.navigate(['search', search])
  }
}
