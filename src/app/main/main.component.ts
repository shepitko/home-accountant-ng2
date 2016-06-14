import { Component, OnInit } from '@angular/core';
import { AlertComponent, DATEPICKER_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { NbuService, Nbu } from '../nbu.service';
import { CategoryService, Category } from '../category.service';
import { WalletService, Wallet } from '../wallet.service';

@Component({
  moduleId: module.id,
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
  providers: [NbuService, CategoryService, WalletService],
  directives: [AlertComponent, DATEPICKER_DIRECTIVES]
})
export class MainComponent implements OnInit {
  date: Date = new Date();
  courses: Array<Nbu>;
  categories: Array<Category>;
  spends: Array<Category>;
  incomes: Array<Category>;
  wallets: Array<Wallet>;
  selectedNbu: Nbu;
  sum = {income:0, spend:0, total:0}

  constructor(
    private nbuService: NbuService, 
    private categoryService: CategoryService,
    private walletService: WalletService
    ) {}

  ngOnInit() {
    this.nbuService.loadNbu()
    .then(courses => {
      this.courses = courses;
    });

    this.categoryService.loadAllCategories()
    .then(categories => {
      this.categories = categories;
    });
    this.categoryService.loadSpendCategory()
    .then(categories => {
      this.spends = categories;
    });
    this.categoryService.loadIncomeCategory()
    .then(categories => {
      this.incomes = categories;
    });
    
    this.walletService.loadWallets()
    .then(wallets => {
      this.wallets = wallets.reverse();
    });
    
    this.walletService.loadWallets().then(wallets => {
      wallets.forEach(res => {
        if(res['category']['types'] == 'spending'){
          this.sum['spend'] += parseFloat(res['price'])
        }else if(res['category']['types'] == 'income'){
          this.sum['income'] += parseFloat(res['price'])
        }
      })
      this.sum['total']= parseFloat((this.sum['income'] - this.sum['spend']).toFixed(2));
      console.log(this.sum);
    });
  }

}