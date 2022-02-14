import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastComponent } from './components/forecast/forecast.component';
import { HomeComponent } from './components/home/home.component';
import { ForecastResolver } from './resolvers/forecast.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'forecast/:zipCode',
    component: ForecastComponent,
    resolve: {
      response: ForecastResolver
    }
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ], exports: [RouterModule]
})
export class AppRoutingModule { }
