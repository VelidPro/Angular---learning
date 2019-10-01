import { Component, OnInit } from '@angular/core';
import {IProduct} from "../shared/IProduct"
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
productList : IProduct [] = [];
  
  constructor() {
   }

  ngOnInit() {
    console.log(this.productList);
    this.productList.push(new IProduct("Product 1", "This is a product 1 description","https://via.placeholder.com/200" ));
    this.productList.push(new IProduct("Product 2", "This is a product 2 description","https://via.placeholder.com/300" ));
    this.productList.push(new IProduct("Product 3", "This is a product 3 description","https://via.placeholder.com/100" ));
  }

}
