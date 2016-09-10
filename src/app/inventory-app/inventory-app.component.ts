import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from './product-list/'

export class Product{
  constructor(public sku: string, public name: string,
              public imageUrl: string, public department: string[], public price: number){
  }
}
@Component({
  moduleId: module.id,
  selector: 'inventory-app',
  directives: [ProductListComponent],
  templateUrl: 'inventory-app.component.html',
  styleUrls: ['inventory-app.component.css']
})
export class InventoryAppComponent implements OnInit {
  products: Product[];

  constructor() {
    this.products = [
      new Product('Sombrero','Sombrero negro','/resources/hat.jpg',
        ['Hombres','Accesorios','Outdoor'],30.1),
      new Product('Blusa','Blusa estampada','/resources/blouse.jpg',
        ['Mujeres','Ropa','Fashion'],40),
      new Product('Pantalon','Roto','/resources/jeans.jpg',
        ['Mujeres','Moderno','Casual'],45),
      new Product('Zapatos','Cuero','/resources/shoes.jpg',
        ['Hombres','Moderno','Calzado'],20)
    ];
  }
  productSelected(product:Product):void{
    console.log(`Product clicked:`);
  }
  ngOnInit() {
  }

}
