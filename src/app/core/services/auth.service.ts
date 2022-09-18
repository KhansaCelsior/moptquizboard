import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(userDetails: any): Observable<any> {
    console.log('userDetails: ', userDetails);
    return this.http.post(
      environment.API_BASEURL + 'signup',
      userDetails,
      httpOptions
    );
  }

  login(userLoginDetails:any): Observable<any> {
    console.log('username: ', userLoginDetails);
return this.http.post(
      environment.API_BASEURL + 'login',
      userLoginDetails,
      httpOptions
    );
  }


}
