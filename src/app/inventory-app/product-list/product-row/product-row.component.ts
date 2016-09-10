import { Component, OnInit } from '@angular/core';
import { Product } from "../../inventory-app.component";
import { ProductImageComponent } from './product-image/'
import {ProductDepartmentComponent} from "./product-department/";
import {PriceDisplayComponent} from "./price-display/";

@Component({
  moduleId: module.id,
  selector: 'product-row',
  inputs: ['product'],
  host:{'class':'item'},
  directives: [ProductImageComponent,ProductDepartmentComponent,PriceDisplayComponent],
  templateUrl: 'product-row.component.html',
  styleUrls: ['product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  product: Product;

  constructor() { }

  ngOnInit() {
  }

}
