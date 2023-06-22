import { Injectable } from '@angular/core';
import { BaseBeforeService } from './base-before.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RandomUserBeforeService extends BaseBeforeService{

  constructor(protected override http: HttpClient) {
    super(http);
  }
}
