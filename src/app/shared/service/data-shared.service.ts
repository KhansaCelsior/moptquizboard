import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class DataSharedService {
  constructor() {}

  private userLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public userLogged$: Observable<boolean> = this.userLogged.asObservable();

  setuserLogged(newMessage: boolean) {
    this.userLogged.next(newMessage);
  }
}
