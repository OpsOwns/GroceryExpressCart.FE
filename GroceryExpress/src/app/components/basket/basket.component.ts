import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/services/basket.service';
import { Basket } from 'src/app/models/Basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket: Basket[];
  totalCost: number;
  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.basket = this.basketService.getBasket();
    this.totalCost = this.basketService.getTotalAmmount();
  }

  delete(id: number) {
    this.basketService.removeBasketItem(id);
    this.basket = this.basketService.getBasket();
    this.totalCost = this.basketService.getTotalAmmount();
  }

}
