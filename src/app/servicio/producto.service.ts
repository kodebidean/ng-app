import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: any[] = [
    { id: 1, nombre: 'Producto 1', precio: 100, cantidad: 10, estado: true },
    { id: 2, nombre: 'Producto 2', precio: 200, cantidad: 5, estado: true }
    // Agrega más productos según tu estructura actual
  ];
  getProducts(){
    return this.productos;
  }

  addProduct(producto: any){
    this.productos.push(producto);
  }

  removeProduct(producto:any){
    this.productos=this.productos.filter(p=> p !== producto);
  }

  changeState(producto: any) {
    producto.estado = !producto.estado;
  }

  // Método para añadir cantidad
  addCantidad(producto: any, cantidad: number) {
    producto.cantidad += cantidad;
  }

  // Método para restar cantidad disponible y aumentar cantidad vendida
  venderProducto(producto: any, cantidad: number) {
      producto.cantidad -= cantidad;
  }
  // Método para buscar producto por ID
  buscarProductoPorId(id: number): any | undefined {
    return this.productos.find(producto => producto.id === id);
  }

  // Método para ordenar productos por precio ascendente
  ordenarProductosPorPrecioAsc(): any[] {
    return [...this.productos].sort((a, b) => a.precio - b.precio);
  }

  // Método para ordenar productos por precio descendente
  ordenarProductosPorPrecioDesc(): any[] {
    return [...this.productos].sort((a, b) => b.precio - a.precio);
  }
}


