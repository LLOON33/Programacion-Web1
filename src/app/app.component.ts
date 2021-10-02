import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor() {}

  componentes : Componente[] =[
    {
      icon: "cube-outline",
      name: "Tipos De Acero",
      redirecTo: "/acero"
    },
    {
      icon: "cube-outline",
      name: "Tipos De Soldadura",
      redirecTo: "/soldadura"
    }
  ]
}

