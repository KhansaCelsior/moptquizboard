import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';

const CoreComponents = [HeaderComponent, LoginComponent, RegisterComponent,SidenavigationComponent];

@NgModule({
  declarations: [CoreComponents],
  imports: [
    CommonModule
  ],
  exports:[CoreComponents]
})
export class CoreModule { }
