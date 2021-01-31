import { CopyrightsComponent } from './copyrights/copyrights.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ColorBarComponent } from './color-bar/color-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { TodayNamedaysComponent } from './today-namedays/today-namedays.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { YesterdayNamedaysComponent } from './yesterday-namedays/yesterday-namedays.component';
import { TomorrowNamedaysComponent } from './tomorrow-namedays/tomorrow-namedays.component';
import { SearchNamedayDateComponent } from './search-nameday-date/search-nameday-date.component';
import { SearchNamedayByDateComponent } from './search-nameday-by-date/search-nameday-by-date.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    CopyrightsComponent,
    ColorBarComponent,
    TodayNamedaysComponent,
    HomeComponent,
    NavComponent,
    YesterdayNamedaysComponent,
    TomorrowNamedaysComponent,
    SearchNamedayDateComponent,
    SearchNamedayByDateComponent,
    LoadingIndicatorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
