import { Component } from '@angular/core';
import { ProductoService } from '../../servicio/producto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filtrar',
  standalone: true,
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.css'],
  imports: [CommonModule]
})
export class FiltrarComponent {
  productos: any[] = [];
  producto: any;

  constructor(private productoServicio: ProductoService) {
    this.productos = this.productoServicio.getProducts(); // Obtener productos al inicializar
  }

  buscarProducto(id: string) {
    const productoId = parseInt(id, 10);
    if (!isNaN(productoId)) {
      this.producto = this.productoServicio.buscarProductoPorId(productoId);
    }
  }

  ordenarAsc() {
    this.productos = this.productoServicio.ordenarProductosPorPrecioAsc();
  }

  ordenarDesc() {
    this.productos = this.productoServicio.ordenarProductosPorPrecioDesc();
  }

  ngOnInit() {
    this.productos = this.productoServicio.getProducts();
  }
}
