import { UiService } from './../services/ui.service';
import { NamedaysApiService } from './../services/namedays-api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { isLoweredSymbol } from '@angular/compiler';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-today-namedays',
  templateUrl: './today-namedays.component.html',
  styleUrls: ['./today-namedays.component.css'],
})
export class TodayNamedaysComponent implements OnInit, OnDestroy {
  todaysNamedays = '';
  showContent = false;
  private subscription: Subscription | null = null;

  constructor(private api: NamedaysApiService, private uiService: UiService) {}

  ngOnInit(): void {
    this.uiService.isLoading.next(true);
    this.api.fetchTodayNamedays().subscribe((namedays) => {
      this.todaysNamedays = namedays;
      this.uiService.isLoading.next(false);
    });

    this.subscription = this.uiService.isLoading.subscribe(
      (isLoading) => (this.showContent = !isLoading)
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
