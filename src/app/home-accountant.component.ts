import { Component } from '@angular/core';
import { StatisticComponent } from './statistic';
import { Router, Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { MainComponent } from './main';
import { IncomeComponent } from './income';
import { SpendComponent } from './spend';
import {LoginComponent} from './auth/login';
import {SignUpComponent} from './auth/sign-up';
//services


@Component({
  moduleId: module.id,
  selector: 'home-accountant-app',
  templateUrl: 'home-accountant.component.html',
  styleUrls: ['home-accountant.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/home', component: MainComponent},
  {path: '/statistic', component: StatisticComponent},
  {path: '/income', component: IncomeComponent},
  {path: '/spend', component: SpendComponent},
  {path: '/auth/login', component:LoginComponent},
  {path: '/auth/sign-up', component:SignUpComponent}
  ])
export class HomeAccountantAppComponent {
  constructor(public router: Router){}

}