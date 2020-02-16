import {Token} from '../models/token';

export interface User {
  memberShipId: number;
  email: string;
  login: string;
  jwtDTO: Token;
}

export interface RegisterUser {
  Login: string;
  Password: string;
  Email: string;
}
