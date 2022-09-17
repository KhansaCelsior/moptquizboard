import { Injectable } from '@angular/core';
import  APPCONSTANTS  from '../../contants/constants';

 @Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    console.log('APPCONSTANTS: ', APPCONSTANTS);
    //window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(APPCONSTANTS.TOKEN_KEY);
    window.sessionStorage.setItem(APPCONSTANTS.TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(APPCONSTANTS.TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(APPCONSTANTS.USER_KEY);
    window.sessionStorage.setItem(APPCONSTANTS.USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(APPCONSTANTS.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}