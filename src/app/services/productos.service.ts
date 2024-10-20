import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto, ProductoDetalle } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url: string = 'https://portafolio-html-93234-default-rtdb.firebaseio.com/';

  cargando:boolean =  true;

  productos: Producto[] =  [];
  producto: ProductoDetalle = {};
  productosFiltrados: Producto[] = [];

  constructor(
    private http: HttpClient
  ) {
    this.getProductos(); 
  }

  getProductos(){
    return new Promise<void>( (resolve, reject) => {
      this.http.get(this.url+'productos_idx.json')
        .subscribe(
          (resp: any) =>{
            this.productos = resp;
            this.cargando = false;
            resolve();
          }
        )
    })
  }

  getProducto( id:string){
    return this.http.get(this.url+'productos/'+ id +'.json/') 
  }

  buscarProducto(search: string){
    if(this.productos.length === 0){
      this.getProductos().then(
        () => {
          this.filtrarProductos(search)
        }
      )
    } 
    this.filtrarProductos(search)
  }

  private filtrarProductos(termino: string){ 
    this.productosFiltrados = []; 
    termino = termino.toLowerCase();
    this.productos.forEach( producto => { 
      const tituloLower = producto.titulo!.toLowerCase();
      if( producto.categoria!.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0){ 
        this.productosFiltrados.push( producto );  
      } 
    }) 
  }

}
