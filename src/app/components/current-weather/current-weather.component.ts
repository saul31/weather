import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrentWeather } from './../../models/weather.model';
import { WeatherService } from './../../services/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {
  /**
   * Weather information
   */
  @Input() current: CurrentWeather = {} as CurrentWeather;
  /**
   * Position of weather list
   */
  @Input() index: number;
  /**
   * Method to delete card 
   */
  @Output() weatherDelete: EventEmitter<number>;


  constructor(
    private weatherService: WeatherService
  ) {
    this.weatherDelete = new EventEmitter();
  }


  /**
   * Delete card of weather list
   */
  delete(): void {
    this.weatherDelete.emit(this.index);
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
