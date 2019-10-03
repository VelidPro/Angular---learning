import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product-list/product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ImageDescriptionComponent } from './product-list/product/image-description/image-description.component';
import { HeaderComponent } from './header/header.component';
import { DummyComponent } from './dummy/dummy.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ImageDescriptionComponent,
    HeaderComponent,
    DummyComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo:'/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'dummy', component: DummyComponent},
      {path: 'product-list', component: ProductListComponent},
      {path: '**', component: ProductListComponent}
    ]),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
