import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  colors: string[] = ['red', 'green', 'blue', 'grey', 'yellow', 'purple'];

  constructor() {}
}
