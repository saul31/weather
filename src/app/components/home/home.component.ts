import { Component } from '@angular/core';
import { CurrentWeather } from '../../models/weather.model';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /**
   * Number of zipCode to search information
   */
  zipCode: number;
  /**
   * List of weathers
   */
  weathers: CurrentWeather[] = [];
  /**
   * Indicates if the alert is displayed
   */
  showAlert = false;
  constructor(
    private weatherService: WeatherService
  ) {
    this.getItems();
  }


  /**
   * Delete the weather information of the selected position
   *
   * @param index position of the list
   */
  deleteWeather(index: number): void {
    this.weathers.splice(index, this.weathers.length);
    localStorage.setItem('items', JSON.stringify(this.weathers));
  }

  /**
   * Search the weather information for the entered zipcode
   */
  search(): void {
    this.weatherService.getInfo(this.zipCode).subscribe((r: CurrentWeather) => {
      const exist = this.weathers.find((weather: CurrentWeather) => r.name === weather.name);

      if (!exist) {
        r.zipCode = this.zipCode;
        this.weathers.push(r);
        localStorage.setItem('items', JSON.stringify(this.weathers));
      }
    }, () => {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
    });
  }

  /**
   * Get the list of searches saved in the localstorage
   */
  private getItems(): void {
    if (JSON.parse(localStorage.getItem('items'))) {
      this.weathers = JSON.parse(localStorage.getItem('items'))
    }
  }
}
