import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CurrentWeather } from '../models/weather.model';
import { Forecast } from './../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  /**
   * Url to api
   */
  api = environment.apiUrl;
  /**
   * Token of the api
   */
  key = environment.apiKey


  constructor(
    private http: HttpClient
  ) { }


  /**
   * Get the weather information by zipcode
   *
   * @param zipCode of place for search information
   * @returns 
   */
  getInfo(zipCode: number): Observable<CurrentWeather> {
    const url = `${this.api}weather?zip=${zipCode}&appid=${this.key}&units=metric`
    return this.http.get<CurrentWeather>(url);
  }

  /**
   * Get 5-day forecast of the indicated zipcode
   *
   * @param zipCode of place for search
   * @returns 
   */
  getWeather(zipCode: number): Observable<Forecast> {
    const url = `${this.api}forecast/daily?zip=${zipCode}&appid=${this.key}&cnt=5`
    return this.http.get<Forecast>(url);
  }

  /**
   * Get the url of the icon depending on the selected weather
   *
   * @param weather to find icon
   * @returns string icon
   */
  getIcon(weather: string): string {
    let icon = 'https://www.angulartraining.com/images/weather/'
    switch (weather) {
      case 'Clear':
        return icon + 'sun.png';
      case 'Clouds':
        return icon + 'clouds.png';
      case 'Rain':
        return icon + 'rain.png';
      case 'Snow':
        return icon + 'snow.png';
      default:
        return icon + 'sun.png';
    }
  }
}
