import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-description',
  templateUrl: './image-description.component.html',
  styleUrls: ['./image-description.component.css']
})
export class ImageDescriptionComponent implements OnInit {
  @Input() inputImagePath : string;
  
  imagePath: string;
  constructor() { }

  ngOnInit() {
    this.imagePath = this.inputImagePath;
  }

}
