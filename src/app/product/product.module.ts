import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product-list/product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ImageDescriptionComponent } from './product-list/product/image-description/image-description.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ImageDescriptionComponent
  ]
})
export class ProductModule { }
