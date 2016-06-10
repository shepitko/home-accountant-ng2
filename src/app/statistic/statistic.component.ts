import { Component } from '@angular/core';
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
export class StatisticComponent {

  // Doughnut Charts
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

  //Bar Charts
  public barChartData:Array<any> = [
    {data: [2800, 4800, 4000, 19000, 8600, 2700], label: 'Расходы'},
    {data: [6500, 5900, 8000, 8100, 5600, 5500], label: 'Доход'}
    
  ];
  public barChartLabels:Array<any> = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'];
  public barChartOptions:any = {
    responsive: true,
    maintainAspectRatio: true
  };
  public barChartLegend:boolean = true;
  public barChartType:string = 'bar';
  
  public randomize(){
    console.log('hello')
  }

}
