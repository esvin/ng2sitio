import { Component } from '@angular/core';
import { HelloWorldComponent } from './hello-world/';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [HelloWorldComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title: string;
  names: string[];

  constructor(){
      this.title = ' El grande!';
      this.names = ['Juan', 'Jose', 'Esvin','Lauras'];
  }
  agregarArticulo(titulo: HTMLInputElement, link:HTMLInputElement):void{
      console.log('Agregando nuevo articulo');

  }
}
