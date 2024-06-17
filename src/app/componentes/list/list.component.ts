import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicio/producto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  productos: any[] = [];

  constructor(private productoServicio: ProductoService) {}

  ngOnInit() {
    this.productos = this.productoServicio.getProducts();
  }

  removeProduct(producto: any) {
    this.productoServicio.removeProduct(producto);
    this.productos = this.productoServicio.getProducts();
  }

  changeState(producto: any) {
    this.productoServicio.changeState(producto);
  }

  // Método para añadir cantidad
  addCantidad(producto: any, cantidad: number) {
    this.productoServicio.addCantidad(producto, cantidad);
  }

  // Método para vender producto
  venderProducto(producto: any, cantidad: number) {
    this.productoServicio.venderProducto(producto, cantidad);
  }
}
