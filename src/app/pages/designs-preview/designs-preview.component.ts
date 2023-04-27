import { Component, OnInit } from '@angular/core';

import { Design } from 'src/app/interfaces/design.interface';
import { DesignsListPage } from 'src/app/interfaces/designs-list-page.interface';

import { DocumentService } from 'src/app/services/document/document.service';

@Component({
  selector: 'app-designs-preview',
  templateUrl: './designs-preview.component.html',
  styleUrls: ['./designs-preview.component.css']
})
export class DesignsPreviewComponent implements OnInit {
  public designsList: Design[] | [];

  public loadingDate: boolean;
  public notFound: boolean;
  public internalError: boolean;

  constructor(private documentService: DocumentService){
    this.designsList = [];
    this.loadingDate = false;
    this.notFound = false;
    this.internalError = false;
  }

  ngOnInit(): void {
    this.loadAllDesigns();
  }

  loadAllDesigns(): void {
    this.loadingDate = true;
    this.documentService.listAllDesigns('title', 'desc').subscribe({
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
}
