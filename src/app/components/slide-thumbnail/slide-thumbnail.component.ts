import { Component, Input } from '@angular/core';

@Component({
  selector: 'slide-thumbnail',
  templateUrl: './slide-thumbnail.component.html',
  styleUrls: ['./slide-thumbnail.component.css']
})
export class SlideThumbnailComponent {
  @Input()
  designId: string;

  @Input()
  srcImage: string;

  @Input()
  numberOfPages: number;

  @Input()
  title: string;

  constructor(){
    this.designId = '';
    this.srcImage = '';
    this.numberOfPages = 0;
    this.title = '';
  }

  editDesign(){
    window.open(`https://editor.trakto.io/editor/${this.designId}`, '_blank');
  }
}
