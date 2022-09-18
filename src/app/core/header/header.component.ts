import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataSharedService } from 'src/app/shared/service/data-shared.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input()
  isUserLogged: boolean | undefined;
  userLoggedSub: Subscription | undefined;
  currentPath: any;
  constructor(
    private token: TokenStorageService,
    private router: Router,
    private dataSharedService: DataSharedService
  ) {
    console.log(this.router)
  }

  ngOnInit(): void {
    console.log('isUserLogged', this.isUserLogged);
    this.userLoggedSub = this.dataSharedService.userLogged$.subscribe(
      (data) => (this.isUserLogged = data)
    );
 
  }

  logout() {
    this.token.signOut();
    this.router.navigate(['/login']);
    this.isUserLogged = false;
  }
  ngOnDestroy() {
    if (this.userLoggedSub) this.userLoggedSub.unsubscribe();
  }
}
