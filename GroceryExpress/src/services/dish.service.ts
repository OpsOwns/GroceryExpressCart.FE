import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dish } from 'src/app/models/dish';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('JWT_TOKEN')
  })
};

@Injectable({
  providedIn: 'root'
})
export class DishService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  addDish(dish: Dish): Observable<any> {
    return this.http.post(this.baseUrl + 'meal/create', dish, httpOptions);
  }
}
