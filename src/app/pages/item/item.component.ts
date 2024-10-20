import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  producto: Producto = {};

  constructor( 
    private route: ActivatedRoute,
    public productosService: ProductosService
  ){}

  ngOnInit(){

    this.route.params.subscribe(
      parametros => {
        this.productosService.getProducto(parametros['id']).subscribe(
          (producto: Producto) => {
            this.producto = producto;
          }
        )
      }
    )

  }

}
