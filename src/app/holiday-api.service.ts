import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HolidayApiService {

  constructor(private http: HttpClient) { }

  private _apiURL = 'https://holidayapi.com/v1/holidays?key=6f8abb87-01d2-4338-8903-9e565fea4722';

  getHolidays(info) {
    const year = info.date.getFullYear();
    const params = new HttpParams()
      .set('country', info.country)
      .set('month', "0")
      .set('day', "0")
      .set('year', year);
    return this.http.get(this._apiURL, { responseType: 'json', params });
  }

}