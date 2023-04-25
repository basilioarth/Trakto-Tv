import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { DesignsListPage } from 'src/app/interfaces/designs-list-page.interface';
import { Design } from 'src/app/interfaces/design.interface';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private documentURL: string;

  constructor(private http: HttpClient) {
    this.documentURL = environment.baseURL + 'document';
  }

  listAllDesignsPerPage(total_per_page: number, order_by: string, order_orientation: string): Observable<DesignsListPage>{
    let params = new HttpParams().set("total_per_page", total_per_page).set("order_by", order_by).set("order_orientation", order_orientation);

    return this.http.get<DesignsListPage>(this.documentURL, { params: params});
  }

  listAllDesigns(order_by: string, order_orientation: string): Observable<DesignsListPage>{
    let params = new HttpParams().set("order_by", order_by).set("order_orientation", order_orientation);

    return this.http.get<DesignsListPage>(this.documentURL, { params: params});
  }

  getDesignById(id: string): Observable<Design>{
    return this.http.get<Design>(`${this.documentURL}/${id}`);
  }
}
