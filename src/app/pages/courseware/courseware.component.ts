import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DocumentService } from 'src/app/services/document/document.service';

import { DesignsListPage } from 'src/app/interfaces/designs-list-page.interface';
import { Design } from 'src/app/interfaces/design.interface';

import { startOfWeek, endOfWeek } from 'date-fns';

@Component({
  selector: 'app-courseware',
  templateUrl: './courseware.component.html',
  styleUrls: ['./courseware.component.css']
})
export class CoursewareComponent implements OnInit {
  private coursewareScrollView: HTMLElement | null = null;
  private youtubeScrollView: HTMLElement | null = null;

  startOfWeek: string;
  endOfWeek: string;
  designsList: Design[] | [];

  loadingDate: boolean;
  notFound: boolean;
  internalError: boolean;

  constructor(private documentService: DocumentService, private router: Router){
    this.startOfWeek = '';
    this.endOfWeek = '';
    this.designsList = [];
    this.loadingDate = false;
    this.notFound = false;
    this.internalError = false;
  }

  ngOnInit(): void {
    this.getWeekDays();
    this.loadRecentlyEdited();
  }

  loadRecentlyEdited(){
    this.loadingDate = true;
    this.documentService.listAllDesignsPerPage(10, 'updated_at', 'desc').subscribe({
      next: (response: DesignsListPage) => {
        this.designsList = response.data;
      },
      error: (err) => {
        console.log(err);
        this.loadingDate = false;
        this.notFound = false;
        this.internalError = true;
      },
      complete: () => {
        this.loadingDate = false;
        this.designsList.length == 0 ? this.notFound = true : this.notFound = false;
        this.internalError = false;
      }
    });
  }

  moveToRight(elementId: string, x: number, y: number){
    if(elementId == 'courseware-scroll-container'){
      console.log(this.coursewareScrollView)
      document.getElementById('courseware-scroll-container')?.scrollBy({ top: y, left: x, behavior : "smooth" });
    } else {
      document.getElementById('youtube-scroll-container')?.scrollBy({ top: y, left: x, behavior : "smooth" });
    }
  }

  moveToLeft(elementId: string, x: number, y: number){
    if(elementId == 'courseware-scroll-container'){
      document.getElementById('courseware-scroll-container')?.scrollBy({ top: y, left: x, behavior : "smooth" });
    } else {
      document.getElementById('youtube-scroll-container')?.scrollBy({ top: y, left: x, behavior : "smooth" });
    }
  }

  getWeekDays(){
    let date = new Date();

    let firstDayDate = startOfWeek(date, { weekStartsOn: 0 }).toLocaleDateString('pt');
    this.startOfWeek = firstDayDate.split('/')[0] + '/' +  firstDayDate.split('/')[1];

    let lastDayDate = endOfWeek(date, { weekStartsOn: 0 }).toLocaleDateString('pt');
    this.endOfWeek = lastDayDate.split('/')[0] + '/' +  lastDayDate.split('/')[1];
  }

  navigateToPreviewList(){
    this.router.navigate(['preview']);
  }

}
