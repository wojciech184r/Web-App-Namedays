import { NamedaysApiService } from './../services/namedays-api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UiService } from '../services/ui.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search-nameday-date',
  templateUrl:'./search-nameday-date.component.html',
  styleUrls: ['./search-nameday-date.component.css'],
})
export class SearchNamedayDateComponent implements OnInit, OnDestroy {
  name: string = '';
  showContent = true;
  date:any='';
  showValue:{month:number; day:number;}[]=[];
  constructor(private api: NamedaysApiService, private uiService: UiService) {}
  
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.api
      .searchByName(this.name)
      .subscribe((results) => console.log(results));
  }

  onSearch() {
    if (this.name === '') {
      return;
    }
    this.uiService.isLoading.next(true);
   
    this.api.searchByName(this.name).subscribe((result) => { 
    this.showValue = result.dates; 
    this.uiService.isLoading.next(false);
     }) ;
  }
}
