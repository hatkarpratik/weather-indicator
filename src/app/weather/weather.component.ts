import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';

import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';  

@Component ({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent implements OnInit {
  selectedState: string;
  states: string[] = ['Mumbai','Pune','Chennai','Bengaluru','Delhi','Colorado',
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

  constructor() {}

  ngOnInit(): void {   

  }

  searchWeather() {
      let currentDate = new Date();
      this.displayData = JSON.parse('{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"base":"stations","main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},"visibility":10000,"wind":{"speed":4.1,"deg":80},"clouds":{"all":90},"dt":1485789600,"sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},"id":2643743,"name":"London","cod":200}');
      console.log(this.displayData);
      
      let sunsetTime = new Date(this.displayData.sys.sunset * 1000);
      this.displayData.sunsetTIme = sunsetTime;
      
      this.displayData.isDay = (currentDate.getTime() < sunsetTime.getTime());
      this.displayData.tempCelcius = (this.displayData.main.temp - 273.15).toFixed(0);
      this.displayData.tempMin = (this.displayData.main.temp_min - 273.15).toFixed(0);
      this.displayData.tempMax = (this.displayData.main.temp_max - 273.15).toFixed(0);
      this.weatherIcon = "http://openweathermap.org/img/w/10d.png";
  }

}

