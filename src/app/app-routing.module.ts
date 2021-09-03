import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WeatherComponent } from './weather/weather.component';

const appRoutes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: 'about', component: AboutComponent },
  { path: '',   redirectTo: '/weather', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
