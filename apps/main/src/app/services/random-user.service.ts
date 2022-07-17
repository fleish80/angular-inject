import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService extends BaseService {

  constructor(protected override http: HttpClient) {
    super(http);
  }
}
