import { Component } from '@angular/core';
import { ArticleComponent } from './article/';
import { Article } from './article/';
import {InventoryAppComponent } from './inventory-app/'
import {PruebaComponent} from './prueba/'


@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [PruebaComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  /*
  articles: Article[];
  title: string;
  names: string[];

  constructor(){
    this.articles = [
      new Article('Angular2','http://angular.io',3),
      new Article('ReactJs','http://reactjs.io',2),
      new Article('PrimeJS','http://prime.js',1)];
  }

  agregarArticulo(titulo: HTMLInputElement, link:HTMLInputElement):void{
    console.log(`Nuevo articulo: ${titulo.value} y link: ${link.value}`);
    this.articles.push(new Article(titulo.value, link.value, 0));
    titulo.value = '';
    link.value = '';
  }
  sortedArticles(): Article[]{
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }*/

  constructor(){

  }
}
