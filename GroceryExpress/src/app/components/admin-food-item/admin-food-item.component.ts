import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DishService } from 'src/services/dish.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/services/alertify.service';
import { Dish } from 'src/app/models/dish';
import { Dishes } from 'src/app/models/dishes';

@Component({
  selector: 'admin-food-item',
  templateUrl: './admin-food-item.component.html',
  styleUrls: ['./admin-food-item.component.css']
})
export class AdminFoodItemComponent implements OnInit {
  id: number;
  constructor(
    private dishService: DishService,
    private activatedRoute: ActivatedRoute,
    private alertify: AlertifyService,
    private fb: FormBuilder
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (this.id) {
      this.dishService.getDish(this.id).subscribe((dish: any) => {
        this.productForm.patchValue({
          price: dish.value.price,
          meal: dish.value.meal,
          url: dish.value.url
        });
        console.log(dish);
      });
    }
  }
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
    if (this.productForm.valid) {
      this.dish = Object.assign({}, this.productForm.value);
      if (this.id) {
        this.dishService.updateDish(this.id, this.dish).subscribe(
          () => {
            this.alertify.success('poprawiono');
          },
          error => {
            this.alertify.error(error);
          }
        );
      } else {
        this.dishService.addDish(this.dish).subscribe(
          () => {
            this.alertify.success('zapisano');
            this.productForm.reset();
          },
          error => {
            this.alertify.error(error);
          }
        );
      }
    } else {
      this.alertify.error('Błąd danych');
    }
  }
}
