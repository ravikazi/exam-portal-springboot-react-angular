import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/MyServices/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() toggleSideBarForMe :EventEmitter<any>= new EventEmitter();
  isLoggedIn = false;
  user = null;
  constructor(public loginService:LoginService, private snack:MatSnackBar) { }
  
  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.user=this.loginService.getUser();
    this.loginService.loginStatusSubbject.asObservable().subscribe(
      (data)=>{
        this.isLoggedIn = this.loginService.isLoggedIn();
        this.user=this.loginService.getUser();
      }
    );
  }
  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }

  logout=()=>{
    this.loginService.logout();
    this.snack.open("Successfully logout!!","", {
      duration:3000
    });
    this.isLoggedIn=false;
    this.user=null;
    window.location.reload();
  }
}
