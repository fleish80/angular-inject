import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  #http = inject(HttpClient);

  getApi<T>(url: string): Observable<T> {
    return this.#http.get<T>(url);
  }

}
