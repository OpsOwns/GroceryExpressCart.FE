import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { AlertifyService } from 'src/services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        this.alertify.success('Zalogowano poprawnie');
      },
      error => {
        this.alertify.error(error);
      },
      () => {
        this.router.navigate(['/food-list']);
      }
    );
  }
  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    this.authService.logOut();
    this.alertify.message('wylogowano');
    this.router.navigate(['/home']);
  }
}
