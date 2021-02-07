import { Injectable } from '@angular/core';
import { LoginCheck, Signup } from './signup.model';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  formData!: Signup; 
  Check! : LoginCheck;
  readonly RootUrl = "https://localhost:44332/Employee"

  constructor( private http : HttpClient ) { }

  PostEmployee(formData : Signup)
  {
    return this.http.post(this.RootUrl +'/PostData',formData);
  }
  LoginCheck (Check : LoginCheck)
  {
    return this.http.post(this.RootUrl+'/CredentialCheck',Check)
  }

}
