import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreRoutingModule } from './core-routing.module';
const CoreComponents = [HeaderComponent, LoginComponent, RegisterComponent];

@NgModule({
  declarations: [CoreComponents],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule ,
    CoreRoutingModule
  ],
  exports:[CoreComponents],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
],
})
export class CoreModule { }
