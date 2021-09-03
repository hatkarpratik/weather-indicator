import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable ({
    providedIn: 'root'
})

export class WeatherDataService {

    constructor(private http:HttpClient) {}

}