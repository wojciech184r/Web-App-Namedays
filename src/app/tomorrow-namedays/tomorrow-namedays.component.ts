import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NamedaysApiService } from '../services/namedays-api.service';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-tomorrow-namedays',
  templateUrl: './tomorrow-namedays.component.html',
  styleUrls: ['./tomorrow-namedays.component.css']
})
export class TomorrowNamedaysComponent implements OnInit, OnDestroy {
  tomorrowNamedays = '';
  showContent = false;
  private subscription: Subscription | null = null;

  constructor(private api: NamedaysApiService, private uiService: UiService) {}
  ngOnInit(): void {
    this.uiService.isLoading.next(true);
    this.api.fetchTomorrowNamedays().subscribe((namedays) => {
      this.tomorrowNamedays = namedays;
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
