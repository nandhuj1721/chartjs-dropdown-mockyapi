  
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  dailyForecast() {
    return this._http.get("https://run.mocky.io/v3/bf278d42-601c-4f4f-87e9-ed37bbb31158").pipe(map((result: any) => result));

  }
}