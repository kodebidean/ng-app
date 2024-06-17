import { Component } from '@angular/core';
import { ProductoService } from '../../servicio/producto.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  id: string = '';
  categoria: string = '';
  nombre: string = '';
  precio: number = 0;

  constructor (private productoServicio: ProductoService){};

  addProduct(form:NgForm){
    if(form.valid){
      const newProduct= {
        id: this.id,
        categoria: this.categoria,
        nombre: this.nombre,
        precio: this.precio,
        estado: false,
        cantidad:0
      };
      this.productoServicio.addProduct(newProduct);
      form.resetForm();
    }
  }
}
