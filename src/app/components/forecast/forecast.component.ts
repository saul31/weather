import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Forecast } from '../../models/weather.model';
import { WeatherService } from './../../services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  /**
   * 5-day forecast information
   */
  forecast: Forecast;


  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.forecast = this.route.snapshot.data.response;
    // for (var i = 0; i < this.forecast.list.length; i += 8) {
    //   this.daily.push(this.forecast.list[i]);
    // }
  }

  /**
   * Get the url of the icon depending on the selected weather
   *
   * @param weather to find icon
   * @returns string icon
   */
  getIcon(weather: string): string {
    return this.weatherService.getIcon(weather);
  }

}
