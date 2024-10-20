import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url: string = 'https://fakestoreapi.com/products/';

  cargada:boolean =  false;

  productos: Producto[] =  [];
  producto: any;
  productosFiltrados: Producto[] = [];

  constructor(
    private http: HttpClient
  ) { 

    this.getProductos();

  }

  getProductos(){

    return new Promise<void>( (resolve, reject) => {

      this.http.get(this.url)
        .subscribe(
          (resp: any) =>{
            this.productos = resp;
            resolve();
          }
        )

    })
  }

  getProducto( id:string){
    return this.http.get(this.url+id) 
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
      const tituloLower = producto.title!.toLowerCase();
      if( producto.category!.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0){ 
        this.productosFiltrados.push( producto );  
      } 
    }) 
  }

}
