import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { User, RegisterUser } from 'src/app/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl;
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  currentUser: User;
  constructor(private http: HttpClient) {}

  login(model: User): Observable<void> {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('JWT_TOKEN', user.jwtDTO.token);
          localStorage.setItem('USER', JSON.stringify(user));
          this.decodedToken = this.jwtHelper.decodeToken(user.jwtDTO.token);
          this.currentUser = user;
        }
      })
    );
  }
  register(user: RegisterUser): Observable<any> {
    return this.http.post(this.baseUrl + 'account/register', user);
  }
  loggedIn() {
    const token = localStorage.getItem('JWT_TOKEN');
    return !this.jwtHelper.isTokenExpired(token);
  }
  logOut() {
    localStorage.removeItem('JWT_TOKEN');
    localStorage.removeItem('EXPIRE_TOKEN');
    localStorage.removeItem('USER');
    this.decodedToken = null;
    this.currentUser = null;
  }
}
