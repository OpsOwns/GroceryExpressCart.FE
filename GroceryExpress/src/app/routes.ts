import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { AuthGuard } from 'src/guards/authGuard';
import { AdminFoodListComponent } from './components/admin-food-list/admin-food-list.component';
import { AdminFoodItemComponent } from './components/admin-food-item/admin-food-item.component';
import { BasketComponent } from './components/basket/basket.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'food-list', component: FoodListComponent },
      { path: 'admin-food-item', component: AdminFoodItemComponent },
      { path: 'admin-food-item/:id', component: AdminFoodItemComponent },
      { path: 'admin-food-list', component: AdminFoodListComponent },
      { path: 'basket', component: BasketComponent}
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
