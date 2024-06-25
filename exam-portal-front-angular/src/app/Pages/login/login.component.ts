import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/MyServices/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide=true;
  public user = {
    username:"",
    password:""
  }
  constructor(private loginService:LoginService, private snack:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

  getLogin=()=>{
    console.log("Login button clicked!");
    if(this.user.username.trim()=="" || this.user.username==null)
    {
      this.snack.open("Username is required!!", "", {
        duration:3000,
      });
      return;
    }
    if(this.user.password.trim()=="" || this.user.password==null)
    {
      this.snack.open("password is required!!", "", {
        duration:3000,
      });
      return;
    }
    // Request to server to generate token
    this.loginService.generateToken(this.user).subscribe(
      (data:any)=>{
        console.log("Success!!");
          
        //Login Here..
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentLoggedInUser().subscribe(
          (user:any)=>{
            this.loginService.setUser(user);
            console.log(user);
            ////Redirect user to accrding heir role
          
            if(this.loginService.getUserRole()==="ADMIN")
            {
              //window.location.href=  "/admin";
              this.router.navigate(['admin']);
              this.loginService.loginStatusSubbject.next(true);
            }else if(this.loginService.getUserRole()==="GENERAL")
            {
              //window.location.href=  "/user-dashboard/0";
              this.router.navigate(['user-dashboard/0']);
              this.loginService.loginStatusSubbject.next(true);
            }else{
              this.loginService.logout();
            }
          },
          (error)=>{
            console.log(error);
            this.snack.open("Invalid credential!! Try again..","", {
              duration:3000,
            });
          }
        );
      },
      (error)=>{
        console.log("Error!!");
        console.log(error);
        this.snack.open("Invalid credential!! Try again..","", {
          duration:3000,
        });
      }
    );
  }

}
