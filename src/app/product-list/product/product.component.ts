import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() inputTitle: string;
  @Input() inputDescription : string;
  @Input() inputImagePath : string;

  title: string;
  description: string;
  imagePath : string

  constructor() { 

  }

  ngOnInit() {
    this.title = this.inputTitle;
    this.description = this.inputDescription;
    this.imagePath = this.inputImagePath;
  }

}
