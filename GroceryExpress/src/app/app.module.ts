import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavComponent } from './components/navbar/nav.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorInterceptorProvider } from './errorHandler/error.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FoodItemComponent } from './components/food-item/food-item.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { LearnMoreComponent } from './components/learnMore/learnMore.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminFoodItemComponent } from './components/admin-food-item/admin-food-item.component';
import { AdminFoodListComponent } from './components/admin-food-list/admin-food-list.component';
import { ProfileComponent } from './components/profile/profile.component';
@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, RegisterComponent, FoodItemComponent, FoodListComponent,
    LearnMoreComponent, FooterComponent, AdminFoodItemComponent, AdminFoodListComponent, ProfileComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
