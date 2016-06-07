import { Component } from '@angular/core';
import { StatisticComponent } from './statistic';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { MainComponent } from './main';
import { IncomeComponent } from './income';
import { SpendComponent } from './spend';

@Component({
  moduleId: module.id,
  selector: 'home-accountant-app',
  templateUrl: 'home-accountant.component.html',
  styleUrls: ['home-accountant.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/', component: MainComponent},
  {path: '/statistic', component: StatisticComponent},
  {path: '/income', component: IncomeComponent},
  {path: '/spend', component: SpendComponent}
  ])
export class HomeAccountantAppComponent {

}