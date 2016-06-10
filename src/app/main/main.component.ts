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
      this.wallets = wallets;
      /*console.log(wallets);*/
    });

    //minus date
    /*
    letminusMonth: string = new Date
    minusMonth.setMonth(minusMonth.getMonth() - 1);
    console.log(minusMonth.toLocaleDateString('ru-RU'))
    */
  }

}