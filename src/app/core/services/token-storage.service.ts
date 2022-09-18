import { Injectable } from '@angular/core';
import { DataSharedService } from 'src/app/shared/service/data-shared.service';
import APPCONSTANTS from '../../contants/constants';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor(private dataSharedService : DataSharedService) {}

  signOut(): void {
    window.sessionStorage.clear();
    this.dataSharedService.setuserLogged(false)
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(APPCONSTANTS.TOKEN_KEY);
    window.sessionStorage.setItem(APPCONSTANTS.TOKEN_KEY, token);
    this.dataSharedService.setuserLogged(true);
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

  isUserLogged() {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  setQuiz(quiz:any){
    window.sessionStorage.removeItem(APPCONSTANTS.QUIZ_KEY);
    window.sessionStorage.setItem(APPCONSTANTS.QUIZ_KEY, JSON.stringify(quiz.data));
  }
  public getQuiz(): any {
    const quiz = window.sessionStorage.getItem(APPCONSTANTS.QUIZ_KEY);
    if (quiz) {
      return JSON.parse(quiz);
    }

    return {};
  }
  
}
