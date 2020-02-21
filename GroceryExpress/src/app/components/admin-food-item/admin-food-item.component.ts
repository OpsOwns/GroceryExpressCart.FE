import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  constructor(
    private dishService: DishService,
    private router: Router,
    private alertify: AlertifyService,
    private fb: FormBuilder
  ) {}
  productForm: FormGroup;
  dish: Dish;
  pricePattern = '/^d+.d{0,2}$/';

  ngOnInit() {
    this.createDishForm();
  }
  createDishForm() {
    this.productForm = this.fb.group({
      meal: ['', Validators.required],
      price: ['', Validators.required],
      url: ['', Validators.required]
    });
  }
  save() {
    console.log(this.productForm.value);
    if (this.productForm.valid) {
      this.dish = Object.assign({}, this.productForm.value);
      this.dishService.addDish(this.dish).subscribe(
        () => {
          this.alertify.success('doddano danie');
          this.productForm.reset();
        },
        error => {
          this.alertify.error(error);
        }
      );
    } else {
      this.alertify.error('Błąd danych');
    }
  }
}
