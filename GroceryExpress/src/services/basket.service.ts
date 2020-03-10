import { Injectable } from '@angular/core';
import { Basket } from 'src/app/models/Basket';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basketArry: Basket[] = [];
  constructor() { }

  getBasket(): Basket[] {
    const retrivedData = localStorage.getItem('basket');
    const parsed = JSON.parse(retrivedData);
    this.basketArry = parsed;
    return this.basketArry;
  }

  addBasket(bean: Basket) {
    if (this.basketArry === null) {
      this.basketArry = [];
    }
    this.basketArry.push(bean);
    localStorage.setItem('basket', JSON.stringify(this.basketArry));
  }

  clearBasket() {
    localStorage.removeItem('basket');
  }

  getCount() {
    return this.getBasket().length;
  }

  getTotalAmmount() {
    var total = 0;
    this.getBasket().forEach(element => {
      total += element.price;
    });
    return total;
  }

  removeBasketItem(id: number) {
    this.getBasket();
    this.basketArry = this.basketArry.filter(x => x.id !== id);
    this.basketArry.length === 0 ?
      localStorage.removeItem('basket')
      :
      localStorage.setItem('basket', JSON.stringify(this.basketArry));
  }
}
