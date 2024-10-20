import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  busqueda: string = '';

  constructor(
    private route: ActivatedRoute,
    public productos: ProductosService
  ){}

  ngOnInit(){
    this.route.params.subscribe(
      params => {
        this.busqueda = params['search'];
        this.productos.buscarProducto(this.busqueda)
      }
    )
  }

}
