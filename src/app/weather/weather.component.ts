import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';  
import { WeatherDataService } from "../services/weather-data.service";
//import {Observable} from 'rxjs/Rx';
import { NgxSpinnerService } from "ngx-spinner";
import { key } from '../config';

@Component ({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent implements OnInit {
  selectedCity: string;
  city: string[] = ['Mumbai','Pune','Chennai','Bengaluru','Delhi','Colorado',
  'Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois',
  'Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine',
  'Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
  'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey',
  'New Mexico','New York','North Dakota','North Carolina','Ohio',
  'Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina',
  'South Dakota','Tennessee','Texas','Utah','Vermont',
  'Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
  displayData: any;
  weatherIcon: any;
  appID: string;
  invalidData: boolean = false;

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {   

  }

  getCityWeather() {
      this.spinner.show();    
      //this.appID = key;  
      let route='https://api.openweathermap.org/data/2.5/weather?q=' + this.selectedCity + '&appid=' + key;

      fetch(route)
      .then(response => response.json())
      .then(data => {
        if(data.cod === '404') {
          this.invalidData = true;
          this.spinner.hide();
        } else {
          this.invalidData = false;
          this.displayData = data;
          this.showWeather();  
        }
        
      })       
  }

  showWeather() {
      this.displayData.tempCelcius = (this.displayData.main.temp - 273.15).toFixed(0);
      this.displayData.tempMin = (this.displayData.main.temp_min - 273.15).toFixed(0);
      this.displayData.tempMax = (this.displayData.main.temp_max - 273.15).toFixed(0);
      this.weatherIcon = 'http://openweathermap.org/img/w/' + this.displayData.weather[0].icon + '.png';
      this.spinner.hide();
  }

}

