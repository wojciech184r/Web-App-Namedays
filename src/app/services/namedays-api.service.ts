import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NamedaysApiService {
  private readonly todaysNamedaysUrl =
    'https://api.abalin.net/today?country=pl&timezone=Europe/Prague';
    private readonly tomorrowNamedaysUrl =
    'https://api.abalin.net/tomorrow?country=pl&timezone=Europe/Prague';
  private readonly yesterdaysNamedaysUrl =
    'https://api.abalin.net/yesterday?country=pl&timezone=Europe/Prague';
  private readonly searchByDateUrl =
    'https://api.abalin.net/namedays?country=pl&';
  private readonly searchByNameUrl =
    'https://api.abalin.net/getdate?&country=pl&name=';

  constructor(private http: HttpClient) {}

  fetchTodayNamedays(): Observable<string> {
    return this.http
      .get<Namedays>(this.todaysNamedaysUrl)
      .pipe(map((namedays) => namedays.data.namedays.pl));
  }
  fetchTomorrowNamedays(): Observable<string> {
    return this.http
      .get<Namedays>(this.tomorrowNamedaysUrl)
      .pipe(map((namedays) => namedays.data.namedays.pl));
  }

  fetchYesterdaysNamedays(): Observable<string> {
    return this.http
      .get<Namedays>(this.yesterdaysNamedaysUrl)
      .pipe(map((namedays) => namedays.data.namedays.pl));
  }

  searchByDate(month: string, day: string): Observable<string> {
    return this.http
      .get<Namedays>(`${this.searchByDateUrl}month=${month}&day=${day}`)
      .pipe(map((namedays) => namedays.data.namedays.pl));
  }
  searchByName(
    name: string
  ): Observable<{ dates: Array<{ month: number; day: number }> }> {
    return this.http
      .get<{
        'country code': string;
        results: Array<{
          day: number;
          month: number;
        }>;
      }>(this.searchByNameUrl + name)
      .pipe(
        map((result) => {
          const dates = result.results.map((el) => ({
            day: el.day,
            month: el.month,
          }));
          return {
            dates: dates,
          };
        })
      );
  }
}
