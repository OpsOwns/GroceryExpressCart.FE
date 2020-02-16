import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'admin-food-item',
  templateUrl: './admin-food-item.component.html',
  styleUrls: ['./admin-food-item.component.css']
})
export class AdminFoodItemComponent implements OnInit {
  productForm: FormGroup;
  constructor() {}

  ngOnInit() {}
  save() {}
}
