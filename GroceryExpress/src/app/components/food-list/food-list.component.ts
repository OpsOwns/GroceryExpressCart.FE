import { Component, OnInit } from '@angular/core';
import { DishService } from 'src/services/dish.service';
import { Value, Dishes } from 'src/app/models/dishes';
import { BasketService } from 'src/services/basket.service';
import { Dish } from 'src/app/models/dish';
import { Basket } from 'src/app/models/Basket';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  dishes: Observable<Dishes>;
  constructor(private dishService: DishService, private basketService: BasketService) { }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

  addToBean(dish: Dish) {
    const basket = new Basket();
    basket.id = dish.id;
    basket.name = dish.meal;
    basket.price = dish.price;
    this.basketService.addBasket(basket);
  }
}
