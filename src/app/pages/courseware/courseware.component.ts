import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document/document.service';

import { DesignsListPage } from 'src/app/interfaces/designs-list-page.interface';
import { Design } from 'src/app/interfaces/design.interface';

@Component({
  selector: 'app-courseware',
  templateUrl: './courseware.component.html',
  styleUrls: ['./courseware.component.css']
})
export class CoursewareComponent implements OnInit, AfterViewInit {
  private coursewareScrollView: HTMLElement | null = null;
  private youtubeScrollView: HTMLElement | null = null;

  designsList: Design[] | [];

  constructor(private documentService: DocumentService){
    this.designsList = [];
  }

  ngOnInit(): void {
    this.loadRecentlyEdited();
  }

  ngAfterViewInit(): void {
    this.coursewareScrollView = document.getElementById('courseware-scroll-container');
    this.youtubeScrollView = document.getElementById('youtube-scroll-container');
  }

  loadRecentlyEdited(){
    this.documentService.designs(10, 'updated_at', 'desc').subscribe({
      next: (response: DesignsListPage) => {
        this.designsList = response.data;
        console.log(this.designsList);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {}
    });
  }

  getDesignId(design: Design): string {
    return design.id;
  }

  getDesignThumbnail(design: Design):string {
    return `url('${design.cover.raw}')`;
  }

  getDesignNumberOfPages(design: Design):number {
    return design.pages.length;
  }

  getDesignTitle(design: Design):string {
    return design.title;
  }

  moveToRigth(elementId: string, x: number, y: number){
    if(elementId == 'courseware-scroll-container'){
      this.coursewareScrollView?.scrollBy({ top: y, left: x, behavior : "smooth" });
    } else {
      this.youtubeScrollView?.scrollBy({ top: y, left: x, behavior : "smooth" });
    }
  }

  moveToLeft(elementId: string, x: number, y: number){
    if(elementId == 'courseware-scroll-container'){
      this.coursewareScrollView?.scrollBy({ top: y, left: x, behavior : "smooth" });
    } else {
      this.youtubeScrollView?.scrollBy({ top: y, left: x, behavior : "smooth" });
    }
  }

}
