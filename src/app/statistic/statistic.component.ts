import { Component, OnInit } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import 'chartjs'
@Component({
  moduleId: module.id,
  selector: 'app-statistic',
  templateUrl: 'statistic.component.html',
  styleUrls: ['statistic.component.css'],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, CHART_DIRECTIVES]
})
export class StatisticComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
 // Doughnut
  public doughnutChartLabels:string[] = ['Расход', 'Доход'];
  public doughnutChartData:number[] = [35000, 45000];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
