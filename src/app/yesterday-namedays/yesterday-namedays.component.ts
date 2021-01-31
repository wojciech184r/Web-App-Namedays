import { Component, OnInit } from '@angular/core';
import { NamedaysApiService } from '../services/namedays-api.service';
import { UiService } from '../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-yesterday-namedays',
  templateUrl: './yesterday-namedays.component.html',
  styleUrls: ['./yesterday-namedays.component.css'],
})
export class YesterdayNamedaysComponent implements OnInit {
  yesterdaysNamedays = '';
  showContentYesterday = false;
  private subscription: Subscription | null = null;

  // inject NamedaysApiService
  constructor(private api: NamedaysApiService, private uiService: UiService) {}

  // call funciton from api which is reponsible for yesterdays namedays
  // assign it to field and show field value on html site
  ngOnInit(): void {
    this.uiService.isLoading.next(true);
    this.api.fetchYesterdaysNamedays().subscribe((namedaysYesterday) => {
      this.yesterdaysNamedays = namedaysYesterday;
      this.uiService.isLoading.next(false);
    });

    this.subscription = this.uiService.isLoading.subscribe(
      (isLoading) => (this.showContentYesterday = !isLoading)
    );
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
