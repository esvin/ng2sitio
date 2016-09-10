import { Component, OnInit } from '@angular/core';
import {Product} from "../../../inventory-app.component";

@Component({
  moduleId: module.id,
  selector: 'product-image',
  host:{'class': 'ui small image'},
  inputs:['product'],
  templateUrl: 'product-image.component.html',
  styleUrls: ['product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  product: Product;

  constructor() { }

  ngOnInit() {
  }

}
