import {Http, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const BASE_URL = 'http://home-accountant.herokuapp.com/api/v1/users/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

export interface User {
  id: number;
  email: string;
  name: string;
  /*img: string;*/
};

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  loadUsers(){
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .toPromise();
  }
}
