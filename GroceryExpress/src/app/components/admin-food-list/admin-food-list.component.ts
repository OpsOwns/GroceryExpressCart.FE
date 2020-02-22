import { Component, OnInit } from '@angular/core';
import { DishService } from 'src/services/dish.service';
import { Dishes, Value } from 'src/app/models/dishes';
import { AlertifyService } from 'src/services/alertify.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'admin-food-list',
  templateUrl: './admin-food-list.component.html',
  styleUrls: ['./admin-food-list.component.css']
})
export class AdminFoodListComponent implements OnInit {
  dishes: Value[];
  constructor(private dishService: DishService, private alertyfi: AlertifyService) {
    dishService.getDishes().subscribe(
      (dish: Dishes) => {
        this.dishes = dish.value;
      },
      error => console.log(error)
    );
  }

  ngOnInit() {}

  delete(id: number) {
    this.alertyfi.confirm('Jesteś pewnien że chcesz skasować posiłek?', () => {
      this.dishService.removeDish(id).subscribe(() => this.alertyfi.success('Skasowano'));
      const index = this.dishes.findIndex(x => x.id === id);
      if (index > -1) {
         this.dishes.splice(index, 1);
    }});
  }
}
