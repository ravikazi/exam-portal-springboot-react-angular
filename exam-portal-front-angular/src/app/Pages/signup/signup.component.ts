import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/MyServices/user.service';
//import Swal from 'SweetAlert';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide = true;
  constructor(private userService:UserService, private _snackBar: MatSnackBar) { }
  public user = {
    username:"",
    password:"",
    firstname:"",
    lastname:"",
    email:"",
    phone:"",
  }

  ngOnInit(): void {
  }

  formSubmit=()=>{
    if(this.user.username=="" || this.user.username==null)
    {
      Swal.fire("Error!!","Username is required!", "error");
      return;
    }
    if(this.user.password=="" || this.user.password==null)
    {
      Swal.fire("Error!!","password is required!", "error");
      return;
    }
    //Add user from userService
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        //Success
        Swal.fire("Success!!","Username <strong>"+this.user.username+"</strong> has been sumitted successfully","success");
        this.user.username='';
      },(error)=>{
        //Error
        Swal.fire("Error!!","Something went wrong!", "error");
      });
  }
}
