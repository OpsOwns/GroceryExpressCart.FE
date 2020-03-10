import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dish } from 'src/app/models/dish';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Dishes } from 'src/app/models/dishes';

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

  getDish(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'meal/get/' + id, httpOptions);
  }

  getDishes(): Observable<Dishes> {
    return this.http.get<Dishes>(this.baseUrl + 'meal/Meals', httpOptions);
  }

  updateDish(id: number, dish: Dish): Observable<any> {
    return this.http.put(this.baseUrl + 'meal/update/' + id, dish, httpOptions);
  }
  removeDish(mealId: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'meal/delete/' + mealId, httpOptions);
  }
}
