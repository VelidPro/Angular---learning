import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {IProduct} from "../shared/IProduct"
import { stringify } from 'querystring';
import { ProductService } from '../shared/ProductService';
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
productList : IProduct [] = [];
sumPrice : number;
@Output() outputSum: EventEmitter<number> = new EventEmitter<number>();
  


  private _productService;
  constructor(productService: ProductService) {
    this._productService = productService;
      this.sumPrice = 0;
   }

  ngOnInit() {
    this.productList = this._productService.getProducts();
    this.outputSum.emit(this.sumPrice);
  }

  onIzvoz(message : number) : void
  {
    this.sumPrice += message * Math.random();
    this.sumPrice = Number.parseFloat( this.sumPrice.toPrecision(4));
  }

}
