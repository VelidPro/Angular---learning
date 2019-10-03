import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { nextTick } from 'q';
import { ProductService } from '../shared/ProductService';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsGuard implements CanActivate {

  private readonly _productService;
  constructor(private router:Router, productService:ProductService) {
  
    this._productService = productService;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let title = next.url[1].path;
      
      if(this._productService.getProducts().find(product => product.title === title) == undefined)
      {
        this.router.navigate(['/product-details']);
        return false;
      }
  
    return true;
  }
  
}
