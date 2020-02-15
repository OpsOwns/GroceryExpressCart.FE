import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodItemComponent } from './components/food-item/food-item.component';
import { FoodListComponent } from './components/food-list/food-list.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'food', component: FoodItemComponent },
  { path: 'food-list', component: FoodListComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
