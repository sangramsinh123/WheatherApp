import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { WeatherData } from '../models/wheather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class WheatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName:string): Observable<WeatherData>{

    return this.http.get<WeatherData>(environment.baseUrl+'/city/'+cityName, {

      headers: new HttpHeaders()

      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)

      .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),

    });

   }
}
