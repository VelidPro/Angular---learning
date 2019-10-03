import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import { IProduct } from '../shared/IProduct';
import { ProductService } from '../shared/ProductService';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: IProduct;


  private readonly _productService;
  constructor(private route: ActivatedRoute, productService: ProductService) {
    this._productService = productService;
   }

  ngOnInit() {
    const title = (this.route.snapshot.paramMap.get("title"));
    
    this.product = this._productService.getProducts().find(product => product.title === title);
    console.log(this.product);
  }

}
