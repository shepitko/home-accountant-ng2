import {Http, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const BASE_URL = 'http://home-accountant.herokuapp.com/api/v1/categories/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

export interface Category {
  id: number;
  name: string;
  types: string;
  path_img: string;
};

@Injectable()
export class CategoryService {

  constructor(private http: Http) {}

  loadAllCategories(){
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .toPromise();
  }

  loadSpendCategory(){
    return this.http.get(BASE_URL+'types/spend')
      .map(res => res.json())
      .toPromise();
  }

  loadIncomeCategory(){
    return this.http.get(BASE_URL+'types/income')
      .map(res => res.json())
      .toPromise();
  }

  saveCategory(category: Category) {
    return (category.id) ? this.updateCategory(category) : this.createCategory(category);
  }

  createCategory(category: Category) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(category), HEADER)
      .map(res => res.json())
      .toPromise();
  }

  updateCategory(category: Category) {
    return this.http.put(`${BASE_URL}${category.id}`, JSON.stringify(category), HEADER)
      .map(res => res.json())
      .toPromise();
  }

  deleteCategory(category: Category) {
    return this.http.delete(`${BASE_URL}${category.id}`)
      .map(res => res.json())
      .toPromise();
  }

}
