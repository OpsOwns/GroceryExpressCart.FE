import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DishService } from 'src/services/dish.service';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/services/alertify.service';
import { Dish } from 'src/app/models/dish';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'admin-food-item',
  templateUrl: './admin-food-item.component.html',
  styleUrls: ['./admin-food-item.component.css']
})
export class AdminFoodItemComponent implements OnInit {
  productForm: FormGroup;
  dish: Dish;
  constructor(
    private dishService: DishService,
    private router: Router,
    private alertify: AlertifyService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {}
  createDishForm() {

  }
  save() {
    if (this.productForm.valid) {
      this.dish = Object.assign({}, this.productForm.value);
      this.dishService.addDish(this.dish);
    }

  }

}
