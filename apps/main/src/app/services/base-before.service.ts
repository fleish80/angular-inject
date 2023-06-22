import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseBeforeService {

  constructor(protected http: HttpClient) { }

  getApi<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
}
