import { Component, OnInit } from '@angular/core';
import { NbuService, Nbu } from '../nbu.service';
import { CategoryService, Category } from '../category.service';
import { WalletService, Wallet } from '../wallet.service';

@Component({
  moduleId: module.id,
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
  providers: [NbuService, CategoryService, WalletService]
})
export class MainComponent implements OnInit {

  courses: Array<Nbu>;
  categories: Array<Category>;
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
      console.log(categories);
    });

    this.walletService.loadWallets()
    .then(wallets => {
      this.wallets = wallets;
      console.log(wallets);
    });
  }
}