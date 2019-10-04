import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { DummyComponent } from './dummy/dummy.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductDetailsGuard } from './product/product-details/product-details.guard';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DummyComponent,
    HomeComponent,
    ProductDetailsComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo:'/home', pathMatch: 'full'},
      {path: 'product-details/:title', 
      canActivate: [ProductDetailsGuard],
      component: ProductDetailsComponent},
      {path: 'home', component: HomeComponent},
      {path: 'dummy', component: DummyComponent},
      {path: 'product-list', component: ProductListComponent},
      {path: '**', component: ProductListComponent}
    ]),
    BrowserModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
