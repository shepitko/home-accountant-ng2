import { Component, OnInit } from '@angular/core';
import { NbuService, Nbu } from '../nbu.service';
import { CategoryService, Category } from '../category.service';

@Component({
  moduleId: module.id,
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
  providers: [NbuService, CategoryService]
})
export class MainComponent implements OnInit {

  courses: Array<Nbu>;
  categories: Array<Category>;
  selectedNbu: Nbu;

  constructor(
    private nbuService: NbuService, 
    private categoryService: CategoryService
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
  }
}