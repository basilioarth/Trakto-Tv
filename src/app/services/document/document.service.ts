import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private documentURL: string;

  constructor(private http: HttpClient) {
    this.documentURL = environment.baseURL + 'document';
  }

  designs(total_per_page: number, order_by: string, order_orientation: string): Observable<HttpResponse<any>>{
    let params = new HttpParams().set("total_per_page", total_per_page).set("order_by", order_by).set("order_orientation", order_orientation);

    return this.http.get<HttpResponse<any>>(this.documentURL, { params: params});
  }

  design(id: string): Observable<HttpResponse<any>>{
    return this.http.get<HttpResponse<any>>(`${this.documentURL}/${id}`);
  }
}
