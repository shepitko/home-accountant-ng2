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
  sumSpend: any;
  pieChartLabels:string[];
  pieChartData:number[];
  pieChartType:string = 'pie';
  total: number = 0;

  constructor(
    private walletService: WalletService
  ) {}

  ngOnInit() {
    this.walletService.loadSpendWallets()
    .then(wallets => {
      this.wallets = wallets;
    });

    this.walletService.loadSumSpendWallets()
    .then(wallets => {

      this.pieChartLabels = new Array;
      this.pieChartData = new Array;
      this.sumSpend = wallets;

      wallets.forEach(res => {
        this.pieChartLabels.push(res['category']['name']);
        this.pieChartData.push(res['price']);
        this.total += parseFloat(res['price']);
      })
    });
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
