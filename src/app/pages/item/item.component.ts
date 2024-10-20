import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto, ProductoDetalle } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  producto: ProductoDetalle = {};
  paramId: string = '';

  constructor( 
    private route: ActivatedRoute,
    public productosService: ProductosService
  ){}

  ngOnInit(){

    this.route.params.subscribe(
      parametros => {
        this.paramId = parametros['id'];
        this.productosService.getProducto(this.paramId).subscribe(
          (producto: any) => {
            this.producto = producto;
          }
        )
      }
    )

  }

}
