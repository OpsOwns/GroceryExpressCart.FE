import { Component, OnInit } from '@angular/core';
import { DishService } from 'src/services/dish.service';
import { Value, Dishes } from 'src/app/models/dishes';
import { BeanService } from 'src/services/bean.service';
import { Dish } from 'src/app/models/dish';
import { Bean } from 'src/app/models/Bean';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  dishes: Value[];
  constructor(private dishService: DishService, private beanService: BeanService) { }

  ngOnInit() {
    this.dishService.getDishes().subscribe(
      (dish: Dishes) => {
        this.dishes = dish.value;
      },
      error => console.log(error)
    );
  }

  addToBean(dish: Dish) {
    const bean = new Bean();
    bean.id = dish.id;
    bean.name = dish.meal;
    bean.price = dish.price;
    this.beanService.addBean(bean);
  }
}
