import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { startOfWeek, endOfWeek } from 'date-fns';

import { Design } from 'src/app/interfaces/design.interface';
import { DesignsListPage } from 'src/app/interfaces/designs-list-page.interface';

import { DocumentService } from 'src/app/services/document/document.service';

@Component({
  selector: 'app-courseware',
  templateUrl: './courseware.component.html',
  styleUrls: ['./courseware.component.css']
})
export class CoursewareComponent implements OnInit {
  private coursewareScrollView: HTMLElement | null = null;

  public startOfWeek: string;
  public endOfWeek: string;
  public designsList: Design[] | [];

  public loadingDate: boolean;
  public notFound: boolean;
  public internalError: boolean;

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

  loadRecentlyEdited(): void {
    this.loadingDate = true;
    this.documentService.listAllDesignsPerPage(10, 'updated_at', 'desc').subscribe({
      next: (response: DesignsListPage) => {
        this.designsList = response.data;
      },
      error: () => {
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

  moveToRight(elementId: string, x: number, y: number): void {
    if(elementId == 'courseware-scroll-container'){
      document.getElementById('courseware-scroll-container')?.scrollBy({ top: y, left: x, behavior : "smooth" });
    } else {
      document.getElementById('youtube-scroll-container')?.scrollBy({ top: y, left: x, behavior : "smooth" });
    }
  }

  moveToLeft(elementId: string, x: number, y: number): void {
    if(elementId == 'courseware-scroll-container'){
      document.getElementById('courseware-scroll-container')?.scrollBy({ top: y, left: x, behavior : "smooth" });
    } else {
      document.getElementById('youtube-scroll-container')?.scrollBy({ top: y, left: x, behavior : "smooth" });
    }
  }

  getWeekDays(): void {
    let date = new Date();

    let firstDayDate = startOfWeek(date, { weekStartsOn: 0 }).toLocaleDateString('pt');
    this.startOfWeek = firstDayDate.split('/')[0] + '/' +  firstDayDate.split('/')[1];

    let lastDayDate = endOfWeek(date, { weekStartsOn: 0 }).toLocaleDateString('pt');
    this.endOfWeek = lastDayDate.split('/')[0] + '/' +  lastDayDate.split('/')[1];
  }

  navigateToPreviewList(): void {
    this.router.navigate(['preview']);
  }

}
