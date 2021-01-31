import { UiService } from './../services/ui.service';
import { NamedaysApiService } from './../services/namedays-api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-nameday-by-date',
  templateUrl:'./search-nameday-by-date.component.html',
  styleUrls: ['./search-nameday-by-date.component.css'],
})
export class SearchNamedayByDateComponent implements OnInit, OnDestroy {
  date: string = '';
  namedaysForDate = '';
  month = '';
  day = '';
  showContent = false;

  private subscription: Subscription | null = null;

  constructor(private api: NamedaysApiService, private uiService: UiService) {}

  ngOnInit(): void {
    this.uiService.isLoading.subscribe(
      (isLoading) => (this.showContent = !isLoading)
    );
  }

  ngOnDestroy(): void {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  onSearch() {
    if (this.date === '') {
      return;
    }
    this.uiService.isLoading.next(true);
    const dateSplitted = this.date.split('-'); // 2021-01-17 -> [2021, 01, 17]
    this.month = dateSplitted[1];
    this.day = dateSplitted[2];

    this.api.searchByDate(this.month, this.day).subscribe((namedays) => {
      this.namedaysForDate = namedays;
      this.uiService.isLoading.next(false);
    });
  }
}
