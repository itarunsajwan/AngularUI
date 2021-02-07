import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from '../shared/signup.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( public service : SignupService,
    private toastr : ToastrService,private http:HttpClient) { }

  ngOnInit(): void {
    this.resetForm();
  }
    resetForm(form? : NgForm)
    {
      if(form != null)
        form.resetForm();
      this.service.formData = {
        FullName : '',
        Email : '',
        Address : '',
        ContactNumber : '',
        Country : '',
        State : '',
        City : '',
        Pincode : '',
        Password : '',
        ConfirmPassword:''
      }
    }

    onSubmit(form : NgForm)
    {
      this.insertData(form)
    }
    insertData (form:NgForm)
    {
      this.service.PostEmployee(form.value).subscribe(res => {
        this.toastr.success("Registeration Done",'Create Your Account')
        this.resetForm(form)
      }
    )}

    Mail($event:any)
    {
      var param = $event.target.value;
      this.http.get('https://localhost:44332/Employee/IsEmail/Email?Email='+param).subscribe(res=>{
        console.log(res);
      })
    }

}
