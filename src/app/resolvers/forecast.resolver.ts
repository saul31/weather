import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WeatherService } from '../services/weather.service';

@Injectable({
  providedIn: 'root'
})
export class ForecastResolver implements Resolve<any> {

  constructor(
    protected router: Router,
    private weatherService: WeatherService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {

    const zipCode = route.params.zipCode;

    if (zipCode === undefined) {

      return;
    }

    return this.weatherService.getWeather(zipCode);
  }

}
