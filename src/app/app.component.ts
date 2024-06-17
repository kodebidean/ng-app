import { Component } from '@angular/core';

import { FormComponent } from './componentes/form/form.component';
import { ListComponent } from './componentes/list/list.component';
import { FiltrarComponent } from './componentes/filtrar/filtrar.component';
import { NavComponent } from './componentes/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormComponent, ListComponent, FiltrarComponent, NavComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'toDoList';
}
