import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TokenStorageService } from './core/services/token-storage.service';
import { DataSharedService } from './shared/service/data-shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'celsior-quizz';
  isUserLogged: boolean = false;
  constructor(
    private primengConfig: PrimeNGConfig,
    private token: TokenStorageService,
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.getUserToken();
  }
  getUserToken() {
    if (this.token.isUserLogged()) {
      this.isUserLogged = true;
    } else {
      this.isUserLogged = false;
    }
   
  }
}
