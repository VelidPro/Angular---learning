import { Component, OnInit } from '@angular/core';
import {IProduct} from "../shared/IProduct"
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
productList : IProduct [] = [];
sumPrice : number;
  
  constructor() {
    this.sumPrice = 0;
   }

  ngOnInit() {
    console.log(this.productList);
    this.productList.push(new IProduct("Product 1", "This is a product 1 description","https://via.placeholder.com/200", 23 ));
    this.productList.push(new IProduct("Product 2", "This is a product 2 description","https://via.placeholder.com/300", 4 ));
    this.productList.push(new IProduct("Product 3", "This is a product 3 description","https://via.placeholder.com/100", 51 ));
    this.productList.push(new IProduct("Product 5", "This is a product 5 description","https://via.placeholder.com/100", 2 ));
  }

  onIzvoz(message : number) : void
  {
    this.sumPrice += message;
  }

}
