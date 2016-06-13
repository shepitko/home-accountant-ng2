import { Component, OnInit } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import 'chartjs';

import { WalletService, Wallet } from '../wallet.service';

@Component({
  moduleId: module.id,
  selector: 'app-spend',
  templateUrl: 'spend.component.html',
  styleUrls: ['spend.component.css'],
  providers: [ WalletService],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, CHART_DIRECTIVES]
})
export class SpendComponent implements OnInit {

  wallets: Array<Wallet>;

  constructor(
    private walletService: WalletService
  ) {}

  ngOnInit() {
    this.walletService.loadSpendWallets()
    .then(wallets => {
      this.wallets = wallets;
      /*console.log(wallets);*/
    });
  }
  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
