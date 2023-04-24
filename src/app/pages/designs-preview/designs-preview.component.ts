import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document/document.service';
import { Design } from 'src/app/interfaces/design.interface';
import { DesignsListPage } from 'src/app/interfaces/designs-list-page.interface';

@Component({
  selector: 'app-designs-preview',
  templateUrl: './designs-preview.component.html',
  styleUrls: ['./designs-preview.component.css']
})
export class DesignsPreviewComponent implements OnInit {
  designsList: Design[] | [];
  constructor(private documentService: DocumentService){
    this.designsList = [];
  }

  ngOnInit(): void {
    this.loadAllDesigns();
  }

  loadAllDesigns(){
    this.documentService.allDesigns('title', 'desc').subscribe({
      next: (response: DesignsListPage) => {
        this.designsList = response.data;
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
}
