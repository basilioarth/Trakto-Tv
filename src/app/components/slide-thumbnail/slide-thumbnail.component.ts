import { Component, Input, OnInit } from '@angular/core';
import { Design } from 'src/app/interfaces/design.interface';

@Component({
  selector: 'slide-thumbnail',
  templateUrl: './slide-thumbnail.component.html',
  styleUrls: ['./slide-thumbnail.component.css']
})
export class SlideThumbnailComponent implements OnInit {
  @Input()
  design: Design | null;

  designId: string | undefined;

  srcImage: string | undefined;

  numberOfPages: number | undefined;

  title: string | undefined;

  constructor(){
    this.design = null;
    this.designId = '';
    this.srcImage = '';
    this.numberOfPages = 0;
    this.title = '';
  }

  ngOnInit(): void {
    this.setDesignId();
    this.setDesignTitle();
    this.setDesignThumbnail();
    this.setDesignNumberOfPages();
  }

  setDesignId() {
    this.designId = this.design?.id;
  }

  setDesignTitle() {
    this.title = this.design?.title;
  }

  setDesignThumbnail() {
    this.srcImage =  `url('${this.design?.cover.raw}')`;
  }

  setDesignNumberOfPages() {
    this.numberOfPages = this.design?.pages.length;
  }

  presentDesign(){

    window.open(`https://editor.trakto.io/presentation/p/${this.designId}`, '_blank');
  }
}
