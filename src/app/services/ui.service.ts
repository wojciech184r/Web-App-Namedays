import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  isLoading = new Subject<boolean>();

  constructor() {}
}
