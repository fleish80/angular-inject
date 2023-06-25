import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanMatchService {

  match() {
    return false;
  }
}
