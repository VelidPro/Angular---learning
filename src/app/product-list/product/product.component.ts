import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() inputTitle: string;
  @Input() inputDescription : string;
  @Input() inputImagePath : string;
  @Input() inputPrice : number;

  @Output() izvoz : EventEmitter<number> = new EventEmitter<number>();

  title: string;
  description: string;
  imagePath : string;
  price: number;


  constructor() { 
  }

  ngOnInit() {
    this.title = this.inputTitle;
    this.description = this.inputDescription;
    this.imagePath = this.inputImagePath;
    this.price = this.inputPrice;
    this.izvoz.emit(this.price);
  }

}
