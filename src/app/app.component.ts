import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WheatherService } from './Services/wheather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  constructor(private wheatherService : WheatherService){

  }

  // weatherData?: WeatherData;

  ngOnInit(): void {
    this.wheatherService.getWeatherData('Mumbai')
    .subscribe({
      next : (response) => {
        // this.weatherData = response;
        console.log(response);
      }
    })
  }
  
}
