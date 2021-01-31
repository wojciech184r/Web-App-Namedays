import { SearchNamedayDateComponent } from './search-nameday-date/search-nameday-date.component';
import { TomorrowNamedaysComponent } from './tomorrow-namedays/tomorrow-namedays.component';
import { YesterdayNamedaysComponent } from './yesterday-namedays/yesterday-namedays.component';
import { HomeComponent } from './home/home.component';
import { TodayNamedaysComponent } from './today-namedays/today-namedays.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchNamedayByDateComponent } from './search-nameday-by-date/search-nameday-by-date.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' }, // http:localhost:4200/
  { path: 'home', pathMatch: 'full', component: HomeComponent }, // http:localhost:4200/home
  {
    path: 'todaysNamedays',
    pathMatch: 'full',
    component: TodayNamedaysComponent,
  }, // http:localhost:4200/todaysNamedays
  {
    path: 'yesterdaysNamedays',
    pathMatch: 'full',
    component: YesterdayNamedaysComponent,
  },
  {
    path: 'tomorrowsNamedays',
    pathMatch: 'full',
    component: TomorrowNamedaysComponent,
  },
  {
    path: 'searchNamedayDate',
    pathMatch: 'full',
    component: SearchNamedayDateComponent,
  },
  {
    path: 'searchNamedayByDate',
    pathMatch: 'full',
    component: SearchNamedayByDateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
