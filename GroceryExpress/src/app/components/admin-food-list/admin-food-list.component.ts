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
  config: any;
  totalRec: number;
  sortAsc: boolean;
  constructor(private dishService: DishService, private alertyfi: AlertifyService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.totalRec
    };
  }
  ngOnInit() {
    this.dishService.getDishes().subscribe(
      (dish: Dishes) => {
        this.dishes = dish.value;
        this.totalRec = this.dishes.length;
      },
      error => console.log(error)
    );
  }
  sortMeal(value: string) {
    this.dishes.sort((a, b) => {
      switch (value) {
        case 'meal': return this.compare(a.meal, b.meal, this.sortAsc === false ? true : false);
        case 'price': return this.compare(a.price, b.price, this.sortAsc === false ? true : false);
      }

    });
    this.sortAsc = this.switchButton(this.sortAsc);
  }

  switchButton(value: boolean) {
   return value === true ? false : true;
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
  delete(id: number) {
    this.alertyfi.confirm('Jesteś pewnien że chcesz skasować posiłek?', () => {
      this.dishService.removeDish(id).subscribe(() => this.alertyfi.success('Skasowano'));
      const index = this.dishes.findIndex(x => x.id === id);
      if (index > -1) {
        this.dishes.splice(index, 1);
      }
    });
  }
}
