import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from '../shared/signup.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  data:any;

  constructor(public service : SignupService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.resetForm()
  }

  resetForm(signform? : NgForm)
    {
      if(signform != null)
      signform.resetForm();
      this.service.Check = {
        Email : '',
        Password : ''
      }
    }

  onSubmit(signform:NgForm)
  {
    this.Check(signform)
  }
  Check(signform:NgForm)
  {
    this.service.LoginCheck(signform.value).subscribe((res)=>this.data=res)
      console.log(this.data)
      this.resetForm(signform)
    }
}
